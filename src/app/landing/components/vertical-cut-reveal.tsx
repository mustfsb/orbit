"use client";

import { motion, type Transition } from "framer-motion";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

interface TextProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  children: ReactNode;
  reverse?: boolean;
  transition?: Transition;
  splitBy?: "words" | "characters" | "lines" | string;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  containerClassName?: string;
  wordLevelClassName?: string;
  elementLevelClassName?: string;
  onStart?: () => void;
  onComplete?: () => void;
  autoStart?: boolean;
}

export interface VerticalCutRevealRef {
  startAnimation: () => void;
  reset: () => void;
}

interface WordObject {
  characters: string[];
  needsSpace: boolean;
}

const VerticalCutReveal = forwardRef<VerticalCutRevealRef, TextProps>(function VerticalCutReveal(
  {
    children,
    reverse = false,
    transition = {
      type: "spring",
      stiffness: 190,
      damping: 22,
    },
    splitBy = "words",
    staggerDuration = 0.2,
    staggerFrom = "first",
    containerClassName,
    wordLevelClassName,
    elementLevelClassName,
    onStart,
    onComplete,
    autoStart = true,
    ...props
  },
  ref,
) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const text = typeof children === "string" ? children : children?.toString() || "";
  const [isAnimating, setIsAnimating] = useState(false);

  const splitIntoCharacters = (value: string): string[] => {
    if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
      const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
      return Array.from(segmenter.segment(value), ({ segment }) => segment);
    }

    return Array.from(value);
  };

  const elements = useMemo(() => {
    if (splitBy === "characters") {
      const words = text.split(" ");

      return words.map((word, index) => ({
        characters: splitIntoCharacters(word),
        needsSpace: index !== words.length - 1,
      }));
    }

    if (splitBy === "words") {
      return text.split(" ");
    }

    if (splitBy === "lines") {
      return text.split("\n");
    }

    return text.split(splitBy);
  }, [text, splitBy]);

  const totalAnimatedElements = useMemo(
    () =>
      splitBy === "characters"
        ? (elements as WordObject[]).reduce((count, word) => count + word.characters.length, 0)
        : elements.length,
    [elements, splitBy],
  );

  const randomAnchorIndex = useMemo(() => {
    if (staggerFrom !== "random" || totalAnimatedElements === 0) {
      return 0;
    }

    return Math.floor(Math.random() * totalAnimatedElements);
  }, [staggerFrom, totalAnimatedElements]);

  const getStaggerDelay = useCallback(
    (index: number) => {
      const total = totalAnimatedElements;

      if (staggerFrom === "first") {
        return index * staggerDuration;
      }

      if (staggerFrom === "last") {
        return (total - 1 - index) * staggerDuration;
      }

      if (staggerFrom === "center") {
        const center = Math.floor(total / 2);
        return Math.abs(center - index) * staggerDuration;
      }

      if (staggerFrom === "random") {
        return Math.abs(randomAnchorIndex - index) * staggerDuration;
      }

      return Math.abs(staggerFrom - index) * staggerDuration;
    },
    [randomAnchorIndex, staggerDuration, staggerFrom, totalAnimatedElements],
  );

  const startAnimation = useCallback(() => {
    setIsAnimating(true);
    onStart?.();
  }, [onStart]);

  useImperativeHandle(ref, () => ({
    startAnimation,
    reset: () => setIsAnimating(false),
  }));

  useEffect(() => {
    if (autoStart) {
      startAnimation();
    }
  }, [autoStart, startAnimation]);

  const baseDelay = typeof transition.delay === "number" ? transition.delay : 0;
  const variants = {
    hidden: { y: reverse ? "-100%" : "100%" },
    visible: (index: number) => ({
      y: 0,
      transition: {
        ...transition,
        delay: baseDelay + getStaggerDelay(index),
      },
    }),
  };

  const renderedElements =
    splitBy === "characters"
      ? (elements as WordObject[])
      : (elements as string[]).map((element, index) => ({
          characters: [element],
          needsSpace: splitBy === "words" && index !== elements.length - 1,
        }));

  const finalAnimatedIndex =
    totalAnimatedElements === 0
      ? -1
      : Array.from({ length: totalAnimatedElements }, (_, index) => index).reduce((latestIndex, currentIndex) => {
          const latestDelay = getStaggerDelay(latestIndex);
          const currentDelay = getStaggerDelay(currentIndex);

          return currentDelay >= latestDelay ? currentIndex : latestIndex;
        }, 0);

  return (
    <span
      className={cx(
        "flex flex-wrap whitespace-pre-wrap",
        splitBy === "lines" && "flex-col",
        containerClassName,
      )}
      ref={containerRef}
      {...props}
    >
      <span className="sr-only">{text}</span>

      {renderedElements.map((wordObject, wordIndex, wordArray) => {
        const previousCharsCount = wordArray
          .slice(0, wordIndex)
          .reduce((sum, word) => sum + word.characters.length, 0);

        return (
          <span
            key={`${wordObject.characters.join("")}-${wordIndex}`}
            aria-hidden="true"
            className={cx("inline-flex overflow-hidden", wordLevelClassName)}
          >
            {wordObject.characters.map((character, characterIndex) => (
              <span
                key={`${character}-${characterIndex}`}
                className={cx("relative whitespace-pre-wrap", elementLevelClassName)}
              >
                <motion.span
                  custom={characterIndex + previousCharsCount}
                  initial="hidden"
                  animate={isAnimating ? "visible" : "hidden"}
                  variants={variants}
                  className="inline-block"
                  onAnimationComplete={
                    previousCharsCount + characterIndex === finalAnimatedIndex
                      ? onComplete
                      : undefined
                  }
                >
                  {character}
                </motion.span>
              </span>
            ))}
            {wordObject.needsSpace && <span> </span>}
          </span>
        );
      })}
    </span>
  );
});

export default VerticalCutReveal;

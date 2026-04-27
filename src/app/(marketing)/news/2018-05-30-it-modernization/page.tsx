export default function Page() {
  return (
    <div className="px-site py-section-loose">
      <div className="max-w-site mx-auto">
        <div className="max-w-2xl">
          <h1 className="font-sans text-[56px] leading-[53px] tracking-[-1.96px] lg:text-[96px] lg:leading-[91px] lg:tracking-[-3.36px] font-semibold text-foreground/10">
            404
          </h1>
          <h2 className="mt-6">Page not found</h2>
          <p className="font-sans text-[18px] leading-[27px] text-muted-foreground mt-4 max-w-lg">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved. Try one of the links below or use search to find what you
            need.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/"
              type="button"
              tabIndex={0}
              data-slot="button"
              className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full bg-primary text-primary-foreground hover:bg-primary/80 h-11 gap-2 px-6 text-base"
            >
              Go home
            </a>
            <a
              href="/about"
              type="button"
              tabIndex={0}
              data-slot="button"
              className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border bg-clip-padding text-sm font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full border-border bg-transparent text-foreground hover:bg-muted h-9 gap-1.5 px-4"
            >
              About the Council
            </a>
            <a
              href="/policies-and-priorities"
              type="button"
              tabIndex={0}
              data-slot="button"
              className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border bg-clip-padding text-sm font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full border-border bg-transparent text-foreground hover:bg-muted h-9 gap-1.5 px-4"
            >
              Policies
            </a>
            <a
              href="/resources"
              type="button"
              tabIndex={0}
              data-slot="button"
              className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border bg-clip-padding text-sm font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full border-border bg-transparent text-foreground hover:bg-muted h-9 gap-1.5 px-4"
            >
              Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

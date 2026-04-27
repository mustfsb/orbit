import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <div className="bg-background min-h-screen">
      <div
        data-breadcrumb="true"
        className="sticky z-40 bg-background/90 backdrop-blur-xl transition-[top,box-shadow] duration-300 [[data-scrolled]_&]:shadow-[0_1px_8px_rgba(0,0,0,0.08)] "
        style={{ top: "var(--header-offset, 0px)" }}
      >
        <div className="border-y border-border px-site">
          <div className="max-w-site mx-auto flex items-center justify-between py-5">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Link
                    href="/about"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-muted-foreground/50">/</span>
                  <span className="text-primary truncate max-w-[30ch]">
                    Members & Leadership
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section className="py-section px-site">
        <div className="w-full max-w-site mx-auto">
          <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[56px] lg:leading-[67px] lg:tracking-[-1.68px] max-w-[800px] mb-20 lg:mb-24 font-medium">
            Leadership appointed by OMB&apos;s Deputy Director for Management
            guides the Council.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Link
              href="/about/members-and-leadership/barbaccia-gregory"
              className="block h-full transition-colors bg-muted rounded-2xl p-8 lg:p-10 ring-1 ring-foreground/10 hover:bg-foreground/[0.08]"
            >
              <div className="group relative h-full flex flex-col md:flex-row gap-6 items-center">
                <div className="relative overflow-hidden bg-muted w-32 h-32 md:w-40 md:h-40 rounded-lg flex-shrink-0">
                  <Image
                  src="/images/members/gregory-barbaccia.jpg"
                  alt="Gregory Barbaccia"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Gregory Barbaccia
                  </h3>
                  <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mt-1">
                    Federal Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-1">
                    Office of Management and Budget
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="/about/members-and-leadership/shive-david"
              className="block h-full transition-colors bg-muted rounded-2xl p-8 lg:p-10 ring-1 ring-foreground/10 hover:bg-foreground/[0.08]"
            >
              <div className="group relative h-full flex flex-col md:flex-row gap-6 items-center">
                <div className="relative overflow-hidden bg-muted w-32 h-32 md:w-40 md:h-40 rounded-lg flex-shrink-0">
                  <Image
                  src="/images/members/david-shive.jpg"
                  alt="David Shive"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    David Shive
                  </h3>
                  <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mt-1">
                    Vice-chair, Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-1">
                    General Services Administration
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="/about/members-and-leadership/duffy-michael"
              className="block h-full transition-colors bg-muted rounded-2xl p-8 lg:p-10 ring-1 ring-foreground/10 hover:bg-foreground/[0.08]"
            >
              <div className="group relative h-full flex flex-col md:flex-row gap-6 items-center">
                <div className="relative overflow-hidden bg-muted w-32 h-32 md:w-40 md:h-40 rounded-lg flex-shrink-0">
                  <Image
                  src="/images/members/michael-duffy.png"
                  alt="Michael Duffy"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Michael Duffy
                  </h3>
                  <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mt-1">
                    Acting Federal Chief Information Security Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-1">
                    Office of Management and Budget
                  </p>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">
                      Acting
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href="/about/members-and-leadership/jay-teitelbaum"
              className="block h-full transition-colors bg-muted rounded-2xl p-8 lg:p-10 ring-1 ring-foreground/10 hover:bg-foreground/[0.08]"
            >
              <div className="group relative h-full flex flex-col md:flex-row gap-6 items-center">
                <div className="relative overflow-hidden bg-muted w-32 h-32 md:w-40 md:h-40 rounded-lg flex-shrink-0">
                  <Image
                  src="/images/members/jay-teitelbaum.png"
                  alt="Jay Teitelbaum"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Jay Teitelbaum
                  </h3>
                  <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mt-1">
                    Acting Deputy Federal Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-1">
                    Office of Management and Budget
                  </p>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">
                      Acting
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-section px-site border-t border-border">
        <div className="w-full max-w-site mx-auto">
          <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[56px] lg:leading-[67px] lg:tracking-[-1.68px] max-w-[800px] mb-20 lg:mb-24 font-medium">
            CIOs from across the federal executive branch make up the Council.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <a
              href="https://www.usda.gov/about-usda/general-information/staff-offices/office-chief-information-officer"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/samuel-berry.jpg"
                  alt="Samuel Berry"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Samuel Berry
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of Agriculture
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.commerce.gov/ocio"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/brian-epley.png"
                  alt="Brian Epley"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Brian Epley
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of Commerce
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.ed.gov/about/ed-offices/ocio/office-of-the-chief-information-officer"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/thomas-flagg.png"
                  alt="Thomas Flagg"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Thomas Flagg
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of Education
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.energy.gov/cio/office-chief-information-officer"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/dawn-zimmer.png"
                  alt="Dawn Zimmer"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Dawn Zimmer
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of Energy
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.hhs.gov/about/agencies/asa/ocio/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/clark-minor.png"
                  alt="Clark Minor"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Clark Minor
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of Health & Human Services
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.dhs.gov/office-chief-information-officer"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/antoine-mccord.png"
                  alt="Antoine McCord"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Antoine McCord
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of Homeland Security
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.hud.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/eric-sidle.png"
                  alt="Eric Sidle"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Eric Sidle
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of Housing and Urban Development
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.justice.gov/jmd/office-chief-information-officer"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/nikki-collier.png"
                  alt="Dr. Nikki Collier"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Dr. Nikki Collier
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Acting Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of Justice
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">
                      Acting
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://www.dol.gov/agencies/oasam/centers-offices/ocio"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/mangala-kuppa.png"
                  alt="Mangala Kuppa"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Mangala Kuppa
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of Labor
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.state.gov/bureau-of-diplomatic-technology/leadership-bureau-of-diplomatic-technology"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/kelly-fletcher.jpg"
                  alt="Dr. Kelly Fletcher"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Dr. Kelly Fletcher
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of State
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.transportation.gov/cio"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/pavan-pidugu.png"
                  alt="Pavan Pidugu"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Pavan Pidugu
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of Transportation
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://digital.va.gov/office-of-information-and-technology/"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/paul-lawrence.jpg"
                  alt="Dr. Paul Lawrence"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Dr. Paul Lawrence
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Acting Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of Veterans Affairs
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">
                      Acting
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://dodcio.defense.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/kirsten-davies.png"
                  alt="Hon. Kirsten Davies"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Hon. Kirsten Davies
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of War
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.safcn.af.mil/"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/keith-hardiman.png"
                  alt="Dr. Keith Hardiman"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Dr. Keith Hardiman
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Acting Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of the Air Force
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">
                      Acting
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://www.army.mil/cio"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/leonel-garciga.jpg"
                  alt="Leonel Garciga"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Leonel Garciga
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Army Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of the Army
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.doi.gov/ocio"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/paul-mcinerny.jpg"
                  alt="Paul McInerny"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Paul McInerny
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of the Interior
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.doncio.navy.mil/"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/barry-tanner.jpg"
                  alt="Barry Tanner"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Barry Tanner
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Acting Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of the Navy
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">
                      Acting
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://home.treasury.gov/about/offices/management/chief-information-officer"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/sam-corcos.png"
                  alt="Sam Corcos"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Sam Corcos
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Department of the Treasury
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <Link
              href="#"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/carter-farmer.png"
                  alt="Carter Farmer"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Carter Farmer
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Environmental Protection Agency
                  </p>
                </div>
              </div>
            </Link>
            <a
              href="https://www.fdic.gov/about/board-directors-senior-executives"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/sylvia-burns.png"
                  alt="Sylvia Burns"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Sylvia Burns
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Federal Deposit Insurance Corporation
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.nasa.gov/ocio/"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/sean-gallagher.jpg"
                  alt="Sean Gallagher"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Sean Gallagher
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Acting Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    National Aeronautics & Space Administration
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">
                      Acting
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://www.archives.gov/about/organization/senior-staff"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/gulam-shakir.png"
                  alt="Gulam Shakir"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Gulam Shakir
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Acting Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    National Archives and Records Administration
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">
                      Acting
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://new.nsf.gov/ocio"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/clyde-richards.jpg"
                  alt="Clyde Richards"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Clyde Richards
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Acting Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    National Science Foundation
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">
                      Acting
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://www.nrc.gov/about-nrc/organization/ociofuncdesc.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/scott-flanders.jpg"
                  alt="Scott Flanders"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Scott Flanders
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Nuclear Regulatory Commission
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.opm.gov/about-us/who-we-are/"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/perryn-ashmore.png"
                  alt="Perryn Ashmore"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Perryn Ashmore
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Acting Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Office of Personnel Management
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">
                      Acting
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://www.dni.gov/index.php/who-we-are/organizations/ic-cio/ic-cio-who-we-are"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/doug-cossa.png"
                  alt="Doug Cossa"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Doug Cossa
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Office of the Director of National Intelligence
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.sba.gov/about-sba/sba-locations/headquarters-offices/office-chief-information-officer"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/hartley-caldwell.png"
                  alt="Hartley Caldwell"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Hartley Caldwell
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Small Business Administration
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://www.ssa.gov/org/orgOCIO.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/michael-russo.png"
                  alt="Michael Russo"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Michael Russo
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    Social Security Administration
                  </p>
                  <span className="inline-flex items-center justify-center text-xs text-muted-foreground/50 mt-auto pt-2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    External
                  </span>
                </div>
              </div>
            </a>
            <Link
              href="#"
              className="block h-full transition-colors p-4 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/50"
            >
              <div className="group relative h-full flex flex-col items-center text-center">
                <div className="relative overflow-hidden bg-muted w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0">
                  <Image
                  src="/images/members/greg-barbaccia.png"
                  alt="Greg Barbaccia"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Greg Barbaccia
                  </h3>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground mt-1">
                    Acting Chief Information Officer
                  </p>
                  <p className="font-sans text-[13px] leading-[22px] text-muted-foreground/70 mt-0.5">
                    U.S. Agency for International Development
                  </p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">
                      Acting
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="council-committees"
        className="py-section px-site border-t border-border"
      >
        <div className="w-full max-w-site mx-auto">
          <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[56px] lg:leading-[67px] lg:tracking-[-1.68px] max-w-[800px] mb-20 lg:mb-24 font-medium">
            Committees that drive our work.
          </h2>
          <div className="bg-muted rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10">
            <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium mb-2">
              Council Committees
            </h3>
            <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mb-6">
              Committees that focus on certain Council priorities.
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="/about/members-and-leadership/dx-council"
                className="flex items-center justify-between gap-3 rounded-xl ring-1 ring-foreground/10 px-5 py-4 text-[15px] leading-[25.5px] text-foreground hover:bg-foreground/5 transition-colors"
              >
                <span className="truncate">Digital Experience Council</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right size-4 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </Link>
              <Link
                href="/about/members-and-leadership/smacc"
                className="flex items-center justify-between gap-3 rounded-xl ring-1 ring-foreground/10 px-5 py-4 text-[15px] leading-[25.5px] text-foreground hover:bg-foreground/5 transition-colors"
              >
                <span className="truncate">SACC and SMAC Councils</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right size-4 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </Link>
              <Link
                href="/about/members-and-leadership/ciso-council"
                className="flex items-center justify-between gap-3 rounded-xl ring-1 ring-foreground/10 px-5 py-4 text-[15px] leading-[25.5px] text-foreground hover:bg-foreground/5 transition-colors"
              >
                <span className="truncate">CISO Council</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right size-4 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-section px-site bg-[var(--footer-bg)]">
        <div className="max-w-site mx-auto">
          <div className="max-w-[800px]">
            <p className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium text-[var(--footer-fg)]">
              Work on problems that matter. If you&apos;re driven by impact,
              scale, and service, there&apos;s a place for you here.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8 lg:mt-10">
            <a href="https://www.usajobs.gov/Search/?k=cio&p=1">
              <button
                type="button"
                tabIndex={0}
                data-slot="button"
                className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full h-11 gap-2 px-6 text-base bg-[var(--footer-fg)] text-[var(--footer-bg)] hover:bg-[var(--footer-fg)]/90"
              >
                Explore Opportunities
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

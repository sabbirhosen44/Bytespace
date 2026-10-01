"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { footerColumns, legalLinks } from "@/data/footer-links";

const link =
  "block whitespace-nowrap font-body leading-[22px] transition-opacity hover:opacity-60";


export function Footer() {
  return (
    <footer className="bg-white text-neutral-950 [container-type:inline-size]">
      <div className="lg:relative lg:h-[36.4583cqw]">
        {/* Artboard */}
        <div className="relative flex flex-col gap-8 border-t border-neutral-200 px-5 py-12 md:px-10 lg:absolute lg:left-0 lg:top-0 lg:block lg:h-[525px] lg:w-[1440px] lg:origin-top-left lg:border-t-0 lg:p-0 lg:[scale:tan(atan2(100cqw,1440px))]">
          {/* Top border (desktop) */}
          <div
            aria-hidden
            className="hidden bg-neutral-200 lg:absolute lg:left-0 lg:top-0 lg:block lg:h-px lg:w-full"
          />

          {/* Logo + tagline */}
          <div className="flex flex-col gap-5 lg:contents">
            <Logo
              variant="dark"
              className="flex w-fit lg:absolute lg:left-[120px] lg:top-[70px]"
            />
            <p className="font-body text-body-s leading-[22px] lg:absolute lg:left-[120px] lg:top-[124px]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6 lg:contents">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-start gap-4 lg:absolute lg:left-[120px] lg:top-[191px] lg:w-[504px] lg:gap-6"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-[52px] min-w-0 flex-1 rounded-full border border-neutral-300 bg-transparent px-6 font-body text-body-m text-neutral-950 placeholder:text-neutral-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary-500/60 lg:w-[376px] lg:flex-none"
              />
              <Button
                type="submit"
                className="h-[46px] w-[104px] shrink-0 px-0 text-label-l"
              >
                Search
              </Button>
            </form>

            <p className="font-body text-body-xs leading-[19px] lg:absolute lg:left-[120px] lg:top-[268px] lg:w-[504px]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Link columns: x = 740 / 947 / 1154 */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:absolute lg:left-[740px] lg:top-[119px] lg:w-[580px] lg:grid-cols-3 lg:gap-x-[40px] lg:gap-y-0">
            {footerColumns.map((col, i) => (
              <ul key={i} className="flex flex-col gap-4">
                {col.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={`${link} text-body-s`}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* Divider */}
          <div
            aria-hidden
            className="h-px bg-neutral-200 lg:absolute lg:left-[120px] lg:top-[435px] lg:w-[1200px]"
          />

          {/* Bottom row */}
          <p className="font-body text-body-xs leading-[22px] lg:absolute lg:left-[120px] lg:top-[457px]">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6 lg:absolute lg:right-[120px] lg:top-[457px]">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={`${link} text-body-xs`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
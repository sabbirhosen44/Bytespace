"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const underline =
  "relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:rounded-full after:bg-secondary-500 after:transition-transform after:duration-300";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <Container className="relative flex h-16 items-center justify-between sm:h-20 lg:h-[120px]">
        <Logo />

        {/* Desktop links */}
        <nav
          aria-label="Main"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "font-body text-label-m transition-opacity hover:opacity-100",
                  underline,
                  active
                    ? "font-medium after:scale-x-0"
                    : "opacity-75 after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/login"
            className={cn(
              "font-body text-label-m opacity-70 transition-opacity hover:opacity-100",
              underline,
              "after:scale-x-0 hover:after:scale-x-100"
            )}
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className={cn(
              "font-body text-label-m font-medium",
              underline,
              "after:scale-x-0 hover:after:scale-x-100"
            )}
          >
            Join Us
          </Link>
          <button
            aria-label="Cart"
            className="p-1 transition-transform duration-200 hover:scale-110"
          >
            <ShoppingBag className="size-5" />
          </button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-1 lg:hidden">
          <button aria-label="Cart" className="p-2">
            <ShoppingBag className="size-5" />
          </button>
          <button
            className="p-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-menu"
          className="animate-slide-down border-t border-white/10 bg-primary-800 shadow-xl lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-body text-label-m transition-colors hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-white/20" />
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-body text-label-m transition-colors hover:bg-white/10"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-secondary-500 px-3 py-3 text-center font-body text-label-m font-medium text-neutral-950"
            >
              Join Us
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
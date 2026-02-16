"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

import "./navbar.css";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
} from "@/components/icons";
import { useTheme } from "next-themes";
import Image from "next/image";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  const [isNightmode, setIsNightmode] = useState<boolean>(false);

  useEffect(() => setIsNightmode(theme === 'dark'), [theme]);

  return (
    <header className="w-full sticky top-0 z-50 bg-background border-b">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Bar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <NextLink
            href="/"
            className="flex items-center gap-2"
          >
            <Image src="/images/logosquare.png" height={80} width={150} className="w-40 h-auto" alt="GreenLight XR Logo" />
          </NextLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">

            {siteConfig.navItems
              .filter((item) => item.visible !== false)
              .map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");

                /* Mega Menu */
                if (item.children) {
                  return (
                    <div
                      key={item.label}
                      className="relative group"
                    >
                      <button
                        className={`nav-link ${pathname.startsWith("/events")
                          ? "active-link"
                          : ""
                          }`}
                      >
                        {item.label}
                        <span className="underline-anim" />
                      </button>

                      {/* Mega Menu Panel */}
                      <div className="mega-menu">

                        <div className="mega-grid">

                          {item.children.map((child) => {
                            const childActive =
                              pathname === child.href;

                            return (
                              <NextLink
                                key={child.href}
                                href={child.href}
                                className={`mega-item ${childActive
                                  ? "mega-active"
                                  : ""
                                  }
                                  ${!isNightmode
                                    ? 'bg-white hover:bg-violet-400'
                                    : 'bg-black hover:bg-violet-900'
                                  }`}
                              >
                                {child.label}
                              </NextLink>
                            );
                          })}
                        </div>

                      </div>
                    </div>
                  );
                }

                /* Normal Menu */
                return (
                  <NextLink
                    key={item.href}
                    href={item.href}
                    className={`nav-link ${isActive ? "active-link" : ""
                      }`}
                  >
                    {item.label}
                    <span className="underline-anim" />
                  </NextLink>
                );
              })}
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">

            <a href={siteConfig.links.twitter} target="_blank">
              <TwitterIcon className="nav-icon" />
            </a>

            <a href={siteConfig.links.discord} target="_blank">
              <DiscordIcon className="nav-icon" />
            </a>

            <a href={siteConfig.links.github} target="_blank">
              <GithubIcon className="nav-icon" />
            </a>

            <ThemeSwitch />
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t">

            {siteConfig.navItems
              .filter((item) => item.visible !== false)
              .map((item) => {
                /* Mobile Dropdown */
                if (item.children) {
                  return (
                    <div key={item.label}>
                      <p className="font-semibold mb-2">
                        {item.label}
                      </p>

                      <div className="pl-4 space-y-2">
                        {item.children.map((child) => (
                          <NextLink
                            key={child.href}
                            href={child.href}
                            onClick={() =>
                              setMobileOpen(false)
                            }
                            className={`block nav-link ${pathname === child.href
                              ? "active-link"
                              : ""
                              }`}
                          >
                            {child.label}
                          </NextLink>
                        ))}
                      </div>
                    </div>
                  );
                }

                /* Normal Item */
                return (
                  <NextLink
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block nav-link ${pathname === item.href
                      ? "active-link"
                      : ""
                      }`}
                  >
                    {item.label}
                  </NextLink>
                );
              })}

            <div className="pt-4 border-t">
              <ThemeSwitch />
            </div>

          </div>
        )}

      </div>
    </header>
  );
};

import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "fr"] as const;
export const localePrefix = "always"; // Default

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  "/": "/",
  "/blog": "/blog",
  "/contact": "/contact",
  "/about": {
    en: "/about",
    fr: "/a-propos",
  },
  "/services": {
    en: "/services",
    fr: "/services",
  },
  "/booking": {
    en: "/booking",
    fr: "/reserver",
  },
  "/thankyou": {
    en: "/thankyou",
    fr: "/merci",
  },
  // Dynamic params are supported via square brackets
  // "/blog/[articleSlug]-[articleId]": {
  //   en: "/blog/[articleSlug]-[articleId]",
  //   fr: "/blog/[articleSlug]-[articleId]",
  // },

  // // Also (optional) catch-all segments are supported
  // "/blog/[...slug]": {
  //   en: "/blog/[...slug]",
  //   fr: "/blog/[...slug]",
  // },
  // "/gallery/[...slug]": {
  //   en: "/gallery/[...slug]",
  //   fr: "/galerie/[...slug]",
  // },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });

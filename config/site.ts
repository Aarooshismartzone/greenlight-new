export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "GreenLight XR Media",
  description: "Green Light XR Media™",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "GreenLight Experience",
      href: "/greenlight-experience",
    },
    {
      label: "GreenLight Technology",
      href: "/greenlight-technology",
    },
    {
      label: "Creators",
      href: "/creators",
      visible: false,
    },
    {
      label: "Events",
      children: [
        {
          label: "Music",
          href: "/events/music",
        },
        {
          label: "Sports",
          href: "/events/sports",
        },
        {
          label: "Fashion",
          href: "/events/fashion",
        },
        {
          label: "Brands",
          href: "/events/brands",
        },
      ],
    },
    {
      label: "Partners",
      href: "/our-partners",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "About Us",
      href: "/about-us",
      children: [
        {
          label: "Careers",
          href: "/careers",
        },
      ],
    },
    {
      label: "Blog",
      href: "/blog",
      visible: false,
    },
    {
      label: "Contact Us",
      href: "/contact-us",
    },
  ],

  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

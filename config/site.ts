export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Noel John",
  description:
    "Software Professional - Full Stack Developer & Technology Enthusiast",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/#about",
    },
    {
      title: "Projects",
      href: "/#projects",
    },
    {
      title: "Experience",
      href: "/#experience",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/noeljohn",
    github: "https://github.com/noeljohn",
    linkedin: "https://linkedin.com/in/noeljohn",
    email: "mailto:noel@example.com",
    docs: "/docs/resume.pdf",
  },
}

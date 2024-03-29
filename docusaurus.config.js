// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Oddo",
  url: "https://douglasdelavy.github.io",
  baseUrl: "/",
  organizationName: "DouglasDelavy",
  projectName: "docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/douglasdelavy/docs/tree/main",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },

    navbar: {
      title: "Oddo",
      logo: {
        alt: "My Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "resources/index",
          position: "left",
          label: "Resources",
        },
        {
          href: "https://github.com/douglasdelavy",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Cops and robbers",
              to: "/resources/cops-and-robbers",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "https://oddo.vercel.app/posts",
            },
          ],
        },
      ],
    },
    prism: {
      additionalLanguages: ["lua"],
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;

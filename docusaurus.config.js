// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hackney Development System',
  tagline: 'Everything you need to build and maintain Hackney platforms and services.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://playbook.hackney.gov.uk',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LBHackney-IT', // Usually your GitHub org/user name.
  projectName: 'lbhackney-it.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/LBHackney-IT/lbhackney-it.github.io/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-TB9MPCKBPC',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Development System',
        logo: {
          alt: 'Hackney Logo',
          src: 'img/logo-long.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'waysOfWorking',
            position: 'left',
            label: 'Ways of working',
          },
          {
            type: 'docSidebar',
            sidebarId: 'architecturePillars',
            position: 'left',
            label: 'Architecture',
          },          {
            type: 'docSidebar',
            sidebarId: 'apiDevelopment',
            position: 'left',
            label: 'API Dev',
          },
          {
            type: 'docSidebar',
            sidebarId: 'frontendDevelopment',
            position: 'left',
            label: 'Frontend Dev',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiSpecifications',
            position: 'left',
            label: 'API Specs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'productPlaybook',
            position: 'left',
            label: 'Product Playbook',
          },

          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/LBHackney-IT/lbhackney-it.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Hackney dev resources',
            items: [
              {
                label: 'Hackney Design System',
                to: 'https://design-system.hackney.gov.uk/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/LBHackney-IT',
              },
                            {
                label: 'Slack',
                href: 'https://hackit-lbh.slack.com',
              },
            ],
          },
          {
            title: 'Guidance from other professions',
            items: [
              {
                label: 'User research guidance',
                to: 'https://docs.google.com/document/d/1OL32guRxt32Z2or1_lcKDg9RPDw4_03fkKPqxnR7bGw/edit',
              },
              {
                label: 'Content design guidance',
                to: 'https://docs.google.com/document/d/1OL32guRxt32Z2or1_lcKDg9RPDw4_03fkKPqxnR7bGw/edit',
              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} London Borough of Hackney Council. The data published here is free to re-use under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

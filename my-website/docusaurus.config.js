// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '道乐师 - 上海晴观信息科技有限公司',
  tagline: '为虚拟角色注入生命',
  favicon: 'img/dollars_icon.png',

  // Set the production url of your site here
  url: 'https://docs.sunnyview.tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SunnyViewTech', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '道乐师使用文档',
        logo: {
          alt: 'Dollars Logo',
          src: '/img/dollars_icon.png',
        },
        items: [
          {
            label: '晴观科技',
            href: 'https://www.sunnyview.tech',
            position: 'right',
          },
          {
            label: '社区',
            href: 'http://forum.sunnyview.tech',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `www.sunnyview.tech<br/>上海晴观信息科技有限公司<br/>所有权利保留<br/>Built with Docusaurus<br/><br/>沪ICP备19026871号-1`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
          zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    }
    }),

      plugins: [
    require.resolve('docusaurus-plugin-image-zoom')
  ],
};

module.exports = config;

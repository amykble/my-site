module.exports = {
  siteName: 'amykble',
  titleTemplate: '%s',
  siteDescription:
    "Hey! You've stumbled upon my personal blog and portolio. If you read a few of my blog posts, you might learn something about web developement, or if that's not your cup of tea, you can find all of my projects here too. enjoy ✨",
  icon: {
    favicon: {
      src: './src/assets/images/amykble/black-1080.svg',
      sizes: [16, 32, 96],
    },
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/blog/*.md',
        remark: {
          plugins: [
            [
              'gridsome-plugin-remark-shiki',
              { theme: 'Material-Theme-Palenight', skipInline: false },
            ],
          ],
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        path: './content/portfolio/*.md',
        remark: {
          plugins: [
            [
              'gridsome-plugin-remark-shiki',
              { theme: 'Material-Theme-Palenight', skipInline: false },
            ],
          ],
        },
      },
    },
  ],
  templates: {
    Post: [
      {
        path: '/blog/:title',
        component: './src/templates/Post.vue',
      },
    ],
    Project: [
      {
        path: '/prtfolio/:title',
        component: './src/templates/Project.vue',
      },
    ],
  },
}

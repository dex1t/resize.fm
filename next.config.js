const withMdxEnhanced = require('next-mdx-enhanced')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const fs = require("fs");

module.exports = (phase) => withMdxEnhanced({
  layoutPath: 'components/layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => ({
      "existThumbnail": fs.existsSync(`public/thumbnails/${parseInt(frontMatter.__resourcePath.match(/^ep\/([0-9]+)-/)[1])}.jpg`),
    }),
    phase: 'both',
  },
  reExportDataFetching: false,
})({
  env: {
    googleAnalyticsId: phase === PHASE_DEVELOPMENT_SERVER ? 'G-7WXZ4R6Q6V' : 'G-DN8TM5SRB9'
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    return config
  }
})

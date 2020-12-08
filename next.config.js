const withMdxEnhanced = require('next-mdx-enhanced')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => withMdxEnhanced({
  layoutPath: 'components/layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
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

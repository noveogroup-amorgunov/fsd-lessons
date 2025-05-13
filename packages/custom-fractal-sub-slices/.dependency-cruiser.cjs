const process = require('node:process')
const baseConfig = require('@monorepo/react-core/dependency-cruiser.cjs')

baseConfig.options.reporterOptions.dot.collapsePattern = process.env.FULL_GRAPH
  ? baseConfig.options.reporterOptions.dot.collapsePattern
  : [
      'src/(app)/providers/[^/]+/',
      'src/(entities/[^/]+/)',
      'src/(features/[^/]+/)',
      'src/(pages/[^/]+/@fractal-widgets/[^/]+/)',
      'src/(pages/[^/]+/)',
      'src/(widgets/[^/]+/)',
      'src/(shared/services/[^/]+/)',
      'src/(shared/[^/]+/)',
    ]

/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = baseConfig

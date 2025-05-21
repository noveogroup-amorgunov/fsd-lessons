const process = require('node:process')
const baseConfig = require('@monorepo/react-core/dependency-cruiser.cjs')

baseConfig.options.reporterOptions.dot.collapsePattern = process.env.FULL_GRAPH
  ? baseConfig.options.reporterOptions.dot.collapsePattern
  : [
      'src/(app)/providers/[^/]+/',
      'src/(entities/[^/]+/)',
      'src/(features/[^/]+/)',
      'src/(pages/[^/]+/)',
      'src/(widgets/[^/]+/)',
      // CUSTOM API example
      'src/(shared/(?!api)[^/]+/)',
      'src/(shared/api/[^/]+/)',
      // CUSTOM SERVICES example
      'src/(shared/services/[^/]+/)',
    ]

/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = baseConfig

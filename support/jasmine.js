let Jasmine = require('jasmine')
let jasmine = new Jasmine()
let logger = require('../helpers/reporter')

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    '../spec/test/testSpec.js',
  ],
  helpers: [
    '../helpers/specHelper.js',
    '../node_modules/jasmine-expect/index.js'
  ]
})
jasmine.addReporter(logger)
jasmine.randomizeTests(false)
jasmine.execute()
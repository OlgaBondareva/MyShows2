let log4js = require('log4js')
let driver = require('../spec/test/testSpec').driver

let date = new Date().toJSON().slice(0, 18).replace(/:/g,'-')
                                           .replace('T', '-')
let iter = 0
log4js.configure({
  appenders: {log: {type: 'file', filename: `./logs/${date}.log`}},
  categories: {default: {appenders: ['log'], level: 'all'}}
})
let logger = log4js.getLogger()

let reporter = {

  jasmineStarted: function (suiteInfo) {
    logger.info(`Running suite with ${suiteInfo.totalSpecsDefined} specs`)
  },
  suiteStarted: function (result) {
    logger.info(`Suite started: ${result.description} whose full description is ${result.fullName}`)
  },
  specStarted: function (result) {
    logger.info(`Spec started: ${result.description} whose full description is: ${result.fullName}`)
  },
  specDone: async function (result) {
    logger.info(`Spec: ${result.description} was ${result.status}`)
    for (let i = 0; i < result.failedExpectations.length; i++) {
      await driver.saveScreenshot(`screenshots/out-${iter}.png`)
      iter += 1
      logger.error(`Spec: ${result.description} was failed`)
      logger.error(`Failure ${result.failedExpectations[i].message}`)
      logger.error(result.failedExpectations[i].stack)
    }
  },
  suiteDone: function (result) {
    logger.info(`Suite ${result.description} was ${result.status}`)
    for (let i = 0; i < result.failedExpectations.length; i++) {
      logger.error(`Suite ${result.failedExpectations[i].message}`)
      logger.error(result.failedExpectations[i].stack)
    }
  },
  jasmineDone: function (result) {
    logger.info(`Finished suite: ${result.overallStatus}`)
    for (let i = 0; i < result.failedExpectations.length; i++) {
      logger.error(`Global ${result.failedExpectations[i].message}`)
      logger.error(result.failedExpectations[i].stack)
    }
  }
}

module.exports = exports = reporter
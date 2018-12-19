const webdriver = require('webdriverio')
let caps = require('../helpers/desiredCapabilities').android27
let loginPage = require('../pageObject/loginPage')
let driver = webdriver.remote(caps)

describe('App MyShows ', () => {
  let login

  beforeAll(async () => {
    await driver.init()
  })

  afterAll(async () => {
    await driver.end()
  })

  it('should ', async () => {
    login = await new loginPage(driver)
    await login.enterCredentialsAndSubmit('test_test_test', '123456')
  })
})

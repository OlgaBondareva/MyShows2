const webdriver = require('webdriverio')
let caps = require('../helpers/desiredCapabilities').android27
let loginPage = require('../pageObject/loginPage')
let driver = webdriver.remote(caps)
let credentials = require('../helpers/credentials')

describe('App MyShows ', () => {
  let login

  beforeAll(async () => {
    await driver.pause(5000)
    await driver.init().timeouts('implicit', 10000)
  })

  afterAll(async () => {
    await driver.end()
  })

  it ('should have visible "MyShows" title on login page', async () => {
    login = await new loginPage(driver)
    let isTitleVisible = await login.isTitleVisible()
    expect(isTitleVisible).toBeTrue()
  })

  it('should login with right credentials', async () => {
    await login.enterCredentialsAndSubmit(credentials.login, credentials.pass)
    let isLoggedIn = await login.isLoggedIn()
    expect(isLoggedIn).toBeTrue()
  })
})

const webdriver = require('webdriverio')
let caps = require('../helpers/desiredCapabilities').android27
let loginPage = require('../pageObject/loginPage')
let driver = webdriver.remote(caps)
let credentials = require('../helpers/credentials')
let episodesPage = require('../pageObject/showsPage')

describe('App MyShows', () => {
  let login, episodes
  let serial1 = 'The Big Bang Theory'
  let serial2 = 'Death Note'

  beforeAll(async () => {
    await driver.pause(5000)
    await driver.init()
    await driver.timeouts('script', 30000)
    await driver.timeouts('implicit', 20000)
    await driver.timeouts('pageLoad', 3000)
  })

  afterAll(async () => {
    await driver.end()
  })

  it('should have visible "MyShows" title on login page', async () => {
    login = await new loginPage(driver)
    let isTitleVisible = await login.isTitleVisible()
    expect(isTitleVisible).toBeTrue()
  })

  it('should login with right credentials', async () => {
    await login.enterCredentialsAndSubmit(credentials.login, credentials.pass)
    let isLoggedIn = await login.isLoggedIn()
    expect(isLoggedIn).toBeTrue()
  })

  it('should search requested series', async () => {
    await login.searchShow(serial1)
    let results = await login.getSearchResults()
    for (let i = 0; i < results.length; i++) {
      expect(results[i].indexOf(serial1) !== -1).toBeTrue()
    }
    await login.doubleClickBack()
  })

  it('should add given serial to watching category', async () => {
    episodes = await new episodesPage(login.getDriver())
    await episodes.addToWatching(serial2)
    let isAdded = await episodes.checkWatchingEpisodesWithSerial(serial2)
    expect(isAdded).toBeTrue()
    await episodes.removeFromWatching(serial2)
  })
})

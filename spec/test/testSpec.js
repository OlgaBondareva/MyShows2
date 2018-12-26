const webdriver = require('webdriverio')
let credentials = require('../helpers/credentials')
let caps = require('../helpers/desiredCapabilities').android27
let driver = webdriver.remote(caps)
let LoginPage = require('../pageObject/async-await/LoginPage')
let ShowsPage = require('../pageObject/async-await/ShowsPage')

describe('App MyShows', () => {
  let login, shows
  let series1 = 'Big Bang'
  let series2 = 'Death Note'

  beforeAll(async () => {
    await driver.pause(5000)
    await driver.init()
  })

  afterAll(async () => {
    await shows.removeFromWatching(series2)
    await driver.end()
  })

  it('should have visible "MyShows" title on the login page', async () => {
    login = await new LoginPage(driver, 6000)
    let isTitleVisible = await login.isTitleVisible()
    expect(isTitleVisible).toBeTrue()
  })

  it('should login with right credentials', async () => {
    await login.enterCredentialsAndSubmit(credentials.login, credentials.pass)
    let isLoggedIn = await login.isLoggedIn()
    expect(isLoggedIn).toBeTrue()
  })

  it('should search requested series', async () => {
    await login.searchShow(series1)
    let results = await login.getSearchResults()
    for (let i = 0; i < results.length; i++) {
      expect(results[i]).toContain(series1)
    }
    await login.backAfterSearch()
  })

  it('should add given series to the watching category', async () => {
    shows = await new ShowsPage(driver, 6000)
    await shows.addToWatching(series2)
    let isAdded = await shows.isSeriesAddedToWatchingEpisodes(series2)
    expect(isAdded).toBeTrue()
  })
})

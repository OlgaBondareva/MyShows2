let basePage = require('./basePage')

class navigationDrawer extends basePage {
  constructor (driver, elementVisibleTimeout) {
    super(driver, elementVisibleTimeout)
  }

  get navigationDrawerButton () {return this.driver.$('//*[@content-desc="Open navigation drawer"]')}

  get navigationDrawerButtonSelector () {return '//*[@content-desc="Open navigation drawer"]'}

  get episodesButton () {return this.driver.$('//*[@text=\'Episodes\']')}

  get episodesButtonSelector () {return '//*[@text=\'Episodes\']'}

  get showsButton () {return this.driver.$('//*[@text=\'Shows\']')}

  get showsButtonSelector () {return '//*[@text=\'Shows\']'}

  get newsButton () {return this.driver.$('//*[@text=\'News\']')}

  get settingsButton () {return this.driver.$('//*[@text=\'Settings\']')}

  get hideAdvertisingButton () {return this.driver.$('//*[@text=\'Hide advertising\']')}

  get logoutButton () {return this.driver.$('//*[@text=\'Logout\']')}

  async isLoggedIn () {
    await this.driver.waitForVisible(this.navigationDrawerButtonSelector, this.elementVisibleTimeout)
    return this.driver.isVisible(this.navigationDrawerButtonSelector)
  }

  async openEpisodes () {
    await this.driver.waitForVisible(this.navigationDrawerButtonSelector, this.elementVisibleTimeout)
    await this.driver.click(this.navigationDrawerButtonSelector)
    await this.driver.waitForVisible(this.episodesButtonSelector, this.elementVisibleTimeout)
    await this.driver.click(this.episodesButtonSelector)
  }

  async openShows () {
    await this.driver.waitForVisible(this.navigationDrawerButtonSelector, this.elementVisibleTimeout)
    await this.driver.click(this.navigationDrawerButtonSelector)
    await this.driver.waitForVisible(this.showsButtonSelector, this.elementVisibleTimeout)
    await this.driver.click(this.showsButtonSelector)
  }
}

module.exports = navigationDrawer

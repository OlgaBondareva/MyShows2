let basePage = require('./basePage')

class navigationDrawer extends basePage {
  constructor (driver, elementVisibleTimeout) {
    super(driver, elementVisibleTimeout)
  }

  get navigationDrawerButtonSelector () {return '//*[@content-desc="Open navigation drawer"]'}

  get episodesButtonSelector () {return '//*[@text=\'Episodes\']'}

  get showsButtonSelector () {return '//*[@text=\'Shows\']'}

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

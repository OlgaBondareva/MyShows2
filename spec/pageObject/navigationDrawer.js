let basePage = require('./basePage')

const wdio = require('wdio')

class navigationDrawer extends basePage {
  constructor (driver) {
    super(driver)
    this.navDrawerSelector = 'android.widget.ImageButton[content-desc="Open navigation drawer"]'
    this.logoutAlertId = '#ru.myshows.activity:id/alertTitle'
  }

  get navigationDrawerButton () {return this.driver.$(this.navDrawerSelector)}

  get episodesButton () {return this.driver.$('*[text=\'Episodes\']')}

  get showsButton () {return this.driver.$('*[text=\'Shows\']')}

  get newsButton () {return this.driver.$('*[text=\'News\']')}

  get settingsButton () {return this.driver.$('*[text=\'Settings\']')}

  get hideAdvertisingButton () {return this.driver.$('*[text=\'Hide advertising\']')}

  get logoutButton () {return this.driver.$('*[text=\'Logout\']')}

  async isLoggedIn () {
    await this.driver.waitForElementByXPath(this.navDrawerSelector, 5000)
    return this.navigationDrawerButton.isVisible()
  }

  async openEpisodes () {
    await this.navigationDrawerButton.click()
    await this.episodesButton.click()
  }

  async openShows () {
    await this.navigationDrawerButton.click()
    await this.showsButton.click()
  }
}

module.exports = navigationDrawer

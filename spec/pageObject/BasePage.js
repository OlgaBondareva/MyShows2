let NavDrawer = require('./NavigationDrawer')

class basePage {
  constructor (driver, implicitTimeout = 6000) {
    this.driver = driver
    this.navDrawer = new NavDrawer(this.driver)
    this.implicitTimeout = implicitTimeout
    this.driver.timeouts('implicit', implicitTimeout)
  }

  get searchButton () { return this.driver.$('~Search')}

  get searchField () { return this.driver.$('android=new UiSelector().className("android.widget.EditText")')}

  get searchResultsSelector () { return '//android.support.v7.widget.RecyclerView//android.widget.RelativeLayout[*]/android.widget.TextView'}

  get backButton () { return this.driver.$('~Navigate up')}

  get collapseButton () { return this.driver.$('~Collapse')}

  async isLoggedIn () {
    return this.navDrawer.navigationDrawerButton.isVisible()
  }

  async searchShow (series) {
    await this.searchButton.click()
    await this.searchField.setValue(series)
    // wait a little before tapping on the keyboard
    await this.driver.pause(this.implicitTimeout / 2)
    // tap the search button on the mobile keyboard
    await this.driver.touchAction({action: 'tap', x: 992, y: 1698})
    await this.driver.pause(this.implicitTimeout / 2)
  }

  async getSearchResults () {
    return await this.driver.getText(this.searchResultsSelector)
  }

  async backAfterSearch () {
    await this.backButton.click()
    await this.collapseButton.click()
  }
}

module.exports = basePage

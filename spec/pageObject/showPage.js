let navDrawer = require('./navigationDrawer')

class showPage extends navDrawer {
  constructor (driver, elementVisibleTimeout) {
    super(driver, elementVisibleTimeout)
  }

  get watchingShowOptionSelector () {return '//*[@text=\'Watching\']'}

  get removeShowOptionSelector () {return '//*[@text=\'Remove\']'}

  get okButtonSelector () {return '//*[@text=\'OK\']'}

  get optionsButtonSelector () {return '//android.widget.RelativeLayout/android.view.ViewGroup[1]/android.widget.ImageButton'}

  async addShowToWatchingCategory () {
    await this.driver.waitForVisible(this.optionsButtonSelector, this.elementVisibleTimeout)
    await this.driver.click(this.optionsButtonSelector)
    await this.driver.waitForVisible(this.watchingShowOptionSelector, this.elementVisibleTimeout)
    await this.driver.click(this.watchingShowOptionSelector)
    await this.driver.click(this.okButtonSelector)
  }

  async removeShowFromAnyCategory () {
    await this.driver.waitForVisible(this.optionsButtonSelector, this.elementVisibleTimeout)
    await this.driver.click(this.optionsButtonSelector)
    await this.driver.waitForVisible(this.watchingShowOptionSelector, this.elementVisibleTimeout)
    await this.driver.click(this.removeShowOptionSelector)
    await this.driver.click(this.okButtonSelector)
  }
}

module.exports = showPage

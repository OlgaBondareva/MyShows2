let navDrawer = require('./navigationDrawer')

class showPage extends navDrawer {
  constructor (driver, elementVisibleTimeout) {
    super(driver, elementVisibleTimeout)
  }

  get watchingShowOption () {return this.driver.$('//*[@text=\'Watching\']')}

  get watchingShowOptionSelector () {return '//*[@text=\'Watching\']'}

  get removeShowOption () {return this.driver.$('//*[@text=\'Remove\']')}

  get removeShowOptionSelector () {return '//*[@text=\'Remove\']'}

  get okButton () {return this.driver.$('//*[@text=\'OK\']')}

  get okButtonSelector () {return '//*[@text=\'OK\']'}

  get optionsButton () {return this.driver.$('//android.widget.RelativeLayout/android.view.ViewGroup[1]/android.widget.ImageButton')}

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

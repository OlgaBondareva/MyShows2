let BasePage = require('./BasePage')

class showPage extends BasePage {
  constructor (driver, implicitTimeout) {
    super(driver, implicitTimeout)
  }

  get watchingShowOption () {return this.driver.$('android=new UiSelector().text("Watching")')}

  get removeShowOption () {return this.driver.$('android=new UiSelector().text("Remove")')}

  get okButton () {return this.driver.$('android=new UiSelector().text("OK")')}

  get optionsButton () {return this.driver.$('android=new UiSelector().resourceId("ru.myshows.activity:id/fab_id")')}

  async addShowToWatchingCategory () {
    await this.optionsButton.click()
    await this.watchingShowOption.click()
    await this.okButton.click()
  }

  async removeShowFromAnyCategory () {
    await this.optionsButton.click()
    await this.removeShowOption.click()
    await this.okButton.click()
  }
}

module.exports = showPage

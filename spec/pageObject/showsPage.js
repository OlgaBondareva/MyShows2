let showPage = require('./showPage')

class showsPage extends showPage {
  constructor (driver, elementVisibleTimeout) {
    super(driver, elementVisibleTimeout)
  }

  get serialNamesSelector () { return '//android.support.v7.widget.RecyclerView//android.widget.TextView'}

  async findAndOpenShow (serial) {
    while (true) {
      await this.driver.pause(1500)
      let visibleSerials = await this.driver.getText(this.serialNamesSelector)
      for (let i = 0; i < visibleSerials.length; i++) {
        if (visibleSerials[i] === serial) {
          await this.driver.pause(1500)
          return await this.driver.click(`//android.widget.TextView[@text='${serial}']`)
        }
      }
      await this.driver.touchAction([
        {action: 'press', x: 830, y: 1607},
        {action: 'wait', ms: 600},
        {action: 'moveTo', x: 830, y: 277},
        'release'
      ])
    }
  }

  async addToWatching (serial) {
    await this.openShows()
    await this.findAndOpenShow(serial)
    await this.addShowToWatchingCategory()
    await this.driver.waitForVisible(this.backButtonSelector, this.elementVisibleTimeout)
    await this.driver.click(this.backButtonSelector)
  }

  async removeFromWatching (serial) {
    await this.openShows()
    await this.findAndOpenShow(serial)
    await this.removeShowFromAnyCategory()
    await this.driver.waitForVisible(this.backButtonSelector, this.elementVisibleTimeout)
    await this.driver.click(this.backButtonSelector)
  }

  async checkWatchingEpisodesWithSerial (serial) {
    await this.openEpisodes()
    await this.driver.waitForVisible(`//android.widget.TextView[@text='${serial}']`, this.elementVisibleTimeout)
    return await this.driver.isVisible(`//android.widget.TextView[@text='${serial}']`)
  }
}

module.exports = showsPage

let showPage = require('./showPage')
let NavDrawer = require('./navigationDrawer')

class showsPage extends showPage {
  constructor (driver) {
    super(driver)
    this.navDrawer = new NavDrawer(this.driver)
  }

  get seriesSelector () { return '//android.widget.TextView[@text=\'*\']'}

  async findAndOpenShow (series) {
    while (true) {
      let selector = this.seriesSelector.replace('*', series)
      let isVisible = await this.driver.isVisible(selector)
      if (isVisible) {
        return await this.driver.click(selector)
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
    await this.navDrawer.openShows()
    await this.findAndOpenShow(serial)
    await this.addShowToWatchingCategory()
    await this.backButton.click()
  }

  async removeFromWatching (serial) {
    await this.navDrawer.openShows()
    await this.findAndOpenShow(serial)
    await this.removeShowFromAnyCategory()
    await this.backButton.click()
  }

  async checkWatchingEpisodesWithSerial (serial) {
    await this.navDrawer.openEpisodes()
    let selector = this.seriesSelector.replace('*', serial)
    return await this.driver.isVisible(selector)
  }
}

module.exports = showsPage

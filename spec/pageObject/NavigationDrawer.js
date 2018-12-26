class navigationDrawer {
  constructor (driver) {
    this.driver = driver
  }

  get navigationDrawerButton () {return this.driver.$('~Open navigation drawer')}

  get episodesButton () {return this.driver.$('android=new UiSelector().text("Episodes")')}

  get showsButton () {return this.driver.$('android=new UiSelector().text("Shows")')}

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


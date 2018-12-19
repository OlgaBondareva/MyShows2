class basePage {
  constructor (driver) {
    this.driver = driver
  }

  get searchButton () { return this.driver.element('#ru.myshows.activity:id/action_search')}

  get searchField () { return this.driver.element('#ru.myshows.activity:id/search_src_text')}

  get searchResults () { return this.driver.$('android.support.v7.widget.RecyclerView > android.widget.RelativeLayout > android.widget.TextView')}

  get backButton () { return this.driver.$('android.widget.ImageButton[content-desc="Navigate up"]')}

  get collapseButton () { return this.driver.$('android.widget.ImageButton[content-desc="Collapse"]')}

  getDriver () {
    return this.driver
  }

  async searchShow (serial) {
    await this.searchButton.click()
    await this.searchField.sendKeys(serial)
    await this.driver.waitUntil(this.driver.isKeyboardShown(), 3000)
    // tap the search button on mobile keyboard
    await this.driver.tap({x: 992, y: 1698})
    await this.driver.sleep(1000)
  }

  async getSearchResults () {
    let results = []
    let elements = await this.searchResults
    for (let i = 0; i < elements.length; i++) {
      results.push(await elements[i].text())
    }
    return results
  }

  async doubleClickBack () {
    await this.backButton.click()
    await this.collapseButton.click()
  }
}

module.exports = basePage

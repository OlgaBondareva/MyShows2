class basePage {
  constructor (driver, elementVisibleTimeout = 5000) {
    this.driver = driver
    this.elementVisibleTimeout = elementVisibleTimeout
  }

  get searchButtonSelector () { return '//android.widget.TextView[@content-desc="Search"]'}

  get searchFieldSelector () { return '//*[@class=\'android.widget.EditText\']'}

  get searchResultsSelector () { return '//android.support.v7.widget.RecyclerView//android.widget.RelativeLayout[*]/android.widget.TextView'}

  get backButtonSelector () { return '//*[@content-desc="Navigate up"]'}

  get collapseButtonSelector () { return '//*[@content-desc="Collapse"]'}

  getDriver () {
    return this.driver
  }

  async searchShow (serial) {
    await this.driver.click(this.searchButtonSelector)
    await this.driver.setValue(this.searchFieldSelector, serial)
    // wait a little before tapping on the keyboard
    await this.driver.pause(3000)
    // tap the search button on the mobile keyboard
    await this.driver.touchAction({action: 'tap', x: 992, y: 1698})
    await this.driver.pause(1000)
  }

  async getSearchResults () {
    let results = []
    await this.driver.waitForVisible(this.searchResultsSelector, this.elementVisibleTimeout)
    let searchResultsLength = await this.driver.$$(this.searchResultsSelector).length
    for (let i = 0; i < searchResultsLength; i++) {
      let selector = this.searchResultsSelector.replace('*', i + 1)
      let text = await this.driver.getText(selector)
      results.push(text)
    }
    return results
  }

  async doubleClickBack () {
    await this.driver.waitForVisible(this.backButtonSelector, this.elementVisibleTimeout)
    await this.driver.click(this.backButtonSelector)
    await this.driver.waitForVisible(this.collapseButtonSelector, this.elementVisibleTimeout)
    await this.driver.click(this.collapseButtonSelector)
  }
}

module.exports = basePage

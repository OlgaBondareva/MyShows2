let navDrawer = require('./navigationDrawer')

class loginPage extends navDrawer {
  constructor (driver, elementVisibleTimeout) {
    super(driver, elementVisibleTimeout)
  }

  get titleSelector () {return '//*[@text=\'my shows\']'}

  get loginButtonLocator () {return '//*[@text=\'LOGIN\']'}

  get passField () {return this.driver.$('//*[@text=\'Password\']')}

  get loginField () {return this.driver.$('//*[@text=\'Login\']')}

  async enterCredentialsAndSubmit (login, password) {
    await this.loginField.setValue(login)
    await this.passField.setValue(password)
    await this.driver.click(this.loginButtonLocator)
  }

  async isTitleVisible () {
    return await this.driver.isVisible(this.titleSelector)
  }
}

module.exports = loginPage

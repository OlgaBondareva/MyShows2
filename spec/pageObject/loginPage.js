let basePage = require('./basePage')

class loginPage extends basePage {
  constructor (driver) {
    super(driver)
  }

  get title () {return this.driver.$('android=new UiSelector().text("my shows")')}

  get loginButton () {return this.driver.$('android=new UiSelector().text("LOGIN")')}

  get passField () {return this.driver.$('android=new UiSelector().text("Password")')}

  get loginField () {return this.driver.$('android=new UiSelector().text("Login")')}

  async enterCredentialsAndSubmit (login, password) {
    await this.loginField.setValue(login)
    await this.passField.setValue(password)
    await this.loginButton.click()
  }

  async isTitleVisible () {
    await this.driver.pause(5000)
    return await this.title.isVisible()
  }
}

module.exports = loginPage

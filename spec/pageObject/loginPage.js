let navDrawer = require('./navigationDrawer')

class loginPage extends navDrawer {
  constructor (driver) {
    super(driver)
    this.titleSelector = 'android.widget.ScrollView > android.widget.LinearLayout > android.widget.TextView'
  }

  get title () {return this.driver.element(this.titleSelector)}

  get loginButton () {return this.driver.element('#ru.myshows.activity:id/login_button')}

  get passField () {return this.driver.element('#ru.myshows.activity:id/password_field')}

  get loginField () {return this.driver.$('#ru.myshows.activity:id/login_field')}

  enterCredentialsAndSubmit (login, password) {
    this.loginField.keys(login)
    this.passField.keys(password)
    this.loginButton.click()
  }

  async getTitle () {
    return await this.driver.getText(this.titleSelector)
  }
}

module.exports = loginPage

exports.android27 = {
  desiredCapabilities: {
    browserName: '',
    platformVersion: 8.1,
    platformName: 'Android',
    deviceName: 'Nexus 5',
    automationName: 'UiAutomator2',
    appPackage: 'ru.myshows.activity',
    appActivity: 'ru.myshows.activity.MainActivity',
    deviceReadyTimeout: 10,
    newCommandTimeout: 100,
  },
  host: 'localhost',
  port: 4723
}
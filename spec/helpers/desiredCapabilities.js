exports.android27 = {
  desiredCapabilities: {
    browserName: '',
    'appium-version': '1.9.1',
    platformVersion: 8.1,
    platformName: 'Android',
    deviceName: 'Nexus',
    automationName: 'UiAutomator2',
    appPackage: 'ru.myshows.activity',
    appActivity: 'ru.myshows.activity.MainActivity',
    avdReadyTimeout: 2000,
  },
  host: 'localhost',
  port: 4723
}
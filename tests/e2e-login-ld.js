import LoginLinkedinPage from '../page-objects/pages/Login-page-linkedin'
import NavBar from '../page-objects/components/NavBar'
import LinkedinPage from '../page-objects/pages/Linkedin-page'
import config from './config'

describe('E2E Linkedin flow', () => {
    it('Should login with valid passwords', () => {
        browser.url('https://www.linkedin.com/')
        LoginLinkedinPage.loginBtn.waitForExist()
        LoginLinkedinPage.login(`${config.user}`, `${config.pass}`)
        NavBar.homeIcon.waitForExist()
        browser.saveScreenshot('./screenshots/linkedin-home.png')
    })
    it('Should check Testing Hashtag', () => {
        browser.url('https://www.linkedin.com/feed/hashtag/testing/')
        NavBar.homeIcon.waitForExist()
        browser.saveScreenshot('./screenshots/linkedin-testing.png')
    })
    it('Should check Testingtools Hashtag', () => {
        browser.url('https://www.linkedin.com/feed/hashtag/testingtools/')
        NavBar.homeIcon.waitForExist()
        browser.saveScreenshot('./screenshots/linkedin-testingtools.png')
    })
    it('Should check Softwaretesting Hashtag', () => {
        browser.url('https://www.linkedin.com/feed/hashtag/softwaretesting/')
        NavBar.homeIcon.waitForExist()
        browser.saveScreenshot('./screenshots/linkedin-softwaretesting.png')
    })
    it('Should check Qualityassurance Hashtag', () => {
        browser.url('https://www.linkedin.com/feed/hashtag/qualityassurance/')
        NavBar.homeIcon.waitForExist()
        browser.saveScreenshot('./screenshots/linkedin-qualityassurance.png')
    })
    it('Should check FirstAnalytics', () => {
        browser.url('https://www.linkedin.com/feed/')
        NavBar.navPhotoIcon.waitForExist()
        NavBar.clickPostActivity()
        NavBar.homeIcon.waitForExist()
        LinkedinPage.clickFirstAnalytics()
        LinkedinPage.closeModal.waitForExist()
        browser.saveScreenshot('./screenshots/linkedin-firstAnalytics.png')
    })

})


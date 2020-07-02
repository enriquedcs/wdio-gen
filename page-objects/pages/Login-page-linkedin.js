import Base from '../Base'

class LoginLinkedinPage extends Base {
    get loginBtn() {
        return $('.nav > .nav__button-secondary')
    }
    get userNameInput() {
        return $('#username')
    }
    get passwordInput() {
        return $('#password')
    }
    get submitBtn() {
        return $('.btn__primary--large')
    }
    get error() {
        return $('.alert-error')
    }


    login(username, password){
        this.loginBtn.waitForExist()
        this.loginBtn.click()
        //this.userNameInput.waitForExist()
        this.pauseShort()
        this.userNameInput.setValue(username)
        this.passwordInput.waitForExist()
        this.passwordInput.setValue(password)
        this.pauseShort()
        this.submitBtn.click()
    }

}

export default new LoginLinkedinPage
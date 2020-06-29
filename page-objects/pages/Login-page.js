import Base from '../Base'

class LoginPage extends Base {
    get loginForm() {
        return $('#login_form')
    }
    get userNameInput() {
        return $('#user_login')
    }
    get passwordInput() {
        return $('#user_password')
    }
    get submitBtn() {
        return $('.btn-primary')
    }
    get error() {
        return $('.alert-error')
    }

    formIsVisible(){
        this.loginForm.waitForExist()
    }

    login(username, password){
        this.loginForm.waitForExist()
        this.userNameInput.setValue(username)
        this.passwordInput.setValue(password)
        this.submitBtn.click()
    }

    submitForm(){
        this.submitBtn.click()
    }

}

export default new LoginPage
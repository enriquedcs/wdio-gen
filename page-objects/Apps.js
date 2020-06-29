
class App {

    logout(){
        browser.url('http://zero.webappsecurity.com/logout.html')
    }

    openLogin(){
        browser.url('http://zero.webappsecurity.com/login.html')
    }
}

export default new App
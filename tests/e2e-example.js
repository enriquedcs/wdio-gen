import LoginPage from '../page-objects/pages/Login-page'
import NavBar from '../page-objects/components/NavBar'
import App from '../page-objects/Apps'

describe('Several Examples of wdio', () => {
    it('Should login pop up window', () => {
        browser.url('https://www.linkedin.com/')
        NavBar.clickSignin()
    })

})
// describe('E2E - Feedback', () => {
// 	it('Should load feedback form', () => {
// 		browser.url('http://zero.webappsecurity.com/index.html')
// 		$('#feedback').waitForExist()
// 		$('#feedback').click()
// 		$('form').waitForExist()
// 	})
 
// 	it('Should submit feedback form', () => {
// 		$('#name').setValue('Name')
// 		$('#email').setValue('test@test.com')
// 		$('#subject').setValue('Subjects')
// 		$('#comment').setValue('Just a message!')
// 		$('input[type="submit"]').click()
// 		expect(browser).toHaveUrl(
// 			'http://zero.webappsecurity.com/sendFeedback.html'
// 		)
// 	})
// })
 
// describe('E2E Tests - Search', () => {
// 	it('Should load homepage', () => {
// 		browser.url('http://zero.webappsecurity.com/index.html')
// 		$('#searchTerm').waitForExist()
// 	})
 
// 	it('Should submit searchbox', () => {
// 		$('#searchTerm').setValue('bank')
// 		browser.keys('Enter')
// 		const resultsTitle = $('h2')
// 		resultsTitle.waitForExist()
// 		expect(resultsTitle).toHaveText('Search Results:')
// 	})
// })
 
// describe('E2E Tests - Currency Exchange', () => {
// 	it('Should log into application', () => {
// 		browser.url('http://zero.webappsecurity.com/index.html')
// 		$('#signin_button').waitForExist()
// 		$('#signin_button').click()
// 		$('#login_form').waitForExist()
// 		$('#user_login').setValue('username')
// 		$('#user_password').setValue('password')
// 		$('input[type="submit"]').click()
// 		$('.nav-tabs').waitForExist()
// 	})
 
// 	it('Should make currency exchange', () => {
// 		$('#pay_bills_tab').waitForExist()
// 		$('#pay_bills_tab').click()
// 		$('#tabs > ul > li:nth-child(3) > a').waitForExist()
// 		$('#tabs > ul > li:nth-child(3) > a').click()
// 		const currencySelect = $('#pc_currency')
// 		currencySelect.waitForExist()
// 		currencySelect.selectByAttribute('value', 'GBP')
// 		$('#pc_amount').setValue('500')
// 		$('#pc_inDollars_true').click()
// 		$('#purchase_cash').click()
// 		const message = $('#alert_content')
// 		expect(message).toHaveText(
// 			'Foreign currency cash was successfully purchased.'
// 		)
// 	})
// })
 
// describe('E2E Tests - Pay', () => {
// 	it('Should log into application', () => {
// 		browser.url('http://zero.webappsecurity.com/index.html')
// 		$('#signin_button').waitForExist()
// 		$('#signin_button').click()
// 		$('#login_form').waitForExist()
// 		$('#user_login').setValue('username')
// 		$('#user_password').setValue('password')
// 		$('input[type="submit"]').click()
// 		$('.nav-tabs').waitForExist()
// 	})
 
// 	it('Should make payment', () => {
// 		$('#pay_bills_tab').click()
// 		const selectPayee = $('#sp_payee')
// 		selectPayee.waitForExist()
// 		selectPayee.selectByAttribute('value', 'apple')
// 		const selectAccount = $('#sp_account')
// 		selectAccount.waitForExist()
// 		selectAccount.selectByVisibleText('Loan')
// 		$('#sp_amount').setValue('500')
// 		$('#sp_date').setValue('2020-03-31')
// 		$('#sp_description').setValue('Test')
// 		$('#pay_saved_payees').click()
// 		const message = $('#alert_content')
// 		expect(message).toHaveText('The payment was successfully submitted.')
// 	})
// })

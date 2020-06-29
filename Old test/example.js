import { short, medium, long } from '../lib/timeouts'
import {mobile, tablet, desktop} from '../lib/devices'


describe('Firsrt Steps with WebdriverIO', () => {
    it('Load Example Website', () => {
        browser.url('https://www.example.com')
        browser.pause(short)
        expect(browser).toHaveUrl('https://www.example.com/')
        expect(browser).toHaveTitle('Example Domain')
    })
    it('H1 should be visible', () => {
        //Get selector and save it to variable
        const h1 = $('h1')
        h1.waitForExist()
        // Do assertion
        expect(h1).toBeVisible()
        
    } )
    it('P should be visible', () => {
        //Get selector and save it to variable
        const p = $('p')
        p.waitForExist()
        // Do assertion
        expect(p).toBeVisible()
    } )
    it('Check Link Value', () => {
        //Get selector and save it to variable
        const link = $('a')
        // Do assertion
        expect(link).toHaveLink('https://www.iana.org/domains/example')
    } )
    it('Get Element Text', () => {
        const text = $('h1').getText()
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText(text)
    } )
    it('Assert Attribute', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const button = $('#submit-button')
        button.waitForExist()
        //expect(button).toHaveAttrContaining('type', 'submit')
    } )
    it('Assert Value', () => {
        const button = $('#populate')
        button.waitForExist()
        expect(button).toHaveValue('Populate')
    } )
    it('Save Screenshot', () => {
        browser.saveScreenshot('yourname.png')
    } )
    it('Change Browser Viewport', () => {
        browser.setWindowSize(1650, 1050)
        browser.pause(medium)
    } )
    it('Set mobile View', () => {
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(short)
    } )
    it('Set tablet View', () => {
        browser.setWindowSize(tablet[0], tablet[1])
        browser.pause(short)
    } )
    it('Set desktop View', () => {
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(short)
    } )
})
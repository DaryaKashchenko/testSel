const { expect } = require ('@playwright/test')

class loginPage {

    constructor(page) {
        this.page= page
        this.login = page.locator('input[name="login"]')
        this.password = page.locator('#password')
        this.checkbox = page.locator('md-checkbox div[class="md-container"]')
    }

    async goTo() {
        await this.page.goto('login/')
    }

    async enterLogin(email) {
        await this.login.click()
        await this.login.type(email)
    }

    async enterPassword(password) {
        await this.password.click()
        await this.password.type(password)
    }

    async SubmitBtn() {
        await this.page.locator('button[type="submit"]').click()
        await Promise.all([
            this.page.waitForResponse(resp => resp.url().includes('v1/auth') && resp.status() === 200)
        ])
    }

    async continueRegistration() {
        await this.page.locator('a[href="/complete_registration"]').click()
        await expect(this.page).toHaveURL('/complete_registration?step=account-type')
    }

    async selectUserAgreement() {

        await this.checkbox.click()
        await this.checkbox.isChecked()
    }

    async clickFillWorksheetBtn () {
        await this.page.locator('button[type=\'submit\']').click()
    }

}

module.exports = {loginPage}
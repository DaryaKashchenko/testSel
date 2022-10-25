const { expect } = require ('@playwright/test')

class worksheetPage {

    constructor(page) {
        this.page = page
        this.surname = page.locator('input[name="surname"]')
        this.name = page.locator('input[name="name"]')
        this.errorMessage = page.locator('div[ng-message="required"]')
        this.patternMessage = page.locator('div[ng-message="pattern"]')
        this.emptyFieldText = 'Необходимо заполнить это поле'
        this.validationText = 'Поле может содержать только кириллицу, пробел или тире, и должно быть не короче двух символов'
        this.middleName = page.locator('input[name="middlename"]')
        this.mobile = page.locator('input[name="mobile"]')
        this.checkbox = page.locator('md-checkbox div[class="md-container"]')
        this.markedFieldsErrorText = page.locator('div span[class="ng-binding" ]').last()
    }

    async checkEmptyFieldSurname() {
        await this.surname.click()
        await this.name.click()
        await expect(this.errorMessage.first()).toHaveText(this.emptyFieldText)
    }

    async checkInvalidSymbolsSurname(data) {
        await this.surname.fill('')
        await this.surname.fill(data)
        await this.name.click()
        await expect(this.patternMessage).toHaveText(this.validationText)

    }

    async checkEmptyFieldFirstName() {
        await this.surname.click()
        await expect(this.errorMessage.nth(1)).toHaveText(this.emptyFieldText)
    }

    async checkInvalidName(data) {
        await this.name.click()
        await this.name.fill(data)
        await this.surname.click()
        await expect(this.patternMessage).toHaveText(this.validationText)

    }

    async fillWorksheetExceptSurname() {
        await this.name.click()
        await this.name.fill('Анна')
        await this.middleName.click()
        await this.middleName.fill('Сергеевна')
        await this.mobile.click()
        await this.mobile.fill('9217854678')
        await this.checkbox.click()
        await this.checkbox.isChecked()

    }

    async fillWorksheetExceptName() {
        await this.surname.click()
        await this.surname.fill('Титова')
        await this.middleName.click()
        await this.middleName.fill('Сергеевна')
        await this.mobile.click()
        await this.mobile.fill('9217854678')
        await this.checkbox.click()
        await this.checkbox.isChecked()

    }

    async clickSubmitBtn() {
        await this.page.locator('button[type="submit"]').click()
    }

    async checkMarkedErrorText() {
        await expect(this.markedFieldsErrorText).toHaveText('Проверьте отмеченные поля')
    }

}

module.exports = {worksheetPage}
const {test} = require('@playwright/test')
const {poManager} = require('../pageObject/poManager')
test.describe.configure({ mode: 'parallel' })
const testData = {email: 'darya.kashenko@gmail.com', password: 'Qwerty123!', latin: 'anna', specialSymbols:'.:.', number: '46832', oneSymbol: 'ф'  }
let PoManager
let LoginPage
let WorksheetPage


test.beforeEach( async ({page}) => {

    PoManager = new poManager(page)
    LoginPage = PoManager.getLoginPage()
    await LoginPage.goTo()
    await LoginPage.enterLogin(testData.email)
    await LoginPage.enterPassword(testData.password)
    await LoginPage.SubmitBtn()
    await LoginPage.continueRegistration()
    await LoginPage.selectUserAgreement()
    await LoginPage.clickFillWorksheetBtn ()


})

test.afterEach (async ({page}) => {
    await page.close()
})

test ('Last name - Empty field check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkEmptyFieldSurname()
    await WorksheetPage.fillWorksheetExceptSurname()
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()

})

test ('Last name - Latin symbols check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkInvalidSymbolsSurname(testData.latin)
    await WorksheetPage.fillWorksheetExceptSurname()
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()
})

test('Last name - Special symbols check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkInvalidSymbolsSurname(testData.specialSymbols)
    await WorksheetPage.fillWorksheetExceptSurname()
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()


})

test('Last name - Numbers check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkInvalidSymbolsSurname(testData.number)
    await WorksheetPage.fillWorksheetExceptSurname()
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()

})

test('Last name - One symbol check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkInvalidSymbolsSurname(testData.oneSymbol)
    await WorksheetPage.fillWorksheetExceptSurname()
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()

})

test ('First name - Empty field check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkEmptyFieldFirstName()
    await WorksheetPage.fillWorksheetExceptName()
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()
    await page.pause()

})

test ('First name - Latin symbols check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkInvalidName(testData.latin)
    await WorksheetPage.fillWorksheetExceptName()
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()
})

test ('First name - Special symbols check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkInvalidName(testData.specialSymbols)
    await WorksheetPage.fillWorksheetExceptName()
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()


})

test ('First name - Numbers check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkInvalidName(testData.number)
    await WorksheetPage.fillWorksheetExceptName()
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()


})

test ('First name - One symbol check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkInvalidName(testData.oneSymbol)
    await WorksheetPage.fillWorksheetExceptName()
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()
})
const {test,expect} = require('@playwright/test')
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

})

test ('Last name - Latin symbols check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkInvalidSymbolsSurname(testData.latin)

})

test('Last name - Special symbols check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkInvalidSymbolsSurname(testData.specialSymbols)


})

test('Last name - Numbers check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkInvalidSymbolsSurname(testData.number)

})

test('Last name - One symbol check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkInvalidSymbolsSurname(testData.oneSymbol)

})

test ('First name - Empty field check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkEmptyFieldFirstName()

})

test('First name - Latin symbols check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkInvalidName(testData.latin)

})

test('First name - Special symbols check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkInvalidName(testData.specialSymbols)


})

test('First name - Numbers check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkInvalidName(testData.number)

})

test('First name - One symbols check', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkInvalidName(testData.oneSymbol)

})
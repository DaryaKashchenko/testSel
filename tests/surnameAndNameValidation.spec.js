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

test ('Last name - Empty field and invalid symbols check validation - By unclick field', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkEmptyFieldSurname()
    await WorksheetPage.checkInvalidSymbolsSurname(testData.latin)
    await WorksheetPage.checkInvalidSymbolsSurname(testData.specialSymbols)
    await WorksheetPage.checkInvalidSymbolsSurname(testData.number)
    await WorksheetPage.checkInvalidSymbolsSurname(testData.oneSymbol)

})

test ('Last name - Empty field and invalid symbols check - By submit', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkEmptyFieldSurname()
    await WorksheetPage.fillWorksheetExceptSurname()
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()
    //check latin value
    await WorksheetPage.checkInvalidSymbolsSurname(testData.latin)
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()
    //check special symbols
    await WorksheetPage.checkInvalidSymbolsSurname(testData.specialSymbols)
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()
    //number check
    await WorksheetPage.checkInvalidSymbolsSurname(testData.number)
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()
    //check one symbol
    await WorksheetPage.checkInvalidSymbolsSurname(testData.oneSymbol)
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()



})

test ('First name - Empty field and invalid symbols check - By unclick field', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkEmptyFieldFirstName()
    await WorksheetPage.checkInvalidName(testData.latin)
    await WorksheetPage.checkInvalidName(testData.specialSymbols)
    await WorksheetPage.checkInvalidName(testData.number)
    await WorksheetPage.checkInvalidName(testData.oneSymbol)


})

test ('First name - Empty field and invalid symbols check - By submit', async ({page}) => {

    PoManager = new poManager(page)
    WorksheetPage = PoManager.getWorksheetPage()
    await WorksheetPage.checkEmptyFieldFirstName()
    await WorksheetPage.fillWorksheetExceptName()
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()
    //check latin value
    await WorksheetPage.checkInvalidName(testData.latin)
    await WorksheetPage.fillWorksheetExceptName()
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()
    //check special symbols
    await WorksheetPage.checkInvalidName(testData.specialSymbols)
    await WorksheetPage.fillWorksheetExceptName()
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()
    //check numbers
    await WorksheetPage.checkInvalidName(testData.number)
    await WorksheetPage.fillWorksheetExceptName()
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()
    //check one symbol
    await WorksheetPage.checkInvalidName(testData.oneSymbol)
    await WorksheetPage.fillWorksheetExceptName()
    await WorksheetPage.clickSubmitBtn()
    await WorksheetPage.checkMarkedErrorText()

})


const { loginPage } = require('./loginPage')
const { worksheetPage } = require('./worksheetPage')

class poManager {

    constructor(page) {
        this.page = page
        this.LoginPage = new loginPage(this.page)
        this.WorksheetPage = new worksheetPage(this.page)
    }

    getLoginPage() {
        return this.LoginPage
    }

    getWorksheetPage() {
        return this.WorksheetPage
    }

}

module.exports = { poManager }


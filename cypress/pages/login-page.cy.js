/// <reference types="cypress" />

class LoginPage {

    fillUserName(username) {
        cy.get('input[name="username"]')
            .type(username)
    }

    fillUserNameNull(username) {
        cy.get('input[name="username"]')
            .clear()
    }

    fillPassword(password) {
        cy.get('input[name="password"]')
            .type(password)
    }

    fillPasswordNull(password) {
        cy.get('input[name="password"]')
            .clear()
    }

    btnLogin() {
        cy.get('button[type="submit"]')
            .click()
    }

    MessageLoginSuccess() {
        cy.contains('Dashboard')
            .should('be.visible')
    }

    MessageLoginFalha() {
        cy.contains('Required')
            .should('be.visible')
    }


}

export default new LoginPage();
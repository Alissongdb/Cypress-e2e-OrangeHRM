/// <reference types="cypress" />

import LoginPage from '../../pages/login-page.cy.js';

describe('Falha ao logar usuario', () => {

    beforeEach(() => {
        cy.visit('/');

    });

    it('Falha ao logar usuario sem informar username e senha', () => {
        LoginPage.fillUserNameNull()
        LoginPage.fillPasswordNull()
        LoginPage.btnLogin()
        LoginPage.MessageLoginFalha()

    });

    it('Falha ao logar usuario sem informar username', () => {
        LoginPage.fillUserNameNull()
        LoginPage.fillPassword('admin')
        LoginPage.btnLogin()
        LoginPage.MessageLoginFalha()

    });

    it('Falha ao logar usuario sem informar senha', () => {
        LoginPage.fillUserName('admin')
        LoginPage.fillPasswordNull()
        LoginPage.btnLogin()
        LoginPage.MessageLoginFalha()

    });

});
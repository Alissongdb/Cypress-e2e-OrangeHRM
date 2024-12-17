/// <reference types="cypress" />

import LoginPage from '../../pages/login-page.cy.js';

describe('Logar usuario', () => {

  beforeEach(() => {
    cy.visit('/');

  });

  it('Devo logar o usuario', () => {
    LoginPage.fillUserName('Admin')
    LoginPage.fillPassword('admin123')
    LoginPage.btnLogin()
    LoginPage.MessageLoginSuccess()
  });

});
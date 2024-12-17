# Automação de Testes E2E - OrangeHRM com Cypress

Este projeto realiza a automação de testes end-to-end (E2E) no sistema [OrangeHRM](https://opensource-demo.orangehrmlive.com) utilizando o framework **Cypress** e o padrão **Page Object Model** para uma melhor organização e reutilização dos componentes.

---

## 📋 **Objetivo**

- Automatizar testes de autenticação (login e logout) e outras funcionalidades principais do sistema **OrangeHRM**.
- Utilizar boas práticas de estruturação de testes com **Page Object Model**.
- Demonstrar como criar testes eficientes, legíveis e fáceis de manter.

---

## 🛠️ **Tecnologias Utilizadas**

- **Cypress**: Framework de automação de testes front-end.
- **JavaScript**: Linguagem de programação principal.
- **Node.js**: Ambiente de execução JavaScript.
- **NPM**: Gerenciador de pacotes utilizado.
- **Git**: Controle de versão do código.

---

## 🚀 **Funcionalidades Testadas até o momento**

- **Login**:
  - Validar login com credenciais válidas.
  - Validar mensagens de erro para login com credenciais inválidas.
  - Validar mensagens obrigatórias ao não preencher os campos de login.

- **Mensagens de Erro**:
  - Capturar e validar mensagens exibidas ao usuário, como campos obrigatórios.

---

## 📂 **Estrutura do Projeto**

O projeto segue o padrão **Page Object Model**. As classes de páginas encapsulam os elementos e ações da interface do usuário, e os testes chamam essas classes para interagir com o sistema.

---

## 🧪 **Como Executar os Testes**

1. **Pré-requisitos**:
   - Ter o **Node.js** instalado.
   - Ter o **Cypress** instalado globalmente ou em um projeto local.

   Caso não tenha o Cypress instalado, execute:

   npm install cypress --save-dev

   E para abrir o Cypress execute:

   npx cypress open

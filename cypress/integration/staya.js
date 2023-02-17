describe('[+] Покрытие автотестами сайта staya', function () {

   it('Необходимо проверить авторизацию', function () {
        cy.visit('https://staya.dog');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('email');
        cy.get('.auth-form > form > [type="password"]').type('password');
        cy.get('.auth-form__submit').click()
        cy.contains('Мои заказы');
    })
})



describe('[-] Покрытие автотестами сайта staya', function () {

   it('Необходимо проверить авторизацию, с ошибочным паролем', function () {
        cy.visit('https://staya.dog');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('email');
        cy.get('.auth-form > form > [type="password"]').type('password');
        cy.get('.auth-form__submit').click()
    })
})







describe('[+] Покрытие автотестами сайта staya', function () {

   it('Необходимо проверить авторизацию', function () {
        cy.visit('https://staya.dog');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('sergevergo@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Serenity1');
        cy.get('.auth-form__submit').click()
        cy.contains('Мои заказы');
    })
})



describe('[-] Покрытие автотестами сайта staya', function () {

   it('Необходимо проверить авторизацию, с ошибочным паролем', function () {
        cy.visit('https://staya.dog');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('sergevergo@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Serenity');
        cy.get('.auth-form__submit').click()
    })
})







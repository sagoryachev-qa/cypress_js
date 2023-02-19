describe('[+] Переключение темы на сайте https://www.animarender.com/ru', function () {
   it('Автотест на переключение темы в ЛК', function () {
        cy.visit('https://account.animarender.com/login');
        cy.get('#login').type('email')
        cy.get('#password').type('password')
        cy.get('.mx-auto').click()
        cy.get('.toggle').click()

    })
})



describe('[+] Проверка работы быстрых запросов в чате на сайте https://www.animarender.com/ru', function () {
   it('Автотест на быстрые запросы в чате', function () {
        cy.visit('https://account.animarender.com/login');
        cy.get('#login').type('email')
        cy.get('#password').type('password')
        cy.get('.mx-auto').click()
        cy.get('#jvlabelWrap').click()
        cy.get('#jcont').type('Привет') 
        cy.get('#jcont').click()


    })    
})

describe('[+] Проверка работы быстрых запросов в чате на сайте https://www.animarender.com/ru', function () {
   it('Автотест на быстрые запросы в чате', function () {
        cy.visit('https://account.animarender.com/login');
        cy.get('#login').type('email')
        cy.get('#password').type('password')
        cy.get('.mx-auto').click()
        cy.get('#jvlabelWrap').click()
        cy.get('#jcont').click()


    })    
})







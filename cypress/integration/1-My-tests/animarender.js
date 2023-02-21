describe('[+] Проверка постановки задачи на сайте https://www.animarender.com/ru', function () {
   it('Автотест на постановку задачи', function () {
        cy.visit('https://account.animarender.com/login');
        cy.get('#login').type('email')
        cy.get('#password').type('password')
        cy.get('.mx-auto').click()
        cy.get('.navigation-container > [href="/render"]').click()
        cy.get(':nth-child(3) > .render-upload__text').click()
        cy.get(':nth-child(152)').dblclick()   
        cy.get(':nth-child(2) > .v-hinted-input__container > .v-input-field > .v-input-box > .v-input-wrapper > .input').type('0-300')
        cy.get('.no-hinted > .v-input-field > .v-input-box > .v-input-wrapper > .input').type('test')
        cy.get('.flex > .rounded').click()
        cy.get('.mx-auto').click()
        cy.contains('The job was successfully submitted')
        
    })    
})

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










describe('Тестирование главной гугла', function () {
   it('Автотест на поиск айфонов со скидкой', function () {
        cy.visit('https://google.com');
        cy.get("input[type='text']").type('iphone').type('{enter}');
        cy.contains('https://www.apple.com');
        cy.get('.MUFPAc > :nth-child(4) > a').click();
        cy.get(':nth-child(2) > .RhVG3d > :nth-child(1) > .sh-dr__short > [jsname="meClP"] > .DON5yf > .EQ4p8c > .vjtvke > .nZbkuc').click();
    })
})

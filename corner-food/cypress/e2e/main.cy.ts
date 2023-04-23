describe('Home module ', () => {
    it('add favorite meal', () => {
        cy.viewport(355, 764)
        cy.visit('http://localhost:3000/login');
        cy.get('input[id=email]').click().type('Admin@admin.ru')
        cy.get('input[id=password]').click().type('admin1')
        cy.get('button').click()
        cy.get('div[id=64442db556ca0627b8269174]').click();
        cy.get('div[id=64442db556ca0627b8269174]').click();
        cy.get('div[id=64442db556ca0627b8269174]').click();
        cy.get('div[id=64442db556ca0627b826917d]').click();
        cy.get('div[id=64442db556ca0627b8269180]').click();
        cy.get('a[href="/favorite"]').click();
    });

    it('change user', () => {
        cy.viewport(355, 764)
        cy.visit('http://localhost:3000/login');
        cy.get('input[id=email]').click().type('Admin@admin.ru')
        cy.get('input[id=password]').click().type('admin1')
        cy.get('button').click()
        cy.get('a[href="/profile?activeTab=payment"]').click()
        cy.get('a[href="/profile?activeTab=account"]').click()
        cy.get('input[id=address]').click().type('Minsk Minsk').click()
        cy.get('button[id=Save]').click()
    })
})

describe('Auth module ', () => {
  it('create new User', () => {
    cy.viewport(355, 764)
    cy.visit('http://localhost:3000/signup')
    cy.get('input[id=username]').click().type('Admin')
    cy.get('input[id=email]').click().type('Admin@admin.ru')
    cy.get('input[id=password]').click().type('admin1')
    cy.get('input[id=password-repeat]').click().type('admin1')
    cy.get('button').click()
    cy.visit('http://localhost:3000/login')
  })

  it('login user', () => {
    cy.viewport(355, 764)
    cy.visit('http://localhost:3000/login');
    cy.get('input[id=email]').click().type('Admin@admin.ru')
    cy.get('input[id=password]').click().type('admin1')
    cy.get('button').click()
  })
})

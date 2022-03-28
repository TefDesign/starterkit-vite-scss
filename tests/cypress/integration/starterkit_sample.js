describe('Starterkit Sample', () => {

    //Done
    it('The title exist', () => {
        cy.visit('http://localhost:3000')
        cy.get('h1').contains('Hello my friend !!!')
    })

    // Error
    it('The title does not exist', () => {
        cy.visit('http://localhost:3000')
        cy.get('h1').contains('WTF !!!').should('not.exist')
    })

})
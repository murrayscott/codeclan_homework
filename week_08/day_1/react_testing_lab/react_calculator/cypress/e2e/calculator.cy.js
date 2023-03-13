describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should be able to add 1 to 4 and get 5', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click(); 
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })

  it('should be able to add 1 to 4 then multiply by 3 to get 15', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click(); 
    cy.get('#number4').click();
    cy.get('#operator-multiply').click(); 
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '15')
  })

  it('should be able to subtract 4 from 1 and get -3', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click(); 
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-3')
  })

    it('should be able to add 1.6 to 4.3 and get 5.9', () => {
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number6').click();
    cy.get('#operator_add').click(); 
    cy.get('#number4').click();
    cy.get('#decimal').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5.9')
  })

  it('should be able to multiply 1000000 to 4444444 to get 444444400000', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click(); 
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '444444000000')
  })

    it('should be able to divide by 0 and report error', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click(); 
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error')
  })

})
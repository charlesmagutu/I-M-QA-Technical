Cypress.Commands.add('inputTexts', (inputs) => {
    inputs.forEach(({ form, element, text }) => {
      cy.get(form).within(() => {
        cy.get(element).type(text);
      });
    });
  });

  Cypress.Commands.add('selectDropdownOption', (selector, optionValue) => {
    cy.get(selector).select(optionValue).invoke('val').should('eq', optionValue);
  });
  
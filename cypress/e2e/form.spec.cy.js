/// <reference types="cypress" />

import { navigateToHeader, scrollToBottom, scrollToCreditCards, expandAccordion, moveToCreditCards, clickSpecificCard, scrollToSpecific} from '../support/utils';

describe('Form Automation', () => {
  beforeEach(() => {
    cy.visit('/');
    navigateToHeader('Personal');
    cy.contains('Contact').click({force: true});
    scrollToSpecific(`"//p[@class='mb-0']")'`)
    //clickElement('im-visa-international-gold-card');
  });

  it('should expand terms and conditions and fill out the form', () => {
    expandAccordion('Terms and Conditions');

    cy.get('form').within(() => {
      cy.get('#name').type('John Doe');
      cy.get('#email').type('john.doe@example.com');
      cy.get('#phone').type('1234567890');
      cy.get('#message').type('This is a test message');
    });
  });
});
/// <reference types="cypress" />

import { navigateToHeader, checkConsent, scrollToSpecific, checkRadioButtonById} from '../support/utils';

describe('Form Automation', () => {
  beforeEach(() => {
    cy.visit('/');
    navigateToHeader('Personal');
    cy.contains('Contact').click({force: true});
    scrollToSpecific("/html[1]/body[1]/main[1]/section[1]/section[6]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]")
    //clickElement('im-visa-international-gold-card');
  });

  it('should fill out the form contact form', () => {
    cy.get('#gform_fields_17').within(() => {
      cy.get('#input_17_2').type('Charles Ondabu');
      cy.get('#input_17_3').type('charlesmagutu11@gmail.com');
      cy.get('#input_17_4').type('1234567890');
      cy.get('#input_17_5').select('Karen Connection').invoke('val').should('eq', 'Karen Connection');
      checkRadioButtonById("//input[@id='choice_17_6_0']");
      checkRadioButtonById("//input[@id='input_17_9_1']");
    });
  });
});
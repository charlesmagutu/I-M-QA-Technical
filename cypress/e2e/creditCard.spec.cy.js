/// <reference types="cypress" />

import { navigateToHeader, scrollToCreditCards, expandAccordion, moveToCreditCards, clickSpecificCard, scrollToSpecific } from '../support/utils';

describe('Credit Card Menu Interaction', () => {
  beforeEach(() => {
    cy.visit('/');
    navigateToHeader('Personal');
    moveToCreditCards();
  });

  it('should open the I&M Visa International Gold Card page', () => {
    scrollToCreditCards();
    clickSpecificCard('I&M Visa International Gold Credit Card','im-visa-international-gold-card')
  });
  
  it('Should expand Terms and Conditions accordion', () =>{
    scrollToCreditCards();
    clickSpecificCard('I&M Visa International Gold Credit Card','im-visa-international-gold-card')
    scrollToSpecific("//h2[@class='accordion-1-header-title'][contains(.,'Terms and Conditions')]")
    expandAccordion("#terms-and-conditions-content")
  });
});
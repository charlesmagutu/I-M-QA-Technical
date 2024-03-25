/// <reference types="cypress" />

import { navigateToHeader } from '../support/utils';

describe('Header Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate through all headers', () => {
    const headers = [
      'Personal',
      'Business',
      'Diaspora',
      'About Us',
    ];

    headers.forEach((header) => {
      navigateToHeader(header);
      if (header === 'About Us') {
          cy.url().should('include', ('about-us/who-we-are/').toLowerCase());
      } else {
          cy.url().should('include', header.toLowerCase());
      }
    });
  });
});

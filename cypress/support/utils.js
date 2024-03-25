export const navigateToHeader = (headerText) => {
    cy.xpath(`//a[contains(text(),'${headerText}')]`, { log: false })
      .should('be.visible')
      .then(($links) => {
        if ($links.length > 1) {
          cy.wrap($links).first().click({ force: true });
        } else {
          cy.wrap($links).click({ force: true });
        }
      });
  };
  export const scrollToBottom = () => {
    cy.scrollTo('bottom');
  };
  
  export const scrollToCreditCards = () => {
    cy.scrollTo(0, 1000)
  };

  export const scrollToSpecific = (scrollTo) =>{
    cy.xpath(`${scrollTo}`, {log: false})
    .scrollIntoView()
  }
  export const moveToCreditCards = () => {
    cy.contains('Cards').click({force: true});
    cy.contains('Credit Cards').click({ force: true});
  }

  export const clickSpecificCard = (cardToMoveto, expected) => {
    cy.contains(cardToMoveto)
    .click({force: true})
    cy.url().should('include', expected);
  }

  export const clickElement = (elementText) => {
    cy.contains(elementText).should('be.visible').click({ force: true });
  };
  
  export const expandAccordion = (accordionTarget) => {
    cy.xpath(`${accordionTarget}`)
      .click({ multiple: false, force:true}) 
      .should('have.class', 'btn-block')
  };
  
  export const checkRadioButtonById = (radioButtonId) =>{
    cy.xpath(radioButtonId)
      .click({force:true})
  };
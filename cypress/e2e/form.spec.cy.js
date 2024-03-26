/// <reference types="cypress" />
import '../support/custom_cmd';

import { navigateToHeader, inputText, scrollToSpecific, checkRadioButtonById} from '../support/utils';

describe('Form Automation', () => {
  beforeEach(() => {
    cy.visit('/');
    navigateToHeader('Personal');
    cy.contains('Contact').click({force: true});
    scrollToSpecific("/html[1]/body[1]/main[1]/section[1]/section[6]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]")
    //clickElement('im-visa-international-gold-card');
  });

  it('should fill out the form contact form', () => {
    cy.inputTexts([
      { form: '#gform_fields_17', element: '#input_17_2', text: 'Charles Ondabu' },
      { form: '#gform_fields_17', element: '#input_17_3', text: 'charlesmagutu11@gmail.com' },
      { form: '#gform_fields_17', element: '#input_17_4', text: '0708462128' },
      { form: '#gform_fields_17', element: '#input_17_2', text: 'Charles Ondabu' }
    ]);
    cy.selectDropdownOption('#input_17_5', 'Karen Connection');
  
    checkRadioButtonById("//input[@id='choice_17_6_0']");
    checkRadioButtonById("//input[@id='input_17_9_1']");
  });

});
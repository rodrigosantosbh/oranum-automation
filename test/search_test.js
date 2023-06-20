/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable new-cap */
// eslint-disable-next-line no-unused-vars
const homePage = require('../pages/homePage');

Feature('Search');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Searching for partial text', async ({ I }) => {
  const searchTerm = 'Myst';

  homePage.searchForText(searchTerm);
  homePage.verifySearchResults(searchTerm);
  homePage.showAllResults();
  homePage.verifyPageTitle(searchTerm);
});

Scenario('Searching for full text', async ({ I }) => {
  const searchTerm = 'MattWarren';
  
  homePage.searchForText(searchTerm);
  homePage.verifySearchResults(searchTerm);
  homePage.showAllResults();

  homePage.verifyPageTitle(searchTerm);
  I.see(searchTerm, '.thumb-data-item--name');
});

Scenario('Validate Live Psychic Stream - Overlay Validation', async ({ I }) => {
  homePage.accessFirstMediumOnline();
  homePage.closePersonalizedContent();

  homePage.clickOn_buyCreditIcon();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();

  homePage.clickOn_favoriteIcon();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();

  homePage.clickOn_send1Credit();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();

  homePage.clickOn_send5Credit();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();

  homePage.clickOn_send10Credit();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();

  homePage.clickOn_send25Credit();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();

  homePage.clickOn_send50Credit();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now'); 
  homePage.closeDialogBox();

  homePage.clickOn_send75Credit();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();

  homePage.clickOn_send100Credit();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();

  homePage.clickOn_send200Credit();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();

  homePage.clickOn_send300Credit();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();

  homePage.clickOn_send500Credit();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();

  homePage.clickOn_send750Credit();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();

  homePage.clickOn_send1000Credit();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();

  homePage.clickOn_send2000Credit();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();

  homePage.clickOn_send3000Credit();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();

  homePage.clickOn_send5000Credit();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();

  homePage.clickOn_startPrivate();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();

  homePage.clickOn_surpriseIcon();
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();
});

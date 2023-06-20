/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
const {I, homePage} = inject();

Given('I am on the search page', () => {
  I.amOnPage('/');
});

When('I search for the partial text {string}', (searchTerm) => {
  homePage.searchForText(searchTerm);
});

Then('I should see only results that contain {string}', (searchTerm) => {
  homePage.verifySearchResults(searchTerm);
  homePage.showAllResults();
  homePage.verifyPageTitle(searchTerm);
});

When('I search for the full text {string}', (searchTerm) => {
  homePage.searchForText(searchTerm);
});

When('I open the livestream of any psychic is live', () => {
  homePage.accessFirstMediumOnline();
  I.wait(10);
});

When('I click on Get Credits', () => {
  homePage.clickOn_buyCreditIcon();
});

Then('a Sign Up overlay will appear', () => {
  I.seeElement(homePage.general.popUpSignUp);
  I.see('Join Now');
  homePage.closeDialogBox();
});

When('I click on Add to favorites button', () => {
  homePage.clickOn_favoriteIcon();
});

When('I click on Surprise button 1 credit', () => {
  homePage.clickOn_send1Credit();
});

When('I click on Surprise button 5 credits', () => {
  homePage.clickOn_send5Credit();
});

When('I click on Surprise button 10 credits', () => {
  homePage.clickOn_send10Credit();
});

When('I click on Surprise button 25 credits', () => {
  homePage.clickOn_send25Credit();
});

When('I click on Surprise button 50 credits', () => {
  homePage.clickOn_send50Credit();
});

When('I click on Surprise button 75 credits', () => {
  homePage.clickOn_send75Credit();
});

When('I click on Surprise button 100 credits', () => {
  homePage.clickOn_send100Credit();
});

When('I click on Surprise button 200 credits', () => {
  homePage.clickOn_send200Credit();
});

When('I click on Surprise button 300 credits', () => {
  homePage.clickOn_send300Credit();
});

When('I click on Surprise button 500 credits', () => {
  homePage.clickOn_send500Credit();
});

When('I click on Surprise button 750 credits', () => {
  homePage.clickOn_send750Credit();
});

When('I click on Surprise button 1000 credits', () => {
  homePage.clickOn_send1000Credit();
});

When('I click on Surprise button 2000 credits', () => {
  homePage.clickOn_send2000Credit();
});

When('I click on Surprise button 3000 credits', () => {
  homePage.clickOn_send3000Credit();
});

When('I click on Surprise button 5000 credits', () => {
  homePage.clickOn_send5000Credit();
});

When('I click on Surprise buttons', () => {
  homePage.clickOn_surpriseIcon();
});

When('I click on Start Session button', () => {
  homePage.clickOn_startPrivate();
});

When('I click on Get coins buttons', () => {
  homePage.clickOn_send1Credit();
});


/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
const {I} = inject();
const assert = require('assert');

module.exports = {

  general: {

    popUpSignUp: '[data-testid="mainLoginSignUpOverlayApplet"]',
  },

  searchForText(searchTerm) {
    I.click('#search');
    I.fillField('#search', searchTerm);
    I.waitForText('Show all results for');
  },

  verifySearchResults(searchTerm) {
    const regex = new RegExp(searchTerm, 'i');
    const rowCount = I.grabNumberOfVisibleElements('ul.toolbar-autosuggest.autosuggest li.toolbar-autosuggest-row');

    for (let i = 1; i <= rowCount; i++) {
      const rowSelector = `ul.toolbar-autosuggest.autosuggest li.toolbar-autosuggest-row:nth-child(${i})`;
      const rowText = I.grabTextFrom(rowSelector);

      if (!regex.test(rowText)) {
        assert.fail(`The term "${searchTerm}" is not available ${i} on results.`);
      }
    }
  },

  showAllResults() {
    I.click('Show all results for');
  },

  async verifyPageTitle(searchTerm) {
    const regex = new RegExp(searchTerm, 'i');
    const pageTitle = await I.grabTextFrom('.listpage-title');
  
    if (!pageTitle.match(regex)) {
      assert.fail(`The text "${searchTerm} EXPERTS | ORANUM.COM WE HAVE CLARITY" is not present in the page title.`);
    }
  },

  async accessFirstMediumOnline() {
    const articleSelector = 'div.swiper-wrapper article[data-status="1"]:first-child';
    const hasElement = I.waitForElement(articleSelector, 5);

    if (hasElement) {
      I.click(articleSelector);
    } else {
      assert.ok(true, 'No live Medium was found.');
    }
  },

  closeDialogBox() {
    I.click('[class="mc_icon mc_icon--close"]');
  },

  closePersonalizedContent() {
    I.click('[class="icon--close close notifier-personalized-content-close-btn"]');
  },

  clickOn_buyCreditIcon() {
    I.click('[data-id="buyCreditIcon"]');
  },

  clickOn_favoriteIcon() {
    I.click('[data-id="favoriteIcon"]');
  },

  clickOn_surpriseIcon() {
    I.click('[data-id="surpriseIcon"]');
  },

  clickOn_startPrivate() {
    I.click('#mc_btn_start_private');
  },

  clickOn_startPrivate() {
    I.click('#mc_btn_start_private');
  },

  // #region get coin buttons
  clickOn_send1Credit() {
    I.click('[data-testid="surprise-OranumSurprisesGlobe_LJ"]');
  },

  clickOn_send5Credit() {
    I.click('[data-testid="surprise-OranumSurprisesDiamond_LJ"]');
  },

  clickOn_send10Credit() {
    I.click('[data-testid="surprise-OranumSurprisesDreamcatcher_LJ"]');
  },

  clickOn_send25Credit() {
    I.click('[data-testid="surprise-OranumSurprisesFox"]');
  },

  clickOn_send50Credit() {
    I.click('[data-testid="surprise-OranumSurprisesHeart"]');
  },

  clickOn_send75Credit() {
    I.click('[data-testid="surprise-OranumSurprisesSun"]');
  },

  clickOn_send100Credit() {
    I.click('[data-testid="surprise-OranumSurprisesPhoenix"]');
  },

  clickOn_send200Credit() {
    I.click('[data-testid="surprise-OranumSurprisesYinYang"]');
  },

  clickOn_send300Credit() {
    I.click('[data-testid="surprise-OranumSurprisesFlower"]');
  },

  clickOn_send500Credit() {
    I.click('[data-testid="surprise-OranumSurprisesEye"]');
  },

  clickOn_send750Credit() {
    I.click('[data-testid="surprise-OranumSurprisesHand"]');
  },

  clickOn_send1000Credit() {
    I.click('[data-testid="surprise-OranumSurprisesTree"]');
  },

  clickOn_send2000Credit() {
    I.click('[data-testid="surprise-OranumSurprisesHuman"]');
  },

  clickOn_send3000Credit() {
    I.click('[data-testid="surprise-OranumSurprisesPattern"]');
  },

  clickOn_send5000Credit() {
    I.click('[data-testid="surprise-OranumSurprisesAngel"]');
  },
  // #endregion
};

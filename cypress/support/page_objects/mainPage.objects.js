export class mainPageObjects {
  hamburgerNav() {
    return cy.get("#vector-main-menu-dropdown-checkbox");
  }

  logo() {
    return cy.get(".mw-logo");
  }

  searchBar() {
    return cy.get("#searchInput");
  }

  createAccountLink() {
    return cy.get("#pt-createaccount-2 > a > span");
  }

  loginLink() {
    return cy.get("#pt-login-2 > a > span");
  }

  ellipsesDropdown() {
    return cy.get("#vector-user-links-dropdown-checkbox");
  }

  welcomeHeader() {
    return cy.get("#mp-topbanner");
  }

  featuredArticleHeader() {
    return cy.get("#mp-tfa-h2");
  }

  inTheNewsHeader() {
    return cy.get("#mp-itn-h2");
  }

  didYouKnowHeader() {
    return cy.get("#mp-dyk-h2");
  }

  onThisDayHeader() {
    return cy.get("#mp-otd-h2");
  }

  todaysFeaturedPicture() {
    return cy.get("#mp-tfp-h2");
  }

  otherAreasHeader() {
    return cy.get("#mp-other");
  }

  sisterProjecsHeader() {
    return cy.get("#mp-sister");
  }

  languagesHeader() {
    return cy.get("#mp-lang");
  }

  dropdownNavContainer() {
    return cy.get(".vector-menu-content-list");
  }

  topDropdownNavContainer() {
    return cy.get(
      "#vector-main-menu > #p-navigation > .vector-menu-content > .vector-menu-content-list > li > a"
    );
  }

  bottomDropdownNavcontainer() {
    return cy.get(
      "#vector-main-menu > #p-interaction > .vector-menu-content > .vector-menu-content-list > li > a"
    );
  }

  searchBarInput() {
    return cy.get(".cdx-text-input__input");
  }

  mobileHamburgerNav() {
    return cy.get("#mw-mf-main-menu-button");
  }

  mobileHomeNav() {
    return cy.get(".menu__item--home");
  }

  mobileRandomNav() {
    return cy.get(".menu__item--random");
  }

  mobileNearbyNav() {
    return cy.get(".menu__item--nearby");
  }

  mobileLogInNav() {
    return cy.get(".menu__item--login");
  }

  mobileSettingsNav() {
    return cy.get(".menu__item--settings");
  }

  mobileDonateNav() {
    return cy.get(".menu__item--donate");
  }
}

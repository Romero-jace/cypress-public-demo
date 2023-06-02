/// <reference types="Cypress" />

const { mainPageObjects } = require('../support/page_objects/mainpage.objects')
const mainPage = new mainPageObjects()

describe('Desktop Main Page Functionality Verification', () => {
  beforeEach(function () {
    cy.visit('/')
    cy.fixture('sectionText').then((data) => {
      this.data = data
    })
  })
  it('Verifies Main Page Header sections load/exist', () => {
    mainPage.hamburgerNav().should('exist')
    mainPage.logo().should('exist')
    mainPage.searchBar().should('exist')
    mainPage.createAccountLink().should('exist').contains('Create account')
    mainPage.loginLink().should('exist').contains('Log in')
    mainPage.ellipsesDropdown().should('exist')
  })

  it('Verifies Main Page Sections Load', function () {
    mainPage.welcomeHeader().should('contain', 'Welcome to Wikipedia')
    /*below is something I would maybe do (or other formats) to store larger amounts of static text to verify against 
    instead of having giant blocks of raw text in the test */
    mainPage
      .featuredArticleHeader()
      .should('contain', this.data.featureArticle.title)
    mainPage.inTheNewsHeader().should('contain', 'In the news')
    mainPage.didYouKnowHeader().should('contain', 'Did you know')
    mainPage.onThisDayHeader().should('contain', 'On this day')
    mainPage
      .todaysFeaturedPicture()
      .should('contain', "Today's featured picture")
    mainPage.otherAreasHeader().should('contain', 'Other areas of Wikipedia')
    mainPage
      .sisterProjecsHeader()
      .should('contain', "Wikipedia's sister projects")
    mainPage.languagesHeader().should('contain', 'Wikipedia languages')
  })

  it('Verifies Nav Links direct to proper page', () => {
    mainPage.hamburgerNav().click()
    mainPage.dropdownNavContainer().children().eq(0).click()
    cy.location('pathname').should('eq', '/wiki/Main_Page')
    mainPage.hamburgerNav().click()
    mainPage.dropdownNavContainer().children().eq(1).click()
    cy.location('pathname').should('eq', '/wiki/Wikipedia:Contents')

    /* this could work, but also takes a bit of time having to go through each nav via UI and confirm
    you're at the right page. I could see this being more of a regression check. Going to do something with
    API calls to verify that directing to the pages gives a 200 */
  })

  it('Verifies Main Nav Link requests are successful', () => {
    mainPage.hamburgerNav().click()
    mainPage.topDropdownNavContainer().each((page) => {
      cy.requestAndVerify200(page)
    })
    // there are two sections on the nav, this is gross in my opinion, but not my application :)
    mainPage.bottomDropdownNavcontainer().each((page) => {
      cy.requestAndVerify200(page)
    })
  })

  it('Verifies Search Functionality works', () => {
    mainPage.searchBar().click()
    mainPage.searchBarInput().clear()
    mainPage.searchBarInput().type('Disc Golf{enter}')
    cy.location('pathname').should('eq', '/wiki/Disc_golf')
  })

  // For checking if images load, I would suggest a visual verification tool (like Applitools or Percy)
})

describe('Mobile Viewport Main Page Nav check', () => {
  beforeEach(() => {
    cy.viewport('iphone-8')
    cy.visit('https://en.m.wikipedia.org/wiki/Main_Page')
    // Was having issues not getting this to be mobile responsive with viewport, decided to go with this for time sake
  })

  it('Verifies proper nav loads on mobile', () => {
    mainPage.mobileHamburgerNav().click()
    mainPage.mobileHomeNav().should('exist')
    mainPage.mobileRandomNav().should('exist')
    mainPage.mobileNearbyNav().should('exist')
    mainPage.mobileLogInNav().should('exist')
    mainPage.mobileSettingsNav().should('exist')
    mainPage.mobileDonateNav().should('exist')
  })
})

# Test Plan: Wikipedia Main Page

## 1. Introduction

- **Purpose:** The purpose of this test plan is to ensure the functionality and usability of the Wikipedia Main Page, focusing on critical areas and identifying potential improvements.
- **Scope:** The test plan covers some of the main features and components of the Wikipedia Main Page.
- **Target audience:** In this case, Osano Testers and Developers.

## 2. Test Environment

- **Operating System:** Windows 10 (or 11), macOS
- **Browsers:** Chrome (Firefox, Safari, Edge are optional right now)
- **Devices:** Desktop, mobile(viewport)

## 3. Test Cases <!--- When using etc. it was more to save time for this assignment so I didn't write out for each link/page --->

1. **Page Loading**

   - Verify that the Main Page loads without errors or delays.
     - Go to https://en.wikipedia.org/wiki/Main_Page
     - Page should load in a reasonable amount of time with no errors
   - Confirm that all page elements (images, text, links) are displayed correctly.
     - Visit Main Page
     - Links should load:
       - Create Account
       - Log In
       - Other areas of Wikipedia
         - Community portal
         - Village pump
         - Site news
         - etc.
     - Sections Should Load
       - Welcome to Wikipedia Main Section
       - From today's feature article
       - In the news
       - Did you know...
       - On this day
       - etc.
     - Images Should Load
       - All images for each section should load/no broken images

2. **Navigation**

   - Verify Navigation links direct you to proper areas
   - Hamburger Menu navigation
     - Click on Hamburger Menu
       - Click on Main page link
         - User should be directed to /Main_Page (same page if you're already on the Main Page)
       - Click on Contents page link
         - User should be directed to /Wikipedia:Contents
       - etc
       - Contributions link should be grayed out if there is no user logged in
       - Click on "move to sidebar"
         - There should no longer be a hamburger menu, user should see all nav links on the side of the page now

3. **Search Functionality**

   - Verify Predictive Searching works
     - Click on Search bar
     - Input search word (e.g. Disc Golf)
     - User should see results as they type letters/finish words
   - Verify overall Searching functionality works
     - Click on Search Bar
     - Input Search Word (e.g. Disc Golf)
     - User should see proper content is returned
   - Test searching for other various types of content (articles, images, categories) and verify the accuracy of the results.

4. **Language Selection**

   - Verify that changing the language setting updates the page content to the selected language.
     - Scroll down to Wikipedia languages section
     - Click on a language other than English (e.g. Español)
     - Verify the site has not changed to the language chose
   - Test for multiple language options and ensure that all translations are accurate.

5. **Mobile Tests** <!--- If mobile isn't as high of a priority as web this would be more of a quick check --->
   - Change to Mobile Viewport (or access site on phone) for these tests
     - Page load
       - Page should load in a proper mobile format with hamburger nav and search bar within viewport
     - Navigation
       - Click on Hamburger Menu
       - User should be provieded with navigation menu consisting of these links that direct to proper pages
         - Home (you're probably already on the page so stays the same)
         - Random (when clicked should be taken to a random article)
         - Nearby (shows pages for places near you)
         - Log in (when clicked you will be taken to Log in page)
         - Settings (directed to settings page)
         - Donate (directed to donation page, on mobile it seems you don't have to be logged in like you do on desktop)
         - About wikipedia link should direct to proper page
         - Disclaimers link should direct you rto general disclaimers page

## 4. Potential App Improvements

1. **User Experience**

   - There is a bit of a different experience between mobile and desktop, overall look/feel. You don't have as much functionality/choices between navigation menus, which might be intentional since they do have a mobile app, but it's a little jarring to notice the difference when going between mobile and desktop views.
   - Probably design, but that's kind of hard when you think about what Wikipedia is used for. There's just a lot of information being thrown at you on the main page so it's hard to know where to start if you're just browsing

2. **Element Attributes**

   - Would prefer to have more specific element attributes (such as data-test) so it's a bit easier to access them when using Cypress

3. **Automation Improvement(s)**

   - Would add the use of accessibility automation plugin with Cypress and the Lighthouse plugin to run these tests on a full regression.

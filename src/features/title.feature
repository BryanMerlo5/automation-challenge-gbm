Feature: Test the page title
    As a user
    I want to be able to test if a page has a certain title

    Background:
        Given I open the site "https://www.google.com.mx/"

    Scenario: Test if the demo app does not have the title "Google"
        Given the title is not "Google"
        And   the page url is not "https://www.google.com/"
        Then  I expect that element "h1" not contains the text "Google"
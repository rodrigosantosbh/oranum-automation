Feature: Mediums search
  In order to find mediums
  As a user
  I want to be able to search mediums based on specific text

  Scenario: Search a partial text
    Given I am on the search page
    When I search for the partial text "Myst"
    Then I should see only results that contain "Myst"

  Scenario: Searching for full text
    Given I am on the search page
    When I search for the full text "MattWarren"
    Then I should see only results that contain "MattWarren"

  Scenario: Validate if the live stream buttons will trigger a 'Subscribe' overlay
    Given I am on the search page
    When I open the livestream of any psychic is live
    And I click on Get Credits
    Then a Sign Up overlay will appear

    When I click on Add to favorites button
    When I click on Surprise button 1 credit
    When I click on Surprise button 5 credits
    When I click on Surprise button 10 credits
    When I click on Surprise button 25 credits
    When I click on Surprise button 50 credits
    When I click on Surprise button 75 credits
    When I click on Surprise button 100 credits
    When I click on Surprise button 200 credits
    When I click on Surprise button 300 credits
    When I click on Surprise button 500 credits
    When I click on Surprise button 750 credits
    When I click on Surprise button 1000 credits
    When I click on Surprise button 2000 credits
    When I click on Surprise button 3000 credits
    When I click on Surprise button 5000 credits
    When I click on Start Session button
    When I click on Surprise buttons

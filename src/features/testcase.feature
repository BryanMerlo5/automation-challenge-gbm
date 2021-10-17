Feature: Describe a test case to acquire a product online, beggining with the choice until the purchase

  Scenario: As a user, I can purchase a product online

    Given I select a <product> "Tennis" to purchase
        And I select the <quantity> "1"
    When I click over the "Add to Cart" button
        And I select the <payment method> to purchase "Visa"
        And I fill out the <form> with "address" and "payment" details
    Then I complete the purchase
        And I validate the purchase is done
        And I validate the number of order

    Examples:
      | product         | quantity  | payment method    | form
      | tennis          | 1         | Visa              | address
      | charger type c  | 2         | American Express  | payment

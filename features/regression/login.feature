Feature: Login
  In order to keep my product stable
  As a developer or product manager
  I want to make sure that everything works as expected

        @Test2
        Scenario: Validate elements on login page
            Given I go to Login page
             Then I should see RS Logo
             Then I should see login text

        @Test3
        Scenario: Validate login user
            Given I go to Login page
             When I enter username
             When I enter password
             When I click on login button
             Then I should see a logOut link


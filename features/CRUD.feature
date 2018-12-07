
Feature: Perform CRUD Operations for Computers Management Application

    @create
    Scenario: Adding new computer device in database
        Given I am at home page
        # Then I should see the home page contents
        When I click on Add a new computer
        And I provide new computer details
        Then The computer details should get added in record

    @read
    Scenario:Searching for newly added computer in record
        Given I am at home page
        When I search for newly added computer
        Then I should see the record of computer

    @update
    Scenario:Update for existing computer in record
        Given I am at home page
        When I search for newly added computer
        Then I should see the record of computer
        And I update the computer details
        And I search for updated computer device
        Then I should see the updated record of computer

    @delete
    Scenario:Delete for existing computer in record
        Given I am at home page
        When I search for newly added computer
        Then I should see the record of computer
        And I delete the computer
        Then The computer record should get deleted from record
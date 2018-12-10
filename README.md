
The task for this test is to create automation tests to cover atleast the CRUD operations on a website that contains a DB of computers.

Tools, technologies & Language used:
Selenium web driver, Node.js, cucumber, BDD, Page object model, JavaScript.
(Can be automated using:
Core Java/Python/Protractor/NightWatch...)

Project structured using Page object model.

Setup steps:
1. Clone repo
2. Open command prompt
3. Navigate to clone repo on computer
4. Execute 'npm install'
This command will install all the required npm packages on computer
5. Executing automation scripts:
'npm run setup':-
This will setup the dependencies for framework.
'npm run test':-
This will perform all crud operations.
'npm run create':-
This will add new computer in record.
'npm run read':-
This will search existing computer in record.
'npm run update':-
This will update existing computer in record.
'npm run delete':-
This will delete existing computer in record.

Report can be found under folder 'reports' by name 'cucumber-report.html' in same repo.

Interesting part is to use Faker.js npm module which will create random valid names.

Test cases under cover:
TC1: Create record and search for same.
TC2: Search record and verify.
TC3: Update existing computer record and verify
TC4: Delete existing computer record and verify
TC5: Verify computer found count
TC6: Verify accessing button enable
TC7: verify accessing input field enable

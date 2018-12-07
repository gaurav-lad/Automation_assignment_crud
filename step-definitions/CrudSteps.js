module.exports = function () {
    var dateFormat = require('dateformat');
    var ComputerName = faker.company.companyName();
    var jsonfile = require('jsonfile');
    jsonfile.readFileSync

    this.Given(/^I am at home page$/, function () {
        return helpers.loadPage('http://computer-database.herokuapp.com/computers', 180).then(function () {
            return helpers.getTitle()
                .then(function (Title) {
                    console.log(Title);
                    return expect(Title).to.equal('Computers database');
                })
                .then(function () {
                    return helpers.getURLToVerify()
                        .then(function (url) {
                            console.log(url);
                            return expect(url).to.equal('http://computer-database.herokuapp.com/computers');
                        })
                })
        })
    });

    this.When(/^I click on Add a new computer$/, function () {
        return page.createEditPage.clickAddNewComputer();
    });

    this.Then(/^I provide new computer details$/, function () {
        var date = new Date();

        var IntroDate = dateFormat(date, "yyyy-mm-dd");
        var DiscDate = new Date();

        DiscDate.setMonth(DiscDate.getMonth() + 1);
        DiscDate = dateFormat(DiscDate, "yyyy-mm-dd");

        return page.createEditPage.fillComputerDetails(ComputerName, IntroDate, DiscDate);
    });

    this.Then(/^The computer details should get added in record$/, function () {

        return page.homePage.seeCreatedAlert(ComputerName);
    });

    this.When(/^I search for newly added computer$/, function () {
        config = jsonfile.readFileSync('./support/config.json');
        var ComputerName = config.ComputerName;
        return page.createEditPage.searchComputer(ComputerName);
    });

    this.Then(/^I should see the record of computer$/, function () {
        config = jsonfile.readFileSync('./support/config.json');
        var ComputerName = config.ComputerName;
        return page.createEditPage.verifyComputer(ComputerName);
    });

    var ComputerNameUpdate = faker.company.companyName();

    this.Then(/^I update the computer details$/, function () {
        var ComputerName = ComputerNameUpdate;
        return page.createEditPage.editComputer(ComputerName).then(function () {
            return page.homePage.seeUpdatedAlert(ComputerName);
        });
    });

    this.Then(/^I search for updated computer device$/, function () {
        config = jsonfile.readFileSync('./support/config.json');
        var ComputerName = config.ComputerName;
        return page.createEditPage.searchComputer(ComputerName);
    });

    this.Then(/^I should see the updated record of computer$/, function () {
        config = jsonfile.readFileSync('./support/config.json');
        var ComputerName = config.ComputerName;
        return page.createEditPage.verifyComputer(ComputerName);
    });

    this.Then(/^I delete the computer$/, function () {
        config = jsonfile.readFileSync('./support/config.json');
        var ComputerName = config.ComputerName;
        return page.createEditPage.deleteComputer(ComputerName);
    });

    this.Then(/^The computer record should get deleted from record$/, function () {
        return page.homePage.seeDeleteAlert();
    });
};
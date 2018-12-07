
module.exports = {

    elements: {
        createAlert: by.css('#main div.alert-message.warning'),


    },

    seeCreatedAlert: function (ComputerName) {

        return driver.wait(until.elementsLocated(page.homePage.elements.createAlert), 25000)
            .then(function () {
                return driver.findElement(page.homePage.elements.createAlert).getText().then(function (alertText) {
                    console.log('Created alertText :', alertText);
                    config = jsonfile.readFileSync('./support/config.json');
                    config.ComputerName = ComputerName;
                    jsonfile.writeFileSync('./support/config.json', config);
                    return expect(alertText).to.contain('Done! Computer ' + ComputerName + ' has been created');
                })
            })
    },

    seeDeleteAlert: function () {

        return driver.wait(until.elementsLocated(page.homePage.elements.createAlert), 25000)
            .then(function () {
                return driver.findElement(page.homePage.elements.createAlert).getText().then(function (alertText) {
                    console.log('Deleted alertText :', alertText);
                    return expect(alertText).to.contain('Done! Computer has been deleted');
                })
            })
    },

    seeUpdatedAlert: function (ComputerName) {
        return driver.wait(until.elementsLocated(page.homePage.elements.createAlert), 25000)
            .then(function () {
                return driver.findElement(page.homePage.elements.createAlert).getText().then(function (alertText) {
                    console.log('Updated alertText :', alertText);
                    config = jsonfile.readFileSync('./support/config.json');
                    config.ComputerName = ComputerName;
                    jsonfile.writeFileSync('./support/config.json', config);
                    return expect(alertText).to.contain('Done! Computer ' + ComputerName + ' has been updated');
                })
            })
    },
}
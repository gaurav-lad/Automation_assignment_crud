
module.exports = {

    elements: {
        addComputer: by.css('a[id="add"]'),
        mainSection: by.css('section[id="main"]'),
        title: by.css('#main h1'),
        detailsForm: by.css('form[action="/computers"]'),
        upddetailsForm: by.css('form[method="POST"]'),
        nameInput: by.css('input[name="name"]'),
        searchInput: by.css('input[id="searchbox"]'),
        searchComputersList: by.css('table.computers.zebra-striped'),
        searchBtn: by.css('input[id="searchsubmit"]'),
        introDateInput: by.css('input[name="introduced"]'),
        discontunueDateInput: by.css('input[name="discontinued"]'),
        companyList: by.css('select[name="company"]'),
        deleteBtn: by.css('input[value="Delete this computer"]'),
        createSubmitBtn: by.css('div[class="actions"] input[type="submit"]'),
    },

    clickAddNewComputer: function () {

        return driver.wait(until.elementsLocated(page.createEditPage.elements.addComputer), 25000)
            .then(function () {
                return driver.findElement(page.createEditPage.elements.addComputer).click();
            })
    },

    fillComputerDetails: function (ComputerName, IntroDate, DiscDate) {

        return driver.wait(until.elementsLocated(page.createEditPage.elements.mainSection), 25000)
            .then(function () {
                return driver.findElement(page.createEditPage.elements.title).getText().then(function (title) {
                    expect(title).to.equal('Add a computer');
                    return driver.wait(until.elementsLocated(page.createEditPage.elements.detailsForm), 25000)
                        .then(function () {
                            driver.findElement(page.createEditPage.elements.nameInput).sendKeys(ComputerName);
                            driver.findElement(page.createEditPage.elements.introDateInput).sendKeys(IntroDate);
                            return driver.findElement(page.createEditPage.elements.discontunueDateInput).sendKeys(DiscDate).then(function () {
                                return driver.findElement(page.createEditPage.elements.companyList).then(function (selectList) {
                                    return selectList.findElements(by.css('option'))
                                        .then(function optionClick(options) {
                                            return options[3].click().then(function () {
                                                return driver.findElement(page.createEditPage.elements.createSubmitBtn).click();
                                            })
                                        })
                                })
                            })
                        })
                })
            });

    },

    searchComputer: function (ComputerName) {
        return driver.wait(until.elementsLocated(page.createEditPage.elements.searchInput), 25000)
            .then(function () {
                return driver.findElement(page.createEditPage.elements.searchInput).sendKeys(ComputerName)
                    .then(function () {
                        return driver.findElement(page.createEditPage.elements.searchBtn).click();
                    })
            })
    },

    verifyComputer: function (ComputerName) {

        return driver.wait(until.elementsLocated(page.createEditPage.elements.searchComputersList), 25000)
            .then(function () {
                return driver.findElement(page.createEditPage.elements.searchComputersList)
                    .then(function (searchedList) {
                        return searchedList.findElement(by.css('tbody tr td a')).getText().then(function (compName) {
                            expect(compName).to.equal(ComputerName);
                        });
                    });
            });
    },

    editComputer: function (ComputerName) {
        return driver.wait(until.elementsLocated(page.createEditPage.elements.searchComputersList), 25000)
            .then(function () {
                return driver.findElement(page.createEditPage.elements.searchComputersList)
                    .then(function (searchedList) {
                        return searchedList.findElement(by.css('tbody tr td a')).click().then(function () {
                            return driver.wait(until.elementsLocated(page.createEditPage.elements.mainSection), 25000)
                                .then(function () {
                                    return driver.findElement(page.createEditPage.elements.title).getText().then(function (title) {
                                        expect(title).to.equal('Edit computer');
                                        return driver.wait(until.elementsLocated(page.createEditPage.elements.upddetailsForm), 25000)
                                            .then(function () {
                                                return driver.findElement(page.createEditPage.elements.nameInput).clear().then(function () {
                                                    driver.findElement(page.createEditPage.elements.nameInput).sendKeys(ComputerName)
                                                    return driver.findElement(page.createEditPage.elements.createSubmitBtn).click();
                                                });
                                            });
                                    })
                                })
                        })
                    })
            })
    },

    deleteComputer: function (ComputerName) {
        return driver.wait(until.elementsLocated(page.createEditPage.elements.searchComputersList), 25000)
            .then(function () {
                return driver.findElement(page.createEditPage.elements.searchComputersList)
                    .then(function (searchedList) {
                        return searchedList.findElement(by.css('tbody tr td a')).click().then(function () {
                            return driver.wait(until.elementsLocated(page.createEditPage.elements.mainSection), 25000)
                                .then(function () {
                                    return driver.findElement(page.createEditPage.elements.title).click().then(function (title) {
                                        // expect(title).to.equal('Edit computer');
                                        return driver.wait(until.elementsLocated(page.createEditPage.elements.upddetailsForm), 25000)
                                            .then(function () {
                                                return driver.findElement(page.createEditPage.elements.deleteBtn).click()
                                            })
                                    })
                                })
                        })
                    })
            })
    },
}
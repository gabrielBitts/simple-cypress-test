/// <reference types='cypress'/>

import SearchPage from '../pageObjects/searchPage'
import ResultsPage from '../pageObjects/resultsPage'

before('Navigate to DuckDuckGo Page', () => {
    cy.visit('')
})

describe('DuckDuckGo Search', () => {
    it('Should search "Android" and assert it is being shown', () => {
        SearchPage.typeSearchText('Android')
        SearchPage.searchButtonClick()
        ResultsPage.checkDisplayedText('Android')
        ResultsPage.checkDisplayedUrl('www.android.com')
    })
})

import { Footer } from '../page-objects/core'
import { Header } from '../page-objects/core'
import {
    Finance,
    FinanceOptions,
    FinanceCardHP,
    FinanceCardPCH,
    FinanceCardPCP,
    FinanceCardPersonalLoan,
    FinanceConsiderations,
} from '../page-objects/features/finance'
import { CardMediaGrid } from '../page-objects/components/surfaces/CardMediaGrid'

describe('The Finance Page', () => {
    const header = new Header()
    const finance = new Finance()
    const financeOptions = new FinanceOptions()
    const financeCardHP = new FinanceCardHP()
    const financeCardPCH = new FinanceCardPCH()
    const financeCardPCP = new FinanceCardPCP()
    const financeCardPersonalLoan = new FinanceCardPersonalLoan()
    const financeConsiderations = new FinanceConsiderations()
    const footer = new Footer()
    const cardMediaGrid = new CardMediaGrid()

    it('successfully loads and contains the expected elements', () => {
        finance.visit()

        // Check if the header is visible
        header.getAppBar().should('be.visible')

        // Check if the finance section introduction is visible and contains the expected elements
        financeOptions
            .getFinanceSectionIntroduction()
            .should('be.visible')
            .within(() => {
                financeOptions.getFinanceTitle().contains('Finance')
                financeOptions
                    .getFinanceIntroductionText()
                    .contains('When it comes to car finance options in the UK')
            })

        // Check if the finance section options is visible and contains the expected elements
        financeOptions
            .getFinanceSectionOptions()
            .should('be.visible')
            .within(() => {
                financeOptions
                    .getFinanceSectionPCPTitle()
                    .contains('Personal Contract Purchase or Plan (PCP)')
                financeOptions
                    .getFinanceSectionPCPText()
                    .contains('PCP is a popular car finance option')
                financeOptions
                    .getFinanceSectionHPTitle()
                    .contains('Hire Purchase (HP)')
                financeOptions
                    .getFinanceSectionHPText()
                    .contains(
                        'Hire purchase is a straightforward car finance option'
                    )
                financeOptions
                    .getFinanceSectionPCHTitle()
                    .contains('Personal Contract Hire (PCH)/Car Leasing')
                financeOptions
                    .getFinanceSectionPCHText()
                    .contains(
                        'Personal contract hire, commonly referred to as car leasing'
                    )
                financeOptions
                    .getFinanceSectionPersonalLoanTitle()
                    .contains('Personal Loan')
                financeOptions
                    .getFinanceSectionPersonalLoanText()
                    .contains(
                        'A personal loan from a bank is a traditional method of financing a car purchase'
                    )
            })

        // Check if the finance options card section is visible and contains the expected elements
        finance
            .getFinanceOptions()
            .should('be.visible')
            .within(() => {
                financeCardPCP.getFinanceCardPCP().should('be.visible')
                financeCardHP.getFinanceCardHP().should('be.visible')
                financeCardPCH.getFinanceCardPCH().should('be.visible')
                financeCardPersonalLoan
                    .getFinanceCardPersonalLoan()
                    .should('be.visible')
            })

        // Check if the finance considerations section is visible and contains the expected elements
        finance
            .getFinanceConsiderations()
            .should('be.visible')
            .within(() => {
                financeConsiderations
                    .getFinanceConsiderationsTitle()
                    .contains('Things to Consider')
                financeConsiderations
                    .getFinanceConsiderationsAffordabilty()
                    .contains('Affordability')
                financeConsiderations
                    .getFinanceConsiderationsDeposit()
                    .contains('Deposit')
                financeConsiderations
                    .getFinanceConsiderationsInterestRates()
                    .contains('Interest Rates')
                financeConsiderations
                    .getFinanceConsiderationsTermLength()
                    .contains('Term Length')
                financeConsiderations
                    .getFinanceConsiderationsBalloonPayments()
                    .contains('Balloon Payments')
                financeConsiderations
                    .getFinanceConsiderationsMileageRestrictions()
                    .contains('Mileage Restrictions')
                financeConsiderations
                    .getFinanceConsiderationsCreditHistory()
                    .contains('Credit History')
                financeConsiderations
                    .getFinanceConsiderationsFuturePlans()
                    .contains('Future Plans')
            })

        // Check if the footer is visible and contains the expected elements
        footer.getFooter().should('be.visible')
    })
})

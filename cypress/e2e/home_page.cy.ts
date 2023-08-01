import { Footer } from '../page-objects/core'
import { Header } from '../page-objects/core'
import { Home } from '../page-objects/features'
import { VehicleShow } from '../page-objects/features/vehicles'
import {
    FinanceCardHP,
    FinanceCardPCH,
    FinanceCardPCP,
    FinanceCardPersonalLoan,
} from '../page-objects/features/finance'
import { CardMediaGrid } from '../page-objects/components/surfaces/CardMediaGrid'

describe('The Home Page', () => {
    const header = new Header()
    const home = new Home()
    const vehicleShow = new VehicleShow()
    const financeCardHP = new FinanceCardHP()
    const financeCardPCH = new FinanceCardPCH()
    const financeCardPCP = new FinanceCardPCP()
    const financeCardPersonalLoan = new FinanceCardPersonalLoan()
    const footer = new Footer()
    const cardMediaGrid = new CardMediaGrid()

    beforeEach(() => {
        home.visit()
    })

    it('successfully loads and contains the expected elements', () => {
        // Check if the header is visible
        header.getAppBar().should('be.visible')

        // Check if the carousel is visible and contains the expected image elements
        home.getFeaturedCarsCarousel()
            .should('be.visible')
            .within(() => {
                cy.get('[data-testid="carousel"]')
                    .should('be.visible')
                    .find('img')
                    .should('have.length', 3)
            })

        // Check if the Featured Cars section is visible and contains the expected elements

        home.getFeaturedCarsSection()
            .should('be.visible')
            .within(() => {
                home.getFeaturedCarsTitle().contains('Featured Cars')
                cardMediaGrid
                    .getCardMediaGrid()
                    .should('be.visible')
                    .find('[data-test="grid-card"]')
                    .should('have.length', 6)
                cardMediaGrid.getGridCardTitle().first().contains('Audi A3')
                cardMediaGrid
                    .getGridCardDescription()
                    .first()
                    .contains('2020 | 10,000 miles | petrol | black')
                cardMediaGrid
                    .getGridCardButton()
                    .first()
                    .contains('Show details')
            })

        // Check if the Car finance section is visible and contains the expected elements
        home.getCarFinanceSection()
            .should('be.visible')
            .within(() => {
                home.getCarFinanceSectionTitle().contains('Car Finance')
                home.getCarFinanceSectionText().contains(
                    'We can help you find the best finance deal for your next car'
                )
                financeCardPCP.getFinanceCardPCP().should('be.visible')
                financeCardHP.getFinanceCardHP().should('be.visible')
                financeCardPCH.getFinanceCardPCH().should('be.visible')
                financeCardPersonalLoan
                    .getFinanceCardPersonalLoan()
                    .should('be.visible')
            })

        // Check if the footer is visible and contains the expected elements
        footer.getFooter().should('be.visible')
    })

    it('successfully loads the vehicle page when a vehicle is selected', () => {
        home.getFeaturedCarsSection().then((section) => {
            cy.wrap(section).within(() => {
                cardMediaGrid.getGridCardButtonByTitle('Audi A3').click()
            })
        })

        vehicleShow.getVehicleInformationSection().should('be.visible')
    })
})

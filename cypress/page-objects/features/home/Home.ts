/**
 * cypress/page-objects/features/Home.ts
 * Page object for the Home page
 */
export class Home {
    visit() {
        cy.visit('/')
    }

    getFeaturedCarsCarousel() {
        return cy.get('[data-testid="featured-cars-carousel"]')
    }

    getFeaturedCarsSection() {
        return cy.get('[data-testid="featured-cars-section"]')
    }

    getFeaturedCarsTitle() {
        return cy.get('[data-testid="featured-cars-title"]')
    }

    getCarFinanceSection() {
        return cy.get('[data-testid="car-finance-section"]')
    }

    getCarFinanceSectionTitle() {
        return cy.get('[data-testid="car-finance-section-title"]')
    }

    getCarFinanceSectionText() {
        return cy.get('[data-testid="car-finance-section-text"]')
    }
}

/**
 * cypress/page-objects/features/finance/FinanceConsiderations.ts
 * Compare this snippet from cypress/e2e/finance_page.cy.ts:
 */
export class FinanceConsiderations {
    getFinanceConsiderationsSection() {
        return cy.get('[data-testid="finance-considerations-section"]')
    }

    getFinanceConsiderationsTitle() {
        return cy.get('[data-test="h3"]')
    }

    getFinanceConsiderationsAffordabilty() {
        return cy.get('[data-testid="affordability"]')
    }

    getFinanceConsiderationsDeposit() {
        return cy.get('[data-testid="deposit"]')
    }

    getFinanceConsiderationsInterestRates() {
        return cy.get('[data-testid="interest-rates"]')
    }

    getFinanceConsiderationsTermLength() {
        return cy.get('[data-testid="term-length"]')
    }

    getFinanceConsiderationsBalloonPayments() {
        return cy.get('[data-testid="balloon-payments"]')
    }

    getFinanceConsiderationsOwnership() {
        return cy.get('[data-testid="ownership"]')
    }

    getFinanceConsiderationsMileageRestrictions() {
        return cy.get('[data-testid="mileage-restrictions"]')
    }

    getFinanceConsiderationsCreditHistory() {
        return cy.get('[data-testid="credit-history"]')
    }

    getFinanceConsiderationsFuturePlans() {
        return cy.get('[data-testid="future-plans"]')
    }
}

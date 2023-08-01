/**
 * cypress/page-objects/features/finance/FinanceCardHP.ts
 * Page object for the Finance Card on the Home page
 */
export class FinanceCardHP {
    getFinanceCardHP() {
        return cy.get('[data-testid="finance-card-hp"]')
    }

    getFinanceCardTitle() {
        return cy.get('[data-testid="finance-card-hp-title"]')
    }

    getFinanceCardText() {
        return cy.get('[data-testid="finance-card-hp-text"]')
    }

    getFinanceCardButton() {
        return cy.get('[data-testid="finance-card-hp-button"]')
    }
}

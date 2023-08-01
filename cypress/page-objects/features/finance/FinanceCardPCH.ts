/**
 * cypress/page-objects/features/finance/FinanceCardPCH.ts
 * Page object for the Finance Card on the Personal Contract Hire page
 */
export class FinanceCardPCH {
    getFinanceCardPCH() {
        return cy.get('[data-testid="finance-card-pch"]')
    }

    getFinanceCardTitle() {
        return cy.get('[data-testid="finance-card-pch-title"]')
    }

    getFinanceCardText() {
        return cy.get('[data-testid="finance-card-pch-text"]')
    }

    getFinanceCardButton() {
        return cy.get('[data-testid="finance-card-pch-button"]')
    }
}

/**
 * cypress/page-objects/features/finance/FinanceCardPCP.ts
 * Page object for the Finance Card on the Personal Contract Purchase page
 */
export class FinanceCardPCP {
    getFinanceCardPCP() {
        return cy.get('[data-testid="finance-card-pcp"]')
    }

    getFinanceCardTitle() {
        return cy.get('[data-testid="finance-card-pcp-title"]')
    }

    getFinanceCardText() {
        return cy.get('[data-testid="finance-card-pcp-text"]')
    }

    getFinanceCardButton() {
        return cy.get('[data-testid="finance-card-pcp-button"]')
    }
}

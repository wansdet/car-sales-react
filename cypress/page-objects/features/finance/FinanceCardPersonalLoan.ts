/**
 * cypress/page-objects/features/finance/FinanceCardPersonalLoan.ts
 * Page object for the Finance Card on the Personal Loan page
 */
export class FinanceCardPersonalLoan {
    getFinanceCardPersonalLoan() {
        return cy.get('[data-testid="finance-card-personal-loan"]')
    }

    getFinanceCardTitle() {
        return cy.get('[data-testid="finance-card-personal-loan-title"]')
    }

    getFinanceCardText() {
        return cy.get('[data-testid="finance-card-personal-loan-text"]')
    }

    getFinanceCardButton() {
        return cy.get('[data-testid="finance-card-personal-loan-button"]')
    }
}

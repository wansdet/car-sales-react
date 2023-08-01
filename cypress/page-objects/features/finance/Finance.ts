/**
 * cypress/page-objects/features/finance/Finance.ts
 * Compare this snippet from cypress/e2e/finance_page.cy.ts:
 */
export class Finance {
    visit() {
        cy.visit('/finance')
    }

    getFinanceOptions() {
        return cy.get('[data-testid="finance-options"]')
    }

    getFinanceConsiderations() {
        return cy.get('[data-testid="finance-considerations"]')
    }
}

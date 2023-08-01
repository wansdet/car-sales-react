/**
 * cypress/page-objects/features/finance/FinanceOptions.ts
 * Compare this snippet from cypress/e2e/finance_page.cy.ts:
 */
export class FinanceOptions {
    getFinanceSectionIntroduction() {
        return cy.get('[data-testid="finance-section-introduction"]')
    }

    getFinanceTitle() {
        return cy.get('[data-test="h1"]')
    }

    getFinanceIntroductionText() {
        return cy.get('[data-testid="finance-introduction-text"]')
    }

    getFinanceSectionOptions() {
        return cy.get('[data-testid="finance-section-options"]')
    }

    getFinanceSectionPCPTitle() {
        return cy.get('[data-test="h2"]').eq(0)
    }

    getFinanceSectionPCPText() {
        return cy.get('[data-testid="finance-section-pcp-text"]')
    }

    getFinanceSectionHPTitle() {
        return cy.get('[data-test="h2"]').eq(1)
    }

    getFinanceSectionHPText() {
        return cy.get('[data-testid="finance-section-hp-text"]')
    }

    getFinanceSectionPCHTitle() {
        return cy.get('[data-test="h2"]').eq(2)
    }

    getFinanceSectionPCHText() {
        return cy.get('[data-testid="finance-section-pch-text"]')
    }

    getFinanceSectionPersonalLoanTitle() {
        return cy.get('[data-test="h2"]').eq(3)
    }

    getFinanceSectionPersonalLoanText() {
        return cy.get('[data-testid="finance-section-personal-loan-text"]')
    }
}

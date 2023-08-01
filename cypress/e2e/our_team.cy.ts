describe('The Our Team Page', () => {
    it('successfully loads and contains the expected elements', () => {
        cy.visit('/our-team')

        // Check if Our Team headings are visible
        cy.get('[data-test="h1"]').contains('Our Team')
        cy.get('[data-test="h2"]').first().contains('Management Team')
        cy.get('[data-test="h2"]').last().contains('Sales Team')

        // Check if the management team section is visible and contains the expected elements
        cy.get('[data-testid="management-team"]')
            .should('be.visible')
            .within(() => {
                cy.get('[data-test="h3"]').first().contains('John Wick')
                cy.get('h6').first().contains('CEO')
                cy.get('[data-test="h3"]').last().contains('Kevin Dickinson')
                cy.get('h6').last().contains('SALES DIRECTOR')
            })
            .find('[data-test="h3"]')
            .should('have.length', 3)

        // Check if the sales team section is visible and contains the expected elements
        cy.get('[data-testid="sales-team"]')
            .should('be.visible')
            .within(() => {
                cy.get('[data-test="h3"]').first().contains('Emily Jones')
                cy.get('[data-test="job-title"]')
                    .first()
                    .contains('SALES EXECUTIVE')
                cy.get('[data-test="h3"]').last().contains('Jack Williams')
                cy.get('[data-test="job-title"]')
                    .last()
                    .contains('SALES EXECUTIVE')
            })
            .find('[data-test="h3"]')
            .should('have.length', 4)

        // Check team member contact details
        cy.get('[data-testid="team-member-contacts"]')
            .first()
            .should('be.visible')
            .within(() => {
                // Check the phoneNumber row
                cy.get('[data-test="phone-number"]').contains(
                    '01234 567890 ext 111'
                )
                // Check the mobileNumber row
                cy.get('[data-test="mobile-number"]').contains('07890 123450')
                // Check the email row
                cy.get('[data-test="email"]').contains('john.wick@example.com')
            })
        cy.get('[data-testid="team-member-contacts"]')
            .last()
            .should('be.visible')
            .within(() => {
                // Check the phoneNumber row
                cy.get('[data-test="phone-number"]').contains(
                    '01234 567890 ext 117'
                )
                // Check the mobileNumber row
                cy.get('[data-test="mobile-number"]').contains('07890 123456')
                // Check the email row
                cy.get('[data-test="email"]').contains(
                    'jack.williams@example.com'
                )
            })
    })
})

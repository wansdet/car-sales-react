/**
 * cypress/page-objects/features/contact-us/ContactUs.ts
 * Page object for the Contact Us page
 */
export class ContactUs {
    visit() {
        cy.visit('/contact-us')
    }

    getGoogleMaps() {
        return cy.get('iframe')
    }

    getContactInformation() {
        return cy.get('[data-testid="contact-information"]')
    }

    getContactInformationTitle() {
        return cy.get('[data-testid="contact-information-title"]')
    }
}

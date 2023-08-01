/**
 * cypress/page-objects/features/contact-us/AddressDetails.ts
 * Page object for the Address Details section of the Contact Us page
 */
export class AddressDetails {
    getAddressDetails() {
        return cy.get('[data-testid="address-details"]')
    }

    getAddressLabel() {
        return cy.get('[data-testid="address-label"]')
    }
}

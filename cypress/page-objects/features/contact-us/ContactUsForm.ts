/**
 * cypress/page-objects/features/contact-us/ContactUsForm.ts
 * Page object for the Contact Us form section of the Contact Us page
 */
export class ContactUsForm {
    getContactForm() {
        return cy.get('[data-testid="contact-form"]')
    }

    getContactFormTitle() {
        return cy.get('[data-testid="contact-form-title"]')
    }

    getNameInput() {
        return cy.get('[data-testid="name"]')
    }

    getEmailInput() {
        return cy.get('[data-testid="email"]')
    }

    getMessageInput() {
        return cy.get('[data-testid="message"]')
    }

    getPrivacyPolicyCheckbox() {
        return cy.get('[data-testid="privacy-policy"]')
    }

    getSendMessageButton() {
        return cy.get('[data-testid="send-message"]')
    }
}

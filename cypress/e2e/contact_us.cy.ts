import { Footer } from '../page-objects/core'
import { Header } from '../page-objects/core'
import {
    AddressDetails,
    ContactUs,
    ContactUsForm,
} from '../page-objects/features/contact-us'

describe('The Contact Us Page', () => {
    const header = new Header()
    const footer = new Footer()
    const contactUs = new ContactUs()
    const addressDetails = new AddressDetails()
    const contactUsForm = new ContactUsForm()

    it('successfully loads and contains the expected elements', () => {
        contactUs.visit()

        // Check if the header is visible
        header.getAppBar().should('be.visible')

        // Check if Google Maps is visible
        contactUs.getGoogleMaps().should('be.visible')

        // Check if the contact information is visible and contains the expected elements
        contactUs
            .getContactInformation()
            .should('be.visible')
            .within(() => {
                contactUs
                    .getContactInformationTitle()
                    .contains('Contact Information')
                addressDetails
                    .getAddressDetails()
                    .should('be.visible')
                    .within(() => {
                        addressDetails.getAddressLabel().contains('Address')
                    })
            })

        // Check if the contact us form is visible and contains the expected elements
        contactUsForm
            .getContactForm()
            .should('be.visible')
            .within(() => {
                contactUsForm
                    .getContactFormTitle()
                    .contains('Send us a message')
                contactUsForm.getNameInput().should('be.visible')
                contactUsForm.getEmailInput().should('be.visible')
                contactUsForm.getMessageInput().should('be.visible')
                contactUsForm
                    .getPrivacyPolicyCheckbox()
                    .should('be.visible')
                    .and('not.be.checked')
                contactUsForm
                    .getSendMessageButton()
                    .contains('Send message')
                    .should('be.visible')
            })

        // Check if the footer is visible and contains the expected elements
        footer.getFooter().should('be.visible')
    })
})

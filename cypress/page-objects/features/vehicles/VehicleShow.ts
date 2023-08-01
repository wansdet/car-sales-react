/**
 * cypress/page-objects/features/vehicles/VehicleShow.ts
 * Page object for the Vehicle Show page
 */
export class VehicleShow {
    visit(id: number) {
        cy.visit('/vehicles/vehicle-show/{id}')
    }

    getVehicleInformationSection() {
        return cy.get('[data-testid="vehicle-information-section"]')
    }

    getVehicleInformationTitle() {
        return cy.get('[data-testid="vehicle-information-title"]')
    }
}

// src/mocks/handlers.ts
import { handlers as vehicleHandlers } from './services/VehiclesService'

export const handlers = [
    // To append handlers from services, use the spread operator
    ...vehicleHandlers,
]

// src/mocks/services/VehiclesService.ts
import { rest } from 'msw'

import { API_BASE_URL } from '@/core/application'
import { vehicleInventory } from '@/mocks/dbase/vehicles/VehicleInventory'

export interface IMake {
    makeId: string
    makeName: string
}

export interface IVehicleInventory {
    id: number
    make: IMake
    model: string
    type: string
    bodyType: string
    fuelType: string
    colour: string
    year: number
    mileage: number
    doors: number
    seats: number
    owners: number
    history: string
    gearbox: string
    price: number
    title: string
    description: string
    features: string
    status: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export const handlers = [
    rest.get(`${API_BASE_URL}/api/vehicles`, (req, res, ctx) => {
        return res(ctx.json(vehicleInventory))
    }),

    rest.get(`${API_BASE_URL}/api/vehicles/:id`, (req, res, ctx) => {
        const { id } = req.params
        const vehicle = vehicleInventory.find(
            (vehicle) => vehicle.id === Number(id)
        )
        if (vehicle) {
            return res(ctx.status(200), ctx.json(vehicle))
        }

        return res(
            ctx.status(404),
            ctx.json({ message: `Vehicle with id ${id} not found` })
        )
    }),
]

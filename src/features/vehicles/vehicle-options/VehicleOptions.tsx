import React from 'react'
import MenuItem from '@mui/material/MenuItem'

import {
    bodyTypes,
    colours,
    fuelTypes,
    doors,
    gearboxTypes,
    historyTypes,
    makes,
    seats,
    vehicleStatuses,
    years,
} from '@/common/models/vehicle'

export const bodyTypeOptions = bodyTypes.map((bodyType) => (
    <MenuItem key={bodyType.value} value={bodyType.value}>
        {bodyType.label}
    </MenuItem>
))

export const colourOptions = colours.map((colour) => (
    <MenuItem key={colour.value} value={colour.value}>
        {colour.label}
    </MenuItem>
))

export const doorOptions = doors.map((door) => (
    <MenuItem key={door.value} value={door.value}>
        {door.label}
    </MenuItem>
))

export const fuelTypeOptions = fuelTypes.map((fuelType) => (
    <MenuItem key={fuelType.value} value={fuelType.value}>
        {fuelType.label}
    </MenuItem>
))

export const gearboxTypeOptions = gearboxTypes.map((gearboxType) => (
    <MenuItem key={gearboxType.value} value={gearboxType.value}>
        {gearboxType.label}
    </MenuItem>
))

export const historyTypeOptions = historyTypes.map((historyType) => (
    <MenuItem key={historyType.value} value={historyType.value}>
        {historyType.label}
    </MenuItem>
))

export const makeOptions = makes.map((make) => (
    <MenuItem key={make.value} value={make.value}>
        {make.label}
    </MenuItem>
))

export const seatOptions = seats.map((seat) => (
    <MenuItem key={seat.value} value={seat.value}>
        {seat.label}
    </MenuItem>
))

export const vehicleStatusOptions = vehicleStatuses.map((vehicleStatus) => (
    <MenuItem key={vehicleStatus.value} value={vehicleStatus.value}>
        {vehicleStatus.label}
    </MenuItem>
))

export const yearOptions = years.map((year) => (
    <MenuItem key={year.value} value={year.value}>
        {year.label}
    </MenuItem>
))

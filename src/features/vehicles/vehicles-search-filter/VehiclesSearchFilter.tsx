import React from 'react'
import {
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Typography,
} from '@mui/material'

import {
    bodyTypeOptions,
    colourOptions,
    fuelTypeOptions,
    doorOptions,
    gearboxTypeOptions,
    historyTypeOptions,
    makeOptions,
    seatOptions,
    yearOptions,
} from '@/features/vehicles'
import Button from '@mui/material/Button'

interface VehicleSearchFilterProps {
    searchOptions: any
    onSearchOptionsChange: (event: SelectChangeEvent<{ value: string }>) => void
}

const VehiclesSearchFilter = ({
    searchOptions,
    onSearchOptionsChange,
}: VehicleSearchFilterProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                border: '1px solid #ccc',
                color: 'grey.900',
                p: 2,
                mt: 3,
            }}
        >
            <Typography variant="body1" gutterBottom>
                Search Options
            </Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="make-label">Make</InputLabel>
                <Select
                    labelId="make-label"
                    id="make"
                    name="make"
                    label="Make"
                    value={searchOptions.make}
                    onChange={onSearchOptionsChange}
                >
                    <MenuItem value="">Any</MenuItem>
                    {makeOptions}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="year-label">Year</InputLabel>
                <Select
                    labelId="year-label"
                    id="year"
                    name="year"
                    label="Year"
                    value={searchOptions.year}
                    onChange={onSearchOptionsChange}
                >
                    <MenuItem value="">Any</MenuItem>
                    {yearOptions}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="body-type-label">Body type</InputLabel>
                <Select
                    labelId="body-type-label"
                    id="body-type"
                    name="bodyType"
                    label="Body type"
                    value={searchOptions.bodyType}
                    onChange={onSearchOptionsChange}
                >
                    <MenuItem value="">Any</MenuItem>
                    {bodyTypeOptions}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="fuel-type-label">Fuel type</InputLabel>
                <Select
                    labelId="fuel-type-label"
                    id="fuel-type"
                    name="fuelType"
                    label="Fuel type"
                    value={searchOptions.fuelType}
                    onChange={onSearchOptionsChange}
                >
                    <MenuItem value="">Any</MenuItem>
                    {fuelTypeOptions}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="gearbox-label">Gearbox</InputLabel>
                <Select
                    labelId="gearbox-label"
                    id="gearbox"
                    name="gearboxType"
                    label="Gearbox"
                    value={searchOptions.gearboxType}
                    onChange={onSearchOptionsChange}
                >
                    <MenuItem value="">Any</MenuItem>
                    {gearboxTypeOptions}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="colour-label">Colour</InputLabel>
                <Select
                    labelId="colour-label"
                    id="colour"
                    name="colour"
                    label="Colour"
                    value={searchOptions.colour}
                    onChange={onSearchOptionsChange}
                >
                    <MenuItem value="">Any</MenuItem>
                    {colourOptions}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="doors-label">Doors</InputLabel>
                <Select
                    labelId="doors-label"
                    id="doors"
                    name="doors"
                    label="Doors"
                    value={searchOptions.doors}
                    onChange={onSearchOptionsChange}
                >
                    <MenuItem value="">Any</MenuItem>
                    {doorOptions}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="seats-label">Seats</InputLabel>
                <Select
                    labelId="seats-label"
                    id="seats"
                    name="seats"
                    label="Seats"
                    value={searchOptions.seats}
                    onChange={onSearchOptionsChange}
                >
                    <MenuItem value="">Any</MenuItem>
                    {seatOptions}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="history-type-label">History</InputLabel>
                <Select
                    labelId="history-type-label"
                    id="history-type"
                    name="historyType"
                    label="History"
                    value={searchOptions.historyType}
                    onChange={onSearchOptionsChange}
                >
                    <MenuItem value="">Any</MenuItem>
                    {historyTypeOptions}
                </Select>
            </FormControl>
        </Paper>
    )
}

export default VehiclesSearchFilter

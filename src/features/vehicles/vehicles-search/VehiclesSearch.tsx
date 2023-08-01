import React, { useEffect, useState } from 'react'
import {
    Container,
    CssBaseline,
    Grid,
    Typography,
    Pagination,
} from '@mui/material'

import { API_BASE_URL } from '@/core/application'
import { useApiGet } from '@/core/api'
import { IVehicle, IVehicleSearchOptions } from '@/common/models/vehicle'
import {
    VehiclesCardList,
    VehiclesSearchFilter,
    useVehicleFilter,
} from '@/features/vehicles'

const VehiclesSearch = () => {
    const [searchOptions, setSearchOptions] = useState<IVehicleSearchOptions>({
        make: '',
        year: '',
        bodyType: '',
        fuelType: '',
        gearboxType: '',
        colour: '',
        doors: '',
        seats: '',
        historyType: '',
    })
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const itemsPerPage = 10
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = page * itemsPerPage

    const {
        data: fetchedVehicles,
        loading: getLoading,
        error: getError,
    } = useApiGet<IVehicle[]>(`${API_BASE_URL}/api/vehicles`)

    // const { showLoading, hideLoading } = useContext(ApplicationContext)

    useEffect(() => {
        if (fetchedVehicles) {
            setTotalPages(Math.ceil(fetchedVehicles.length / itemsPerPage))
        }
    }, [fetchedVehicles])

    useEffect(() => {
        if (getLoading) {
            // showLoading()
        } else {
            // hideLoading()
        }
    }, [getLoading])

    const { vehicles, totalPages: filteredTotalPages } = useVehicleFilter(
        fetchedVehicles,
        searchOptions,
        itemsPerPage
    )

    const displayedVehicles = vehicles.slice(startIndex, endIndex)

    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value)
    }

    const handleSearchOptionsChange = (event: any) => {
        const { name, value } = event.target
        setSearchOptions((prevSearchOptions) => ({
            ...prevSearchOptions,
            [name]: value,
        }))
    }

    const handleReset = () => {
        setSearchOptions({
            make: '',
            year: '',
            bodyType: '',
            fuelType: '',
            gearboxType: '',
            colour: '',
            doors: '',
            seats: '',
            historyType: '',
        })
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" component="main" sx={{ pt: 12, pb: 8 }}>
                <Grid container spacing={5} sx={{ pt: 3 }}>
                    <Grid item xs={12} md={3} sx={{ py: 3 }}>
                        {
                            <VehiclesSearchFilter
                                searchOptions={searchOptions}
                                onSearchOptionsChange={
                                    handleSearchOptionsChange
                                }
                                // onReset={handleReset}
                            />
                        }
                    </Grid>
                    <Grid item xs={12} md={9} sx={{ py: 3 }}>
                        {vehicles.length > 0 ? (
                            <React.Fragment>
                                <Pagination
                                    count={filteredTotalPages}
                                    page={page}
                                    sx={{ mt: 3, mb: 3 }}
                                    onChange={handlePageChange}
                                />
                                <VehiclesCardList
                                    vehicles={displayedVehicles}
                                />
                                <Pagination
                                    count={filteredTotalPages}
                                    page={page}
                                    sx={{ mt: 3, mb: 3 }}
                                    onChange={handlePageChange}
                                />
                            </React.Fragment>
                        ) : (
                            <Typography variant="body1" gutterBottom>
                                No vehicles found
                            </Typography>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default VehiclesSearch

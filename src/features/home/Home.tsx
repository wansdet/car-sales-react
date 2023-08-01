// src/features/home/Home.tsx
import React, { useEffect, useState } from 'react'
import { Box, Container, CssBaseline, Grid } from '@mui/material'

import {
    BASE_IMAGE_ASSETS_URL,
    API_BASE_URL,
    PATH_VEHICLE_SHOW,
} from '@/core/application'
import { useApiGet } from '@/core/api'
import { IVehicle } from '@/common/models/vehicle'
import { IMedia } from '@/components/components.generic.interface'
import { H1, Paragraph } from '@/components/data-display'
import { CardMediaGrid } from '@/components/surfaces'
import { Carousel, IImageCarousel } from '@/components/utils'
import {
    FinanceCardHP,
    FinanceCardPCP,
    FinanceCardPCH,
    FinanceCardPersonalLoan,
} from '@/features/finance'

const carouselImages: IImageCarousel[] = [
    {
        original: `${BASE_IMAGE_ASSETS_URL}/2000x1000?text=Vehicle Image 1`,
        thumbnail: `${BASE_IMAGE_ASSETS_URL}/20x10?text=Vehicle Image 1`,
    },
    {
        original: `${BASE_IMAGE_ASSETS_URL}/2000x1000?text=Vehicle Image 2`,
        thumbnail: `${BASE_IMAGE_ASSETS_URL}/20x10?text=Vehicle Image 2`,
    },
    {
        original: `${BASE_IMAGE_ASSETS_URL}/2000x1000?text=Vehicle Image 3`,
        thumbnail: `${BASE_IMAGE_ASSETS_URL}/20x10?text=Vehicle Image 3`,
    },
]

const Home = () => {
    const [featuredVehicles, setFeaturedVehicles] = useState<IMedia[]>([])

    const {
        data: fetchedVehicles,
        loading: getLoading,
        error: getError,
    } = useApiGet<IVehicle[]>(`${API_BASE_URL}/api/vehicles`)

    useEffect(() => {
        if (fetchedVehicles) {
            const vehicles = fetchedVehicles
                .slice(0, 6)
                .map((vehicle: IVehicle, index) => ({
                    id: vehicle.id,
                    link: `${PATH_VEHICLE_SHOW}/${vehicle.id}`,
                    title: `${vehicle.make.makeName} ${
                        vehicle.model
                    } £${vehicle.price.toLocaleString()}`,
                    description: `${
                        vehicle.year
                    } | ${vehicle.mileage.toLocaleString()} miles | ${
                        vehicle.fuelType
                    } | ${vehicle.colour}`,
                    image: `${BASE_IMAGE_ASSETS_URL}/200x150?text=Vehicle ${
                        index + 1
                    }`,
                }))

            setFeaturedVehicles(vehicles)
        }
    }, [fetchedVehicles])

    useEffect(() => {
        if (getLoading) {
            // showLoading()
        } else {
            // hideLoading()
        }
    }, [getLoading])

    return (
        <React.Fragment>
            <CssBaseline />
            <Box
                data-testid="featured-cars-carousel"
                sx={{ overflowX: 'hidden' }}
            >
                <Carousel images={carouselImages} />
            </Box>
            <Container
                data-testid="featured-cars-section"
                maxWidth="lg"
                sx={{ mt: 5, mb: 15 }}
            >
                <H1
                    data-testid="featured-cars-title"
                    align="center"
                    sx={{ mt: 10 }}
                >
                    Featured Cars
                </H1>
                {featuredVehicles && (
                    <CardMediaGrid
                        media={featuredVehicles}
                        buttonText="Show details..."
                        infoPrefix="Show more about"
                    />
                )}
            </Container>
            <Box sx={{ backgroundColor: 'grey.200', py: 1 }}>
                <Container
                    data-testid="car-finance-section"
                    maxWidth={'lg'}
                    sx={{ mt: 10, mb: 15 }}
                >
                    <H1
                        data-testid="car-finance-section-title"
                        align="center"
                        sx={{ mt: 10 }}
                    >
                        Car Finance
                    </H1>
                    <Paragraph
                        data-testid="car-finance-section-text"
                        variant="leadParagraph"
                        align="center"
                        sx={{ mb: 5 }}
                    >
                        We can help you find the best finance deal for your next
                        car
                    </Paragraph>
                    <Grid container spacing={10}>
                        <Grid item xs={12} sm={6}>
                            <FinanceCardPCP />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FinanceCardHP />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FinanceCardPCH />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FinanceCardPersonalLoan />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default Home

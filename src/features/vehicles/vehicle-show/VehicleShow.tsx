import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
    Button,
    Container,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

import { API_BASE_URL } from '@/core/application'
import { useApiGet } from '@/core/api'
import {
    IVehicle,
    bodyTypes,
    colours,
    fuelTypes,
    historyTypes,
    gearboxTypes,
    vehicleStatuses,
} from '@/common/models/vehicle'
import { getOptionByValue } from '@/utils/generic'
import {
    ChipStatus,
    Heading,
    Paragraph,
    Section,
} from '@/components/data-display'
import { VehicleImageGallery } from '@/features/vehicles'

const VehicleShow = () => {
    const { id } = useParams()
    const [vehicle, setVehicle] = useState<IVehicle | null>(null)
    const { data: fetchedVehicle } = useApiGet<IVehicle>(
        `${API_BASE_URL}/api/vehicles/${id}`
    )

    const navigate = useNavigate()

    useEffect(() => {
        if (fetchedVehicle) {
            setVehicle(fetchedVehicle)
        }
    }, [fetchedVehicle])

    return (
        <Container maxWidth="md" component="main" sx={{ pt: 12, pb: 8 }}>
            {vehicle && (
                <React.Fragment>
                    <Button
                        color="primary"
                        startIcon={<ChevronLeftIcon />}
                        sx={{ mb: 5 }}
                        onClick={() => navigate(-1)}
                    >
                        Return
                    </Button>
                    <Grid container spacing={5} sx={{ mb: 5 }}>
                        <VehicleImageGallery />
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            sx={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <TableContainer
                                data-testid="vehicle-specifications-table"
                                component={Paper}
                                variant={'outlined'}
                                sx={{ flex: 1 }}
                            >
                                <Table size="small">
                                    <TableHead>
                                        <TableRow></TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Reference</TableCell>
                                            <TableCell>
                                                <strong>{vehicle.id}</strong>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Make/Model</TableCell>
                                            <TableCell>
                                                <strong>
                                                    {vehicle.make.makeName}{' '}
                                                    {vehicle.model}
                                                </strong>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Body type</TableCell>
                                            <TableCell>
                                                <strong>
                                                    {
                                                        getOptionByValue(
                                                            vehicle.bodyType,
                                                            bodyTypes
                                                        )?.label
                                                    }
                                                </strong>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Year</TableCell>
                                            <TableCell>
                                                <strong>{vehicle.year}</strong>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Colour</TableCell>
                                            <TableCell>
                                                <strong>
                                                    {
                                                        getOptionByValue(
                                                            vehicle.colour,
                                                            colours
                                                        )?.label
                                                    }
                                                </strong>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Mileage</TableCell>
                                            <TableCell>
                                                <strong>
                                                    {vehicle.mileage.toLocaleString()}
                                                </strong>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Owners</TableCell>
                                            <TableCell>
                                                <strong>
                                                    {vehicle.owners}
                                                </strong>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>History</TableCell>
                                            <TableCell>
                                                <strong>
                                                    {
                                                        getOptionByValue(
                                                            vehicle.history,
                                                            historyTypes
                                                        )?.label
                                                    }
                                                </strong>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Gearbox</TableCell>
                                            <TableCell>
                                                <strong>
                                                    {
                                                        getOptionByValue(
                                                            vehicle.gearbox,
                                                            gearboxTypes
                                                        )?.label
                                                    }
                                                </strong>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Fuel Type</TableCell>
                                            <TableCell>
                                                <strong>
                                                    {
                                                        getOptionByValue(
                                                            vehicle.fuelType,
                                                            fuelTypes
                                                        )?.label
                                                    }
                                                </strong>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Price</TableCell>
                                            <TableCell>
                                                <strong>
                                                    £{' '}
                                                    {vehicle.price.toLocaleString()}
                                                </strong>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Status</TableCell>
                                            <TableCell>
                                                <ChipStatus
                                                    statusValue={vehicle.status}
                                                    statuses={vehicleStatuses}
                                                    size="small"
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                    <Section
                        id="vehicle-information-section"
                        data-testid="vehicle-information-section"
                    >
                        <header>
                            <Heading>
                                {vehicle.make.makeName} {vehicle.model}
                            </Heading>
                        </header>
                        <Section
                            id="vehicle-information"
                            data-testid="vehicle-information"
                        >
                            <Heading data-testid="vehicle-information-title">
                                Vehicle Information
                            </Heading>
                            <Section
                                id="vehicle-details"
                                data-testid="vehicle-details"
                            >
                                <Heading data-testid="vehicle-details-title">
                                    Details
                                </Heading>
                                <Paragraph data-testid="vehicle-details-text">
                                    {vehicle.description}
                                </Paragraph>
                                <Heading data-testid="vehicle-features-title">
                                    Features
                                </Heading>
                                <Paragraph data-testid="vehicle-features-text">
                                    {vehicle.features}
                                </Paragraph>
                            </Section>
                        </Section>
                    </Section>
                </React.Fragment>
            )}
        </Container>
    )
}

export default VehicleShow

import React from 'react'
import { Link } from 'react-router-dom'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'

import { BASE_IMAGE_ASSETS_URL, PATH_VEHICLE_SHOW } from '@/core/application'
import { limitWords } from '@/utils/string'
import { getOptionByValue } from '@/utils/generic'
import {
    IVehicle,
    bodyTypes,
    fuelTypes,
    gearboxTypes,
} from '@/common/models/vehicle'

interface IVehiclesCardListProps {
    vehicles: IVehicle[]
}

const VehiclesCardList = ({ vehicles }: IVehiclesCardListProps) => {
    return (
        <React.Fragment>
            {vehicles.map((vehicle: IVehicle) => (
                <CardActionArea
                    component={Link}
                    to={`${PATH_VEHICLE_SHOW}/${vehicle.id}`}
                    key={vehicle.id}
                >
                    <Card variant={'outlined'} sx={{ display: 'flex', mb: 3 }}>
                        <CardMedia
                            component="img"
                            sx={{
                                width: 300,
                                display: {
                                    xs: 'none',
                                    sm: 'block',
                                },
                            }}
                            image={`${BASE_IMAGE_ASSETS_URL}/200x150?text=Vehicle Image`}
                            alt=""
                        />
                        <CardContent sx={{ flex: 1 }}>
                            <Typography component="h3" variant="h5">
                                £{vehicle.price.toLocaleString()}
                            </Typography>
                            <Typography component="h2" variant="h5">
                                {vehicle.make.makeName} {vehicle.model}
                            </Typography>
                            <Typography
                                component="h4"
                                variant="h6"
                                style={{
                                    fontSize: '1.25em',
                                }}
                            >
                                {vehicle.year} |{' '}
                                {
                                    getOptionByValue(
                                        vehicle.bodyType,
                                        bodyTypes
                                    )?.label
                                }{' '}
                                | {vehicle.mileage.toLocaleString()}
                                {' miles '}|{' '}
                                {
                                    getOptionByValue(
                                        vehicle.gearbox,
                                        gearboxTypes
                                    )?.label
                                }{' '}
                                |{' '}
                                {
                                    getOptionByValue(
                                        vehicle.fuelType,
                                        fuelTypes
                                    )?.label
                                }
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {limitWords(vehicle.description, 25)}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Show details...
                            </Typography>
                        </CardContent>
                    </Card>
                </CardActionArea>
            ))}
        </React.Fragment>
    )
}

export default VehiclesCardList

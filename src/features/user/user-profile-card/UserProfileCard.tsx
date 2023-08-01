// src/features/user/UserProfileCard.tsx
import React from 'react'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import PhoneIcon from '@mui/icons-material/Phone'

import { BASE_IMAGE_ASSETS_URL } from '@/core/application'
import { IUserProfile } from '@/common/models/user'
import { H3 } from '@/components/data-display'

interface UserProfileCardProps {
    user: IUserProfile
}

const UserProfileCard = ({ user }: UserProfileCardProps) => {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: 'none',
            }}
            variant="outlined"
        >
            <CardMedia
                component="div"
                sx={{
                    // 16:9
                    pt: '56.25%',
                }}
                image={`${BASE_IMAGE_ASSETS_URL}/200x160?text=Profile Image`}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <article>
                    <H3 sx={{ mb: 0 }}>{user.name}</H3>
                    <Typography
                        data-test={'job-title'}
                        variant={'subtitle1'}
                        color="text.secondary"
                        sx={{ mb: 1 }}
                    >
                        {user.title.toUpperCase()}
                    </Typography>
                    <Divider />
                    <Typography variant={'body1'} sx={{ mt: 2, mb: 3 }}>
                        {user.description}
                    </Typography>
                    <Table size="small" data-testid="team-member-contacts">
                        <TableBody>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        border: 'none',
                                        pt: 0,
                                        pb: 1,
                                        pl: 0,
                                        pr: 1,
                                    }}
                                >
                                    <PhoneIcon />
                                </TableCell>
                                <TableCell
                                    data-test="phone-number"
                                    sx={{
                                        border: 'none',
                                        pt: 0,
                                        pb: 1,
                                        px: 0,
                                    }}
                                >
                                    {user.phoneNumber}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        border: 'none',
                                        pt: 0,
                                        pb: 1,
                                        pl: 0,
                                        pr: 1,
                                    }}
                                >
                                    <PhoneIphoneIcon />
                                </TableCell>
                                <TableCell
                                    data-test="mobile-number"
                                    sx={{
                                        border: 'none',
                                        pt: 0,
                                        pb: 1,
                                        px: 0,
                                    }}
                                >
                                    {user.mobileNumber}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        border: 'none',
                                        pt: 0,
                                        pb: 1,
                                        pl: 0,
                                        pr: 1,
                                    }}
                                >
                                    <EmailIcon />
                                </TableCell>
                                <TableCell
                                    data-test="email"
                                    sx={{
                                        border: 'none',
                                        pt: 0,
                                        pb: 1,
                                        px: 0,
                                    }}
                                >
                                    {user.email}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </article>
            </CardContent>
            <CardActions sx={{ mb: 1, ml: 1, mr: 1 }}></CardActions>
        </Card>
    )
}

export default UserProfileCard

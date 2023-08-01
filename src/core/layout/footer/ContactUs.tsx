import React from 'react'
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'

import { H3 } from '@/components/data-display'

const ContactUs = () => {
    return (
        <React.Fragment>
            <H3>Contact Us</H3>

            <Table size="small" aria-label="contact us">
                <TableBody>
                    <TableRow>
                        <TableCell
                            style={{ verticalAlign: 'top' }}
                            sx={{ border: 'none' }}
                        >
                            <LocationOnIcon
                                style={{
                                    fontSize: '1.3rem',
                                }}
                            />
                        </TableCell>
                        <TableCell
                            style={{ verticalAlign: 'top' }}
                            sx={{ border: 'none' }}
                        >
                            Address
                        </TableCell>
                        <TableCell align="right" sx={{ border: 'none' }}>
                            8 Business Park
                            <br />
                            London
                            <br />
                            SW12 9RT
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{ border: 'none' }}>
                            <PhoneIcon
                                style={{
                                    fontSize: '1.3rem',
                                }}
                            />
                        </TableCell>
                        <TableCell sx={{ border: 'none' }}>Phone</TableCell>
                        <TableCell align="right" sx={{ border: 'none' }}>
                            (01234) 456-7890
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{ border: 'none' }}>
                            <EmailIcon
                                style={{
                                    fontSize: '1.3rem',
                                }}
                            />
                        </TableCell>
                        <TableCell sx={{ border: 'none' }}>Email</TableCell>
                        <TableCell align="right" sx={{ border: 'none' }}>
                            carsales@example.com
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </React.Fragment>
    )
}

export default ContactUs

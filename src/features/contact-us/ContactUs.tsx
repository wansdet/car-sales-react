import React from 'react'
import { Container, Grid } from '@mui/material'

import { H2 } from '@/components/data-display'
import {
    AddressDetails,
    ContactDetails,
    ContactUsForm,
    LocationMap,
} from '@/features/contact-us'

const ContactUs = () => {
    return (
        <Container maxWidth="lg" component="main" sx={{ pt: 16, pb: 12 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={12}>
                    <div
                        data-testid="google-maps"
                        style={{ height: '600px', width: '100%' }}
                    >
                        <LocationMap />
                    </div>
                </Grid>
                <Grid data-testid="contact-information" item xs={12} md={6}>
                    <H2 data-testid="contact-information-title">
                        Contact Information
                    </H2>
                    <Grid container spacing={0} sx={{ mt: 3 }}>
                        <Grid item xs={12} md={6}>
                            <AddressDetails />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ContactDetails />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContactUsForm />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContactUs

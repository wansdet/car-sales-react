// src/features/finance/Finance.tsx
import React from 'react'
import { Container, Grid } from '@mui/material'

import {
    FinanceCardHP,
    FinanceCardPCP,
    FinanceCardPCH,
    FinanceCardPersonalLoan,
    FinanceOptions,
    FinanceConsiderations,
} from '@/features/finance'

const Finance = () => {
    return (
        <Container maxWidth="lg" component="main" sx={{ pt: 12, pb: 12 }}>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={9}>
                    <FinanceOptions />
                    <section data-testid="finance-options">
                        <Grid container spacing={5} sx={{ mt: 5 }}>
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
                    </section>
                </Grid>
                <Grid
                    data-testid="finance-considerations"
                    item
                    xs={12}
                    sm={3}
                    sx={{ mt: 10 }}
                >
                    <FinanceConsiderations />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Finance

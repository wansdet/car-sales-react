// src/features/finance/FinanceCardPCH.tsx
import React from 'react'
import { Card, CardActions, CardContent } from '@mui/material'

import Button from '@mui/material/Button'
import { H3, Paragraph } from '@/components/data-display'

const FinanceCardPCH = () => {
    return (
        <Card
            data-testid="finance-card-pch"
            sx={{
                px: 2,
                pt: 3,
                pb: 5,
                backgroundColor: '#EEB303',
                color: 'white',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <H3 data-testid="finance-card-pch-title" variant="h6">
                    PCH/Car Leasing
                </H3>
                <Paragraph data-testid="finance-card-pch-text">
                    Affordable, Variety, Hassle-Free.
                </Paragraph>
                <ul>
                    <li>Affordable, Variety, Hassle-Free.</li>
                    <li>
                        Access to a wide range of vehicles without the long-term
                        commitment.
                    </li>
                    <li>
                        Hassle-free maintenance and no worries about vehicle
                        depreciation or resale.
                    </li>
                </ul>
            </CardContent>
            <CardActions>
                <Button
                    data-testid="finance-card-pch-button"
                    variant="contained"
                    fullWidth
                >
                    Find out more...
                </Button>
            </CardActions>
        </Card>
    )
}

export default FinanceCardPCH

// src/features/finance/FinanceCardHP.tsx
import React from 'react'
import { Card, CardActions, CardContent } from '@mui/material'

import Button from '@mui/material/Button'
import { H3, Paragraph } from '@/components/data-display'

const FinanceCardHP = () => {
    return (
        <Card
            data-testid="finance-card-hp"
            sx={{
                px: 2,
                pt: 3,
                pb: 5,
                backgroundColor: '#D81E5B',
                color: 'white',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <H3 data-testid="finance-card-hp-title" variant="h6">
                    Hire Purchase (HP)
                </H3>
                <Paragraph data-testid="finance-card-hp-text">
                    Affordable, Ownership, Flexibility.
                </Paragraph>
                <ul>
                    <li>
                        Spread the cost over time with manageable monthly
                        payments.
                    </li>
                    <li>
                        Ownership of the vehicle at the end of the agreement.
                    </li>
                    <li>
                        Flexibility to modify, sell, or keep the car before the
                        agreement ends.
                    </li>
                </ul>
            </CardContent>
            <CardActions>
                <Button
                    data-testid="finance-card-hp-button"
                    variant="contained"
                    fullWidth
                >
                    Find out more...
                </Button>
            </CardActions>
        </Card>
    )
}

export default FinanceCardHP

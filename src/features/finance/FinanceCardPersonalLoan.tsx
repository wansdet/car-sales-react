// src/features/finance/FinanceCardPersonalLoan.tsx
import React from 'react'
import { Card, CardActions, CardContent } from '@mui/material'

import Button from '@mui/material/Button'
import { H3, Paragraph } from '@/components/data-display'

const FinanceCardPersonalLoan = () => {
    return (
        <Card
            data-testid="finance-card-personal-loan"
            sx={{
                px: 2,
                pt: 3,
                pb: 5,
                backgroundColor: '#606165',
                color: 'white',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <H3 data-testid="finance-card-personal-loan-title" variant="h6">
                    Personal Loan
                </H3>
                <Paragraph data-testid="finance-card-personal-loan-text">
                    Flexibility, Ownership, Competitive Interest Rates.
                </Paragraph>
                <ul>
                    <li>
                        Flexibility to use funds for any purpose, not limited to
                        vehicle purchase.
                    </li>
                    <li>
                        Immediate ownership of the vehicle, acting as a cash
                        buyer.
                    </li>
                    <li>
                        Availability of competitive interest rates through
                        various lending institutions.
                    </li>
                </ul>
            </CardContent>
            <CardActions>
                <Button
                    data-testid="finance-card-personal-loan-button"
                    variant="contained"
                    fullWidth
                >
                    Find out more...
                </Button>
            </CardActions>
        </Card>
    )
}

export default FinanceCardPersonalLoan

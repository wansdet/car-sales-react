// src/features/finance/FinanceCardPCP.tsx
import React from 'react'
import { Card, CardActions, CardContent } from '@mui/material'

import Button from '@mui/material/Button'
import { H3, Paragraph } from '@/components/data-display'

const FinanceCardPCP = () => {
    return (
        <Card
            data-testid="finance-card-pcp"
            sx={{
                px: 2,
                pt: 3,
                pb: 5,
                backgroundColor: '#119DA4',
                color: 'white',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <H3 data-testid="finance-card-pcp-title" variant="h6">
                    Personal Contract Purchase (PCP)
                </H3>
                <Paragraph data-testid="finance-card-pcp-text">
                    Flexibility, Lower Monthly Payments, Multiple End-of-Term
                    Options.
                </Paragraph>
                <ul>
                    <li>
                        Option to return the car, purchase it, or upgrade at the
                        end of the agreement.
                    </li>
                    <li>
                        Lower monthly payments compared to traditional finance
                        options.
                    </li>
                    <li>
                        Ability to drive a newer car more frequently with PCP
                        agreements.
                    </li>
                </ul>
            </CardContent>
            <CardActions>
                <Button
                    data-testid="finance-card-pcp-button"
                    variant="contained"
                    fullWidth
                >
                    Find out more...
                </Button>
            </CardActions>
        </Card>
    )
}

export default FinanceCardPCP

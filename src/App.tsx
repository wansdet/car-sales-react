import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box, CssBaseline, ThemeOptions } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { TypographyOptions } from '@mui/material/styles/createTypography'

import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { ApplicationProvider } from '@/core/application'
import { Footer, Header } from '@/core/layout'
import { SecurityProvider } from '@/core/security'
import Home from '@/features/home/Home'
import Finance from '@/features/finance/Finance'
import { OurTeam, SignIn } from '@/features/user'
import { VehicleShow, VehiclesSearch } from '@/features/vehicles'
import { ContactUs } from '@/features/contact-us'

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        leadParagraph: true
    }
}

interface ExtendedTypographyOptions extends TypographyOptions {
    leadParagraph: React.CSSProperties
}

const theme = createTheme({
    typography: {
        leadParagraph: {
            fontSize: '1.5rem',
            fontStyle: 'italic',
        },
    } as ExtendedTypographyOptions,
} as ThemeOptions)

function App() {
    return (
        <SecurityProvider>
            <ThemeProvider theme={theme}>
                <ApplicationProvider>
                    <CssBaseline />
                    <div className="App">
                        <Header />
                        <Box className={'content'}>
                            <Routes>
                                <Route path={'/'} element={<Home />} />

                                <Route
                                    path="/vehicles/vehicle-show/:id"
                                    element={<VehicleShow />}
                                />
                                <Route
                                    path={'/used-cars'}
                                    element={<VehiclesSearch />}
                                />

                                <Route
                                    path={'/finance'}
                                    element={<Finance />}
                                />

                                <Route
                                    path={'/our-team'}
                                    element={<OurTeam />}
                                />

                                <Route
                                    path={'/contact-us'}
                                    element={<ContactUs />}
                                />

                                <Route path={'/sign-in'} element={<SignIn />} />
                            </Routes>
                        </Box>
                        <Footer />
                    </div>
                </ApplicationProvider>
            </ThemeProvider>
        </SecurityProvider>
    )
}

export default App

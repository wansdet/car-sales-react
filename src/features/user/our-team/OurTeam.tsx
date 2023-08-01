// src/features/user/OurTeam.tsx
import React from 'react'
import { Container, Grid } from '@mui/material'

import { H1, H2 } from '@/components/data-display'
import { IUserProfile } from '@/common/models/user'
import { UserProfileCard } from '@/features/user'

const managementTeam: IUserProfile[] = [
    {
        name: 'John Wick',
        title: 'CEO',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim magna ut lorem iaculis gravida.',
        phoneNumber: '01234 567890 ext 111',
        mobileNumber: '07890 123450',
        email: 'john.wick@example.com',
    },
    {
        name: 'Karen Moore',
        title: 'Finance Director',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim magna ut lorem iaculis gravida.',
        phoneNumber: '01234 567890 ext 112',
        mobileNumber: '07890 123451',
        email: 'karen.moore@example.com',
    },
    {
        name: 'Kevin Dickinson',
        title: 'Sales Director',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim magna ut lorem iaculis gravida.',
        phoneNumber: '01234 567890 ext 113',
        mobileNumber: '07890 123452',
        email: 'kevin.dickinson@example.com',
    },
]

const salesTeam = [
    {
        name: 'Emily Jones',
        title: 'Sales Executive',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim magna ut lorem iaculis gravida.',
        phoneNumber: '01234 567890 ext 114',
        mobileNumber: '07890 123453',
        email: 'emily.jones@example.com',
    },
    {
        name: 'James Smith',
        title: 'Sales Executive',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim magna ut lorem iaculis gravida.',
        phoneNumber: '01234 567890 ext 115',
        mobileNumber: '07890 123454',
        email: 'james.smith@example.com',
    },
    {
        name: 'Emma Johnson',
        title: 'Sales Executive',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim magna ut lorem iaculis gravida.',
        phoneNumber: '01234 567890 ext 116',
        mobileNumber: '07890 123455',
        email: 'emma.johnson@example.com',
    },
    {
        name: 'Jack Williams',
        title: 'Sales Executive',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim magna ut lorem iaculis gravida.',
        phoneNumber: '01234 567890 ext 117',
        mobileNumber: '07890 123456',
        email: 'jack.williams@example.com',
    },
]

const OurTeam = () => {
    return (
        <Container maxWidth="lg" component="main" sx={{ pt: 12, pb: 12 }}>
            <H1>Our Team</H1>
            <H2>Management Team</H2>
            <Grid data-testid="management-team" container spacing={5}>
                {managementTeam.map((member) => (
                    <Grid item xs={12} sm={4}>
                        <UserProfileCard user={member} />
                    </Grid>
                ))}
            </Grid>
            <H2>Sales Team</H2>
            <Grid data-testid="sales-team" container spacing={5}>
                {salesTeam.map((member) => (
                    <Grid item xs={12} sm={3}>
                        <UserProfileCard user={member} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default OurTeam

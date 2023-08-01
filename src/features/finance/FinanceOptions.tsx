// src/features/finance/FinanceOptions.tsx
import React from 'react'

import { Heading, Paragraph, Section } from '@/components/data-display'

const FinanceOptions = () => {
    return (
        <React.Fragment>
            <article>
                <Section
                    id="finance-section-introduction"
                    data-testid="finance-section-introduction"
                >
                    <header>
                        <Heading>Finance</Heading>
                    </header>
                    <Paragraph
                        variant="leadParagraph"
                        data-testid="finance-introduction-text"
                    >
                        When it comes to car finance options in the UK, there
                        are several choices available to suit different
                        preferences and circumstances. Each option has its own
                        benefits and considerations, so it's important to
                        evaluate them based on your individual needs and
                        financial situation.
                    </Paragraph>
                    <Section
                        id="finance-section-options"
                        data-testid="finance-section-options"
                    >
                        <Heading>
                            Personal Contract Purchase or Plan (PCP)
                        </Heading>
                        <Paragraph data-testid="finance-section-pcp-text">
                            PCP is a popular car finance option in the UK that
                            allows individuals to drive a new vehicle without
                            committing to purchasing it outright. With PCP, you
                            make monthly payments over a fixed term, typically
                            between two to four years, based on the difference
                            between the car's initial value and its predicted
                            future value at the end of the contract. At the end
                            of the agreement, you have three choices: return the
                            car to the finance company, pay the optional final
                            payment to own the car, or use any equity in the
                            vehicle as a deposit for a new PCP agreement.
                        </Paragraph>
                        <Heading>Hire Purchase (HP)</Heading>
                        <Paragraph data-testid="finance-section-hp-text">
                            Hire purchase is a straightforward car finance
                            option where you spread the cost of the vehicle over
                            a fixed term, typically between one to five years.
                            Unlike PCP, with HP, you pay off the entire value of
                            the car, plus interest, by making regular monthly
                            payments. Once all the payments are complete, you
                            will own the car outright. This option offers
                            budgeting simplicity, and you have the freedom to
                            modify or sell the car before the finance agreement
                            ends, with the finance company's permission.
                        </Paragraph>
                        <Heading>
                            Personal Contract Hire (PCH)/Car Leasing
                        </Heading>
                        <Paragraph data-testid="finance-section-pch-text">
                            Personal contract hire, commonly referred to as car
                            leasing, provides individuals with the opportunity
                            to drive a new vehicle for an agreed period, usually
                            between two to four years, by making fixed monthly
                            payments. With PCH, you do not own the vehicle;
                            instead, you are effectively renting it for the
                            duration of the contract. At the end of the
                            agreement, you simply return the car to the leasing
                            company, without any concerns about its resale
                            value. Car leasing offers the advantages of lower
                            monthly payments, no worries about depreciation, and
                            the ability to drive a new car every few years.
                        </Paragraph>
                        <Heading>Personal Loan</Heading>
                        <Paragraph data-testid="finance-section-personal-loan-text">
                            A personal loan from a bank is a traditional method
                            of financing a car purchase. With a personal loan,
                            you borrow a specific amount of money and repay it
                            over an agreed term, usually between one to seven
                            years, with fixed monthly payments. The loan can be
                            secured or unsecured, depending on the lender's
                            requirements. Unlike PCP or leasing, with a personal
                            loan, you own the car from the start. This option
                            offers flexibility, as you can shop around for the
                            best loan rates and negotiate the price of the
                            vehicle as a cash buyer. However, it's essential to
                            consider the interest rates and total cost of
                            borrowing when opting for a personal loan.
                        </Paragraph>
                    </Section>
                </Section>
            </article>
        </React.Fragment>
    )
}

export default FinanceOptions

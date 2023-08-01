// src/features/finance/FinanceConsiderations.tsx
import React from 'react'

import { Heading, Paragraph, Section } from '@/components/data-display'

const FinanceConsiderations = () => {
    return (
        <React.Fragment>
            <aside>
                <article>
                    <Section
                        level={2}
                        id="things-to-consider-section"
                        data-testid="finance-considerations-sction"
                    >
                        <header>
                            <Heading data-testid="finance-considerations-title">
                                Things to Consider
                            </Heading>
                        </header>
                        <Paragraph data-testid="affordability">
                            <strong>Affordability:</strong> Assess your budget
                            and determine how much you can comfortably afford to
                            pay each month. Consider not only the monthly
                            payments but also associated costs like insurance,
                            maintenance, and running expenses.
                        </Paragraph>
                        <Paragraph data-testid="deposit">
                            <strong>Deposit:</strong> Determine if you have the
                            means to provide a deposit upfront. A larger deposit
                            can lower monthly payments and overall interest
                            charges.
                        </Paragraph>
                        <Paragraph data-testid="interest-rates">
                            <strong>Interest Rates:</strong> Compare interest
                            rates offered by different lenders or finance
                            providers. Lower interest rates can save you money
                            over the term of the loan.
                        </Paragraph>
                        <Paragraph data-testid="term-length">
                            <strong>Term Length:</strong> Consider the length of
                            the finance agreement. Longer terms can result in
                            lower monthly payments, but you may end up paying
                            more in interest over time.
                        </Paragraph>
                        <Paragraph data-testid="balloon-payments">
                            <strong>Balloon Payments (PCP):</strong> If opting
                            for a PCP agreement, be aware of any balloon payment
                            required at the end of the term and ensure you have
                            a plan to meet that obligation.
                        </Paragraph>
                        <Paragraph data-testid="finance-considerations-ownership">
                            <strong>Ownership:</strong> Decide whether you
                            prefer to own the vehicle or are comfortable with
                            leasing or renting it. Ownership provides the
                            freedom to modify, sell, or keep the car without
                            restrictions.
                        </Paragraph>
                        <Paragraph data-testid="mileage-restrictions">
                            <strong>Mileage Restrictions (PCH):</strong> If
                            considering a personal contract hire or car leasing
                            option, be mindful of any mileage restrictions
                            imposed by the agreement and ensure they align with
                            your expected usage.
                        </Paragraph>
                        <Paragraph data-testid="credit-history">
                            <strong>Credit History:</strong> Understand how your
                            credit history may impact the finance options
                            available to you. A good credit score can provide
                            access to better interest rates and more favorable
                            terms.
                        </Paragraph>
                        <Paragraph data-testid="future-plans">
                            <strong>Future Plans:</strong> Consider your future
                            plans, such as potential changes in income,
                            lifestyle, or vehicle needs. Choose a finance option
                            that aligns with your long-term goals and
                            circumstances.
                        </Paragraph>
                    </Section>
                </article>
            </aside>
        </React.Fragment>
    )
}

export default FinanceConsiderations

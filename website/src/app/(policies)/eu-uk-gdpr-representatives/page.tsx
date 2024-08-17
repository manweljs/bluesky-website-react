import React from 'react'
import { BRAND_NAME, PAGE } from '@/consts';
import { Metadata } from 'next';
import s from "../Legal.module.sass";
import { PageHeading } from '@/components/ui/PageHeading';
import Wrapper from '../Wrapper';
import Footer from '@/components/Footer';

const pageTitle = PAGE.EU_UK_GDPR_REPRESENTATIVES;

export const metadata: Metadata = {
    title: `${pageTitle}  | ${BRAND_NAME}`,
};


export default function page() {

    return (
        <div className={s.policies}>
            <PageHeading content={heading.content} className={s.legal_heading} />
            <Wrapper>
                {content}
            </Wrapper>
            <Footer />
        </div>
    )
}



const heading = {
    content: {
        title: pageTitle,
        description: [],
    },
}


const content = <>
    <h2>General Data Protection Regulation (EUGDPR) &ndash; European Representative</h2>
    <p>Pursuant to Article 27 of the General Data Protection Regulation (EUGDPR), Sunshade Capital Pty Ltd trading as {BRAND_NAME} has appointed European Data Protection Office (EDPO) as its GDPR representative in the EU. You can contact EDPO regarding matters pertaining to the GDPR:</p>
    <p>by using EDPO&rsquo;s online request form:&nbsp;<a href="https://edpo.com/gdpr-data-request/">https://edpo.com/gdpr-data-request/</a></p>
    <p>by writing to EDPO at Avenue Huart Hamoir 71, 1030 Brussels, Belgium</p>
    <h2>General Data Protection Regulation (UKGDPR) &ndash; United Kingdom Representative</h2>
    <p>Pursuant to the UKGDPR, Sunshade Capital Pty Limited trading as {BRAND_NAME} has appointed EDPO UK Ltd as its UKGDPR representative in the UK. You can contact EDPO UK regarding matters pertaining to the UK GDPR:</p>
    <p>by using EDPO UK&rsquo;s online request form:&nbsp;<a href="https://edpo.com/uk-gdpr-data-request/">https://edpo.com/uk-gdpr-data-request/</a></p>
    <p>by writing to EDPO UK at 8 Northumberland Avenue, London WC2N 5BY, United Kingdom</p>
    <h2>Certificate</h2>
    <table style={{ textAlign: "center", backgroundColor: "var(--base)" }}>
        <tbody>
            <tr>
                <td colSpan={2} width="601">
                    <img src="/images/edpo.png" alt="" />
                </td>
            </tr>
            <tr>
                <td width="301">
                    <p>Avenue Huart Hamoir, 71
                        <br />
                        1030 Brussels/Belgium
                        <br />
                        privacy@edpo.brussels
                    </p>
                </td>
                <td width="301">
                    <p>8 Northumberland Avenue
                        <br />
                        London WC2N 5BY, United Kingdom
                        <br />
                        privacy@edpo.com
                    </p>
                </td>
            </tr>
            <tr>
                <td width="301">
                    <img src="/images/edpo-uk.png" alt="" style={{ width: "100%" }} />
                </td>
                <td width="301">
                    <img src="/images/edpo-eu.png" alt="" style={{ width: "100%" }} />
                </td>
            </tr>
        </tbody>
    </table>

</>
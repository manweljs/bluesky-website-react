import React from 'react'
import { BRAND_NAME, PAGE, SUPPORT_EMAIL } from '@/consts';
import { Metadata } from 'next';
import s from "../Legal.module.sass";
import { PageHeading } from '@/components/ui/PageHeading';
import Wrapper from '../Wrapper';
import Footer from '@/components/Footer';

const pageTitle = PAGE.DATA_SUBJECT_ACCESS_RIGHTS_AND_PROCEDURE;

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
    <h2>Introduction</h2>
    <p>Sunshade Capital Pty Ltd trading as {BRAND_NAME} (the Company) under the Australian Privacy Act 1988 (APA), the New Zealand Privacy Act 2020 (NZPA), General Data Protection Regulation EU 2016/679 (EUGDPR) of the European Union &amp; European Economic Area and the UK General Data Protection Regulation tailored by the Data Protection Act 2018 (UKGDPR) provides the following rights for individuals:</p>
    <ul>
        <li>The right to be informed</li>
        <li>The right of access</li>
        <li>The right to rectification</li>
        <li>The right to erasure</li>
        <li>The right to restrict&nbsp;processing</li>
        <li>The right to data portability</li>
        <li>The right to object and</li>
        <li>Rights in relation to automated decision making and profiling.</li>
    </ul>
    <h2>At A Glance</h2>
    <p>The Company achieves this by undertaking the following:</p>
    <ul>
        <li>Individuals have the right to be informed about the collection and use of their personal data. This is a key transparency requirement under the APA, NZPA, EUGDPR and UKGDPR.</li>
        <li>Provide individuals with information including: the purposes for processing their personal data, our retention periods for that personal data, and who it will be shared with. We call this &lsquo;privacy information&rsquo;.</li>
    </ul>
    <ul>
        <li>We provide privacy information to individuals at the time we collect their personal data from them.</li>
    </ul>
    <ul>
        <li>If we obtain personal data from other sources, we provide individuals with privacy information within a reasonable period of obtaining the data and no later than one month.</li>
    </ul>
    <ul>
        <li>We do not need to provide people with privacy information, such as if an individual already has the information or if it would involve a disproportionate effort to provide it to them.</li>
    </ul>
    <ul>
        <li>The information we provide to people will be concise, transparent, intelligible, easily accessible, and it will use clear and plain language.</li>
    </ul>
    <ul>
        <li>We provide privacy information to people using a combination of different techniques including layering, dashboards, and just-in-time notices.</li>
    </ul>
    <ul>
        <li>We regularly review, and where necessary, update our privacy information. We must bring any new uses of an individual&rsquo;s personal data to their attention before we start the processing.</li>
    </ul>
    <p>Getting the right to be informed correct helps us to comply with other aspects of the EUGDPR and UKGDPR and builds trust with individuals we interact with.</p>
    <h2>What We Provide</h2>
    <p>We provide individuals with all the following privacy information:</p>
    <ul>
        <li>The name and contact details of our Company.</li>
        <li>The name and contact details of our representative (if applicable).</li>
        <li>The contact details of our data protection officer (if applicable).</li>
        <li>The purposes of the processing.</li>
        <li>The lawful basis for the processing.</li>
        <li>The legitimate interests for the processing (if applicable).</li>
        <li>The categories of personal data obtained (if the personal data is not obtained from the individual it relates to).</li>
        <li>The recipients or categories of recipients of the personal data.</li>
        <li>The details of transfers of the personal data to any third countries or international organisations (if applicable).</li>
        <li>The retention periods for the personal data.</li>
        <li>The rights available to individuals in respect of the processing.</li>
        <li>The right to withdraw consent (if applicable).</li>
        <li>The right to lodge a complaint with a supervisory authority.</li>
        <li>The source of the personal data (if the personal data is not obtained from the individual it relates to).</li>
        <li>The details of whether individuals are under a statutory or contractual obligation to provide the personal data (if applicable, and if the personal data is collected from the individual it relates to).</li>
    </ul>
    <p>The details of the existence of automated decision-making, including profiling (if applicable).</p>
    <h2>When We Provide the Information</h2>
    <p>We provide individuals with privacy information at the time we collect their personal data from them.</p>
    <p>If we obtain personal data from a source other than the individual it relates to, we provide them with privacy information:</p>
    <ul>
        <li>within a reasonable of period of obtaining the personal data and no later than one month;</li>
        <li>if we plan to communicate with the individual, at the latest, when the first communication takes place; or</li>
        <li>if we plan to disclose the data to someone else, at the latest, when the data is disclosed</li>
    </ul>
    <h2>How We Provide It</h2>
    <p>We provide the information in a way that is:</p>
    <ul>
        <li>concise;</li>
        <li>transparent;</li>
        <li>intelligible;</li>
        <li>easily accessible; and</li>
        <li>uses clear and plain language.</li>
    </ul>
    <h2>Changes to the information</h2>
    <ul>
        <li>We regularly review and, where necessary, update our privacy information.</li>
        <li>If we plan to use personal data for a new purpose, we update our privacy information and communicate the changes to individuals before starting any new processing.</li>
    </ul>
    <h2><br /> Best practice &ndash; drafting the information</h2>
    <ul>
        <li>We undertake an information audit to find out what personal data we hold and what we do with it.</li>
        <li>We put ourselves in the position of the people we&rsquo;re collecting information about.</li>
        <li>We carry out user testing to evaluate how effective our privacy information is.</li>
    </ul>
    <h2>Best practice &ndash; delivering the information</h2>
    <p>When providing our privacy information to individuals, we use a combination of appropriate techniques, such as:</p>
    <ul>
        <li>a layered approach;</li>
        <li>dashboards;</li>
        <li>just-in-time notices;</li>
        <li>icons; and</li>
        <li>mobile and smart device functionalities.</li>
    </ul>
    <h2>Contact</h2>
    <p>An individual can email the Company at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with a Request for Information.</p>
    <p>The Company will process the Request for Information in line with its General Data Protection Policy.</p>

</>
import React from 'react'
import { BRAND_NAME, PAGE } from '@/consts';
import { Metadata } from 'next';
import s from "../Legal.module.sass";
import { PageHeading } from '@/components/ui/PageHeading';
import Wrapper from '../Wrapper';
import Footer from '@/components/Footer';

const pageTitle = PAGE.GENERAL_DATA_PROTECTION_POLICY;

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
    <p>In its everyday business operations Sunshade Capital Pty Ltd trading as Meta-Optimize (the Company) makes use of a variety of data about identifiable individuals, including data about:</p>
    <ul>
        <li>Current, past and prospective employees</li>
        <li>Customers and Suppliers.</li>
        <li>Users of its website and ecommerce sites i.e. Facebook.</li>
        <li>Subscribers and</li>
        <li>Other stakeholders/ interested parties.</li>
    </ul>
    <p>In collecting and using this data, the Company is subject to a variety of legislation controlling how such activities may be carried out and the safeguards that must be put in place to protect it.</p>
    <p>The purpose of this policy is to set out the relevant legislation and to describe the steps the Company is taking to ensure that it complies with it.</p>
    <p>This control applies to all systems, people and processes that constitute the Company&rsquo;s information systems, including directors, employees, suppliers and other third parties who have access to the Company&rsquo;s systems.</p>
    <h2>2. Data Protection Policy</h2>
    <h3>2.1. The General Data Protection Regulation</h3>
    <p>The Australian Privacy Act 1988 (APA), The New Zealand Privacy Act 2020 (NZPA), The European Union General Data Protection Regulation 2016 (EU GDPR) and the Data Protection Act 2018 or United Kingdom General Data Protection Regulation (UK GDPR), are the most significant pieces of legislation affecting the way the Company carries out its information processing activities.</p>
    <p>Significant fines are applicable if a breach is deemed to have occurred under the APA, NZPA, EUGDPR or UKGDPR, which are designed to protect the personal data of citizens of Australia, New Zealand, the European Union and the United Kingdom.</p>
    <p>It is the Company&rsquo;s policy to ensure that our compliance with the APA, NZPA, EUGDPR and UKGDPR and other relevant legislation is clear and demonstrable at all times.</p>
    <h3>2.2. Definitions</h3>
    <p>There are multiple definitions listed within the APA, NZPA, EUGDPR and UKGDPR and it is not appropriate to reproduce them all here. However, the most fundamental definitions with respect to this policy are as follows:</p>
    <p><em>Personal data&nbsp;</em>is defined as:</p>
    <p><em>any information relating to an identified or identifiable natural person (&lsquo;data subject&rsquo;); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person;</em></p>
    <p><em>&lsquo;processing&rsquo;&nbsp;</em>means<em>:</em></p>
    <p><em>any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction;</em></p>
    <p><em>&lsquo;controller&rsquo;&nbsp;</em>means<em>:</em></p>
    <p><em>the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data; where the purposes and means of such processing are determined by Union or Member State law, the controller or the specific criteria for its nomination may be provided for by Union or Member State law;</em></p>
    <h3>2.3. Principles Relating to Processing of Personal Data</h3>
    <p>There are a number of fundamental principles upon which the APA, NZPA EUGDPR and UKGDPR are based. These are as follows:</p>
    <ol>
        <li><em>Personal data shall be:</em></li>
    </ol>
    <ul>
        <li><em>processed lawfully, fairly and in a transparent manner in relation to the data subject&nbsp;(&lsquo;lawfulness, fairness and transparency&rsquo;);&nbsp;</em></li>
    </ul>
    <ul>
        <li><em>collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes; further processing for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes shall, not be considered to be incompatible with the initial purposes (&lsquo;purpose limitation&rsquo;);</em></li>
    </ul>
    <ul>
        <li><em>adequate, relevant and limited to what is necessary in relation to the purposes for which</em></li>
    </ul>
    <p><em>they are processed (&lsquo;data minimisation&rsquo;);</em></p>
    <ul>
        <li><em>accurate and, where necessary, kept up to date; every reasonable step must be taken to ensure that personal data that are inaccurate, having regard to the purposes for which they are processed, are erased or rectified without delay (&lsquo;accuracy&rsquo;);</em></li>
    </ul>
    <ul>
        <li><em>kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed; personal data may be stored for longer periods insofar as the personal data will be processed solely for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes subject to implementation of the appropriate technical and organisational measures required by this Regulation in order to safeguard the rights and freedoms of the data subject (&lsquo;storage limitation&rsquo;);</em></li>
    </ul>
    <ul>
        <li><em>processed in a manner that ensures appropriate security of the personal data, including protection against unauthorised or unlawful processing and against accidental loss, destruction or damage, using appropriate technical or organisational measures (&lsquo;integrity and confidentiality&rsquo;).</em></li>
    </ul>
    <ol>
        <li><em>The controller shall be responsible for, and be able to demonstrate compliance with,</em></li>
    </ol>
    <p><em>paragraph 1 (&lsquo;accountability&rsquo;).</em></p>
    <p>The Company will ensure that it complies with all of these principles both in the processing it currently carries out and as part of the introduction of new methods of processing such as new IT systems.</p>
    <h3>2.4. Rights of the Individual</h3>
    <p>The data subject also has rights under APA, NZPA, EUGDPR and UKGDPR. These consist of:</p>
    <ol>
        <li>The right to be informed</li>
        <li>The right of access</li>
        <li>The right to rectification</li>
        <li>The right to erasure</li>
        <li>The right to restrict processing</li>
        <li>The right to data portability</li>
        <li>The right to object</li>
        <li>Rights in relation to automated decision making and</li>
    </ol>
    <p>Each of these rights are supported by appropriate procedures within the Company that allow the required action to be taken within the timescales stated in the APA, NZPA, EUGDPR and UKGDPR.</p>
    <p>These timescales are shown in the following table.</p>
    <table>
        <tbody>
            <tr>
                <td width="308">
                    <p><strong>Data Subject Request</strong></p>
                </td>
                <td width="308">
                    <p><strong>Timescale</strong></p>
                </td>
            </tr>
            <tr>
                <td width="308">
                    <p>The right to be informed</p>
                </td>
                <td width="308">
                    <p>When data is collected (if supplied by data subject) or within one month (if not supplied by data subject)</p>
                </td>
            </tr>
            <tr>
                <td width="308">
                    <p>The right of access</p>
                </td>
                <td width="308">
                    <p>Without undue delay, maximum timescale one month</p>
                </td>
            </tr>
        </tbody>
    </table>
    <table>
        <tbody>
            <tr>
                <td width="308">
                    <p><strong>Data Subject Request</strong></p>
                </td>
                <td width="308">
                    <p><strong>Timescale</strong></p>
                </td>
            </tr>
            <tr>
                <td width="308">
                    <p>The right to rectification</p>
                </td>
                <td width="308">
                    <p>Without undue delay, maximum timescale one month</p>
                </td>
            </tr>
            <tr>
                <td width="308">
                    <p>The right to erasure</p>
                </td>
                <td width="308">
                    <p>Without undue delay, unless retention as a requirement by laws. Maximum timescale one month</p>
                </td>
            </tr>
            <tr>
                <td width="308">
                    <p>The right to restrict processing</p>
                </td>
                <td width="308">
                    <p>Without undue delay, maximum timescale one month</p>
                </td>
            </tr>
            <tr>
                <td width="308">
                    <p>The right to data portability</p>
                </td>
                <td width="308">
                    <p>Without undue delay, maximum timescale one month</p>
                </td>
            </tr>
            <tr>
                <td width="308">
                    <p>The right to object</p>
                </td>
                <td width="308">
                    <p>On receipt of objection</p>
                </td>
            </tr>
            <tr>
                <td width="308">
                    <p>Rights in relation to automated decision making and profiling.</p>
                </td>
                <td width="308">
                    <p>Not specified</p>
                </td>
            </tr>
        </tbody>
    </table>
    <p><em>Table 1 &ndash; Timescales for data subject requests</em></p>
    <h3>2.5. Lawfulness of Processing</h3>
    <p>There are six alternative ways in which the lawfulness of a specific case of processing of personal data may be established under the APA, NZPA, EUGDPR and UKGDPR. It is the Company&rsquo;s policy to identify the appropriate basis for processing and to document it, in accordance with the Regulation. The options are described in brief in the following sections.</p>
    <h3>2.5.1. Consent</h3>
    <p>Unless it is necessary for a reason allowable in the APA, NZPA, EUGDPR and UKGDPR, the Company will always obtain consent from a data subject to collect and process their data. In case of children below the age of 16 (a lower age may be allowable in specific EU/ UK member states) parental consent will be obtained. Transparent information about our usage of their personal data will be provided to data subjects at the time that consent is obtained and their rights with regard to their data explained, such as the right to withdraw consent. This information will be provided in an accessible form, written in clear language and free of charge.</p>
    <p>If the personal data are not obtained directly from the data subject then this information will be provided to the data subject within a reasonable period after the data are obtained and definitely within one month.</p>
    <h3>2.5.2. Performance of a Contract</h3>
    <p>Where the personal data collected and processed are required to fulfil a contract with the data subject, explicit consent is not required. This will often be the case where the contract cannot be completed without the personal data in question e.g. a delivery cannot be made without an address to deliver to.</p>
    <h3>2.5.3. Legal Obligation</h3>
    <p>If the personal data is required to be collected and processed in order to comply with the law, then explicit consent is not required. This may be the case for some data related to employment and taxation for example, and for many areas addressed by the public sector.</p>
    <h3>2.5.4. Vital Interests of the Data Subject</h3>
    <p>In a case where the personal data are required to protect the vital interests of the data subject or of another natural person, then this may be used as the lawful basis of the processing. The Company will retain reasonable, documented evidence that this is the case, whenever this reason is used as the lawful basis of the processing of personal data. As an example, this may be used in aspects of social care, particularly in the public sector.</p>
    <h3>2.5.5. Task Carried Out in the Public Interest</h3>
    <p>Where the Company needs to perform a task that it believes is in the public interest or as part of an official duty then the data subject&rsquo;s consent will not be requested. The assessment of the public interest or official duty will be documented and made available as evidence where required.</p>
    <h3>2.5.6. Legitimate Interests</h3>
    <p>If the processing of specific personal data is in the legitimate interests of the Company and is judged not to affect the rights and freedoms of the data subject in a significant way, then this may be defined as the lawful reason for the processing. Again, the reasoning behind this view will be documented.</p>
    <h3>2.6. Privacy by Design</h3>
    <p>The Company has adopted the principle of privacy by design and will ensure that the definition and planning of all new or significantly changed systems that collect, or process personal data will be subject to due consideration of privacy issues, including the completion of one or more data protection impact assessments.</p>
    <p>The data protection impact assessment will include:</p>
    <ul>
        <li>Consideration of how personal data will be processed and for what purposes</li>
        <li>Assessment of whether the proposed processing of personal data is both necessary and proportionate to the purpose(s)</li>
        <li>Assessment of the risks to individuals in processing the personal data</li>
        <li>What controls are necessary to address the identified risks and demonstrate compliance with legislation</li>
    </ul>
    <p><strong>Use of techniques such as data minimization and pseudonymisation will be considered where applicable and appropriate Contracts Involving the Processing of Personal Data</strong></p>
    <p>The Company will ensure that all new relationships it enters into that involve the processing of personal data are subject to a documented contract that includes the specific information and terms required by the APA, NZPA EUGDPR and UKGDPR.</p>
    <h3>2.8. International Transfers of Personal Data</h3>
    <p>Transfers of personal data outside the European Union and United Kingdom will be carefully reviewed prior to the transfer taking place to ensure that they fall within the limits imposed by the EUGDPR and UKGDPR. This depends partly on the UK and European Commission&rsquo;s judgement as to the adequacy of the safeguards for personal data applicable in the receiving country and this may change over time.</p>
    <p>Intra-group international data transfers will be subject to legally binding agreements referred to as Binding Corporate Rules (BCR) which provide enforceable rights for data subjects.</p>
    <h3>2.9. Data Protection Officer</h3>
    <p>A defined role of Data Protection Officer (DPO) is required under the EUGDPR and UKGDPR if an organisation is a public authority, if it performs large scale monitoring or if it processes particularly sensitive types of data on a large scale. The DPO is required to have an appropriate level of knowledge and can either be an in-house resource or outsourced to an appropriate service provider.</p>
    <p>Based on these criteria, the Company does not require a Data Protection Officer to be appointed.</p>
    <h3>2.10. Breach Notification</h3>
    <p>It is the Company&rsquo;s policy to be fair and proportionate when considering the actions to be taken to inform affected parties regarding breaches of personal data. In line with the APA, NZPA, EUGDPR and UKGDPR, where a breach is known to have occurred which is likely to result in a risk to the rights and freedoms of individuals, the relevant supervisory authority will be informed within 72 hours and the affected parties will be informed without undue delay.</p>
    <p>This will be managed in accordance with our&nbsp;<em>Data Breach Response Plan&nbsp;</em>and&nbsp;<em>Notifiable</em>&nbsp;<em>Data Breach Procedure&nbsp;</em>which sets out the overall process of handling information security incidents.</p>
    <p>Under the APA, EUGDPR and UKGDPR the relevant authority can choose to impose a range of fines of up to four percent of annual worldwide turnover or twenty million Euros, whichever is the higher, for infringements of the regulations.</p>
    <h3>2.11. Addressing Compliance to the APA, NZPA, EUGDPR and UKGDPR</h3>
    <p>The following actions are undertaken to ensure that The Company complies at all times with the accountability principle of the APA, NZPA EUGDPR and UKGDPR:</p>
    <ul>
        <li>The legal basis for processing personal data is clear and unambiguous</li>
        <li>All staff involved in handling personal data understand their responsibilities for following good data protection practice</li>
    </ul>
    <p>Training in data protection has been provided to all staff:</p>
    <ul>
        <li>Rules regarding consent are followed</li>
        <li>Routes are available to data subjects wishing to exercise their rights regarding personal data and such enquiries are handled effectively</li>
        <li>Regular reviews of procedures involving personal data are carried out</li>
        <li>Privacy by design is adopted for all new or changed systems and processes</li>
        <li>The following documentation of processing activities is recorded:</li>
        <ul>
            <li>Organisation name and relevant details</li>
            <li>Purposes of the personal data processing</li>
            <li>Categories of individuals and personal data processed</li>
            <li>Categories of personal data recipients</li>
            <li>Agreements and mechanisms for transfers of personal data to non-EU countries including details of controls in place</li>
            <li>Personal data retention schedules</li>
            <li>Relevant technical and organisational controls in place</li>
        </ul>
    </ul>
    <p>These actions are reviewed on a regular basis as part of the management process concerned with data protection.</p>
    <p>If you have any queries or concerns, please contact info@meta-optimize.com.</p>

</>
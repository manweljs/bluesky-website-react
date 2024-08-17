import React from 'react'
import { BILLING_EMAIL, BRAND_NAME, INFO_EMAIL, PAGE, SUPPORT_EMAIL } from '@/consts';
import { Metadata } from 'next';
import s from "../Legal.module.sass";
import { PageHeading } from '@/components/ui/PageHeading';
import Wrapper from '../Wrapper';
import Footer from '@/components/Footer';

const pageTitle = PAGE.TERMS_OF_SERVICE;

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
    <p>Welcome to TBC Limited trading as {BRAND_NAME} (<strong>{BRAND_NAME}).</strong></p>
    <p>We are delighted you have chosen to join us but before you start using {BRAND_NAME}&rsquo;s products and services, we need you to read and accept our Terms of Service (<strong>Terms</strong>).</p>
    <p>We have done our best to explain our Terms in a simple way, so it is straight forward as to what we expect from you and what you can expect from us.</p>
    <p>Please ensure you read all sections, as these are your legal rights and obligations. Your use of {BRAND_NAME} products and services is dependent on your acceptance of our Terms. If you cannot agree to our Terms, then you are unable to use our products and services.</p>
    <p>If you still have questions or comments after reading these terms, please <a href="/contact">contact us</a> to get in touch.</p>
    <h2>Joining and using {BRAND_NAME}</h2>
    <ol>
        <li><strong>You and {BRAND_NAME}: </strong>When we say <strong>you </strong>or <strong>your</strong>, we refer to both you and any entity or firm you are authorised to represent. When we say <strong>{BRAND_NAME}</strong>, <strong>we</strong>, <strong>our </strong>or <strong>us</strong>, we are referring to the {BRAND_NAME} entity you contract with and pay fees to.</li>
    </ol>
    <ol start={2}>
        <li><strong>Our products and services: </strong>Our <strong>products</strong> and <strong>services </strong>consist of all the products and services we provide now or in the future, including our {BRAND_NAME} solutions and support services. We make no guarantee that our products or services will operate on all web browsers you may use.</li>
        <li><strong>Creating an account: </strong>When you create an <strong>account </strong>to use our products and services and accept our Terms, you become a <strong>subscriber</strong>. The subscriber is the person or entity responsible for paying for the {BRAND_NAME} products and services.</li>
        <li><strong>People invited to use {BRAND_NAME}: </strong>An <strong>invited user beyond the subscriber </strong>is not permitted.</li>
    </ol>
    <ol start={3}>
    </ol>
    <ol start={4}>
    </ol>
    <ol start={5}>
        <li><strong>The right to use our products and services: </strong>As a subscriber we grant you the right to use our products and services. This is for as long as the subscriber continues to pay our fees, until the subscriber ceases to use our products and services, or until your access is revoked.</li>
    </ol>
    <ol start={6}>
        <li><strong>Subscriber role: </strong>The subscriber takes full responsibility for controlling how the account established is managed, and who has access to it.</li>
    </ol>
    <ol start={7}>
        <li><strong>Your responsibilities: </strong>By continuing, you promise to keep your information up to date and including a current email address. It is your responsibility to provide true, accurate and complete information and for verifying the accuracy of any information that you use from our products and services for your legal, tax and compliance obligations. It is also your responsibility to protect your username and password from being stolen or misused. Our service has minimum password standards; however, it is up to you to ensure that passwords are very strong and not easily guessable. The subscriber agrees to enable two-step authentication for all users, if available.</li>
    </ol>
    <ol start={8}>
        <li><strong>When we introduce new or revised products and services: </strong>We are always thinking about how to continuously improve {BRAND_NAME} for all users, which means we regularly expand our products and services. Additional terms might apply to new or updated products and services. If applicable, we will endeavour to let you know about the additional terms that we will post to our web site.</li>
    </ol>
    <ol start={9}>
        <li><strong>What we own: </strong>Unless otherwise stated, we own everything we have put into our products and services, excluding content owned by others or the services provided by integration to third-party providers. This includes rights to the design, compilation, and look and feel of our products and services. Rights to all copyrighted works, user guides, manuals, trademarks, designs, inventions, source code and other intellectual property are also included. You agree not to copy, distribute, modify, or make derivative works of any of our content or use any of our intellectual property rights in any way not expressly permitted in writing by us.</li>
    </ol>
    <h2>Pricing</h2>
    <ol start={10}>
        <li><strong>Trial costs: </strong>On initial sign up, you may be able to opt-in for a free trial period if we offer one, based on the terms specified at the time. If you choose to continue using our products and services after the trial, you will be required pay fees and charges. If you choose not to continue using our services following a trial, please <a href="https://meta-optimize.com/contact">contact us</a> to if you want to delete your organisation from our records.</li>
    </ol>
    <ol start={11}>
        <li><strong>{BRAND_NAME} pricing plans: </strong>Based on your use of our products and services, we require you to pay us fees (the fee) and any other fees detailed on our web site and/ or advised to you in other communication forms.</li>
    </ol>
    <p>The pricing plan consists of the Model(s) cost(s), that you have been offered. The module pricing plan may vary by region and includes information set out in the offer details and pricing page. We may update or amend the pricing plan from time to time. The terms of the pricing plan form part of these terms. If changes are made and you are a subscriber, we will make every effort to advise you.</p>
    <ol start={12}>
        <li><strong>Taxes for your use of our products and services: </strong>As the subscriber, you are responsible for paying all other external fees and taxes associated with your use of our products and services wherever levied.</li>
    </ol>
    <ol start={13}>
        <li><strong>Additional services: </strong>Additional {BRAND_NAME} services might be available, depending on where you are based and how you use our services. These additional services will incur extra implementation costs and fees.</li>
    </ol>
    <ol start={14}>
        <li><strong>Importance of timely payments: </strong>To continue accessing our products and services, all payments due to us will be processed by way of direct debit to your nominated card. To avoid delayed or missed payments, please make sure we are supplied with correct billing contact information. If we do not receive payments when due and payable, we may suspend your access and account without notice until the payment is made.</li>
    </ol>
    <ol start={15}>
        <li><strong>Other payment terms</strong>: We request that disputes are raised in writing no later than five business days following the payment date.</li>
    </ol>
    <p>The reason for the dispute is to be emailed to <a href={`mailto:${BILLING_EMAIL}`}>{BILLING_EMAIL}</a> and you agree to pay all non-disputed amounts on or before due date.</p>
    <p>You cannot offset amounts payable and if you elect to terminate services with us, you agree to pay all fees up to the date of termination.</p>
    <p>All fees and charges are invoiced and are payable in AU$ plus GST unless advise otherwise.</p>
    <h2>Data use and privacy</h2>
    <ol start={16}>
        <li><strong>Use of data: </strong>We do not own your data, however by entering or uploading your data into our services, you grant us a licence to use, control, process, copy, transmit, store, analyse and back up all data submitted. This includes personal data of yourself, your business entity and others to enable you to use our services; allow us to improve, develop and protect our services; create new services; communicate with you about your products and services; and send you information we think may be of interest to you.</li>
    </ol>
    <ol start={17}>
        <li><strong>Use of your own personal data: </strong>We take data protection seriously and respect your privacy. In addition to these terms, our AI Act Group Policy, General Data Protection Policy, Data Subject Access Rights &amp; Procedures available from our website sets out how we process your own personal data, such as your name and email address, that you enter and provide to {BRAND_NAME}.</li>
    </ol>
    <ol start={18}>
        <li><strong>Use of personal data you enter about others: </strong>Our data processing terms also apply to the personal data of others that you enter into {BRAND_NAME}. The subscriber consents to {BRAND_NAME} being the data controller and processor and confirms we have the right to access stored and process data you supply to us.</li>
    </ol>
    <ol start={19}>
        <li><strong>Anonymised statistical data:</strong> We may create anonymised statistical data from your data and usage of our services, including through aggregation. Once anonymised, we may use it for our own purposes, such as to identify business trends, to provide and improve our services, to develop new product offerings, and for other uses we communicate to you.</li>
    </ol>
    <ol start={20}>
        <li><strong>Data breach notifications: </strong>If, at any time, we suspect there has been unauthorised access to data, we will let you know and provide information about the breach. Likewise, you must inform us immediately if you suspect a breach. Depending on the nature of the breach or unauthorised access, and the location, you may be required to assist to investigate whether the unauthorised access must be reported to the contact/ individual and/or a relevant jurisdictional authority. {BRAND_NAME} has established internal procedures for acting on data breaches, and we take our requirement to comply with privacy requirements in Australia, New Zealand, Europe, and the United Kingdom seriously. If you suspect an issue has occurred, please contact our Privacy Champion at {SUPPORT_EMAIL}.</li>
    </ol>
    <h2>Confidential information</h2>
    <ol start={21}>
        <li><strong>Keeping it confidential:</strong> You may share confidential information with us, and you may become aware of confidential information about us, while using our products and services. By accepting these terms, you, and we both agree to take reasonable steps to protect the other party&rsquo;s confidential information from being accessed by unauthorised individuals. If required to do so, you or we may share each other&rsquo;s confidential information with legal or regulatory authorities. If you breach this clause, we are entitled to terminate user access and commence whatever actions are deemed necessary by {BRAND_NAME} to protect and enforce this clause, with costs being your care to pay.</li>
    </ol>
    <h2>Security</h2>
    <ol start={22}>
        <li><strong>Security safeguards: </strong>To do our part to help keep your data safe and secure, we have invested in technical, physical, and administrative safeguards. While steps have been taken to help protect your data, no method of electronic storage is completely secure, and we cannot guarantee absolute security. If there appears to be unauthorised access to your account, we will notify you and we may also restrict access to certain parts of our product and services until you verify that access was by an authorised user.</li>
    </ol>
    <ol start={23}>
        <li><strong>Account security features: </strong>To make your account more secure, we may introduce security features such as two-step authentication. Depending on your location or what services you are using, we may require you to adopt some of these security features. Where we make the use of security features optional, you are responsible (meaning we are not liable) for any consequences of not using those features. We strongly encourage you to use all security features.</li>
    </ol>
    <ol start={24}>
        <li><strong>Playing your part to secure your data: </strong>You have an important part to play in the security of your data by keeping your login details secure, not providing details for any other person to use them, and by making sure you have strong security on your own systems. If you realise there has been unauthorised use of your password or any breach of security to your account or email address linked to your account, you are required to let us know immediately. You also agree to not store personal data in free-form fields in any of {BRAND_NAME}&rsquo;s systems or services (unless it is a field explicitly asking for personal data - like a first name or a last name, bank account details, credit card details, or tax identifiers. For more information on how to keep your data secure, read our Privacy policy.</li>
    </ol>
    <ol start={25}>
        <li><strong>Debit &amp; Credit Cards: </strong>If you choose to use our product and services then all fees are payable on the date we issue you our invoice. The amount(s) payable will be debited to your nominated card on invoice date and it is your responsibility to ensure funds are available to meet the payment due.</li>
    </ol>
    <p>We do not store credit card or debit card numbers on our web site or in our data base.</p>
    <p>{BRAND_NAME} payment gate way is provided by Stripe.</p>
    <p>Stripe holds Payment Card Data Security Standards (PCI DSS) accreditation.</p>
    <p>This is the global security standard for all entities that store, process, or transmit cardholder data and/or sensitive authentication data.</p>
    <p>PCI DSS sets a baseline level of protection for consumers and helps reduce fraud and data breaches across the entire payment ecosystem.</p>
    <p>This is applicable to any organization that accepts or processes payment cards.</p>
    <p>PCI DSS compliance involves three main components:</p>
    <ul>
        <li>Handling the ingress of credit card data from customers; namely, that sensitive card details are collects and transmitted securely.</li>
        <li>Storing data securely, which is outlined in the 12 security domains of the PCI standard, such as encryption, ongoing monitoring, and security testing of access to card data and</li>
        <li>Validating annually that the required security controls are in place, which can include forms. questionnaires, external vulnerability scanning services, and third-party.</li>
    </ul>
    <h2>Apps and third-party products</h2>
    <ol start={27}>
        <li><strong>Other services: </strong>Some of our products and services, such as SMS/Text functionality, are available through other companies&rsquo; services. These companies may have additional terms and conditions and privacy notices that apply to you.</li>
        <li><strong>Third-party products: </strong>You may use data, services, and apps from other companies (<strong>third-party products</strong>) along with the use of our products and services. Any third party providing a third-party product or service is a <strong>provider </strong>and is independent of us, so it is up to you to be aware that a provider may also charge you fees in addition to what you pay us. Alternatively, if you use a third-party service, then we are entitled to invoice the subscriber for those fees.</li>
        <li><strong>Third-party terms and descriptions: </strong>Third-party products are subject to terms and conditions and privacy notices set by the providers. These include how they provider will use your data that you make available to them via {BRAND_NAME}&rsquo;s integration with the third-party. Ensure you thoroughly read and make sure you agree to their terms and conditions and understand their approach on personal and non-personal data before connecting with them. While we make reasonable efforts to check the accuracy of the descriptions of third-party products that we publish, and any associated links, we are not responsible for any representations contained in those descriptions. We do not endorse or assume any responsibility for third-party products or services and have no liability whatsoever if a third-party product or service does not perform.</li>
        <li><strong>Use of your data to connect you to third party products:</strong> We will use your personal and other data contained in {BRAND_NAME} for any connection to third-party products if you choose to use products and services provided by a third-party. Any data received as a result of that connection will be used in line with our Privacy Policy and these terms.</li>
        <li><strong>Payments to {BRAND_NAME}: </strong>To ensure you are aware, some third-party providers may pay {BRAND_NAME} a fee that may be related to referrals from {BRAND_NAME}; revenue made by the provider; or data that the providers access about you through our services with your consent.</li>
    </ol>
    <h2>Maintenance, downtime, and data loss</h2>
    <ol start={32}>
        <li><strong>Availability: </strong>We strive to maintain the availability of our products and services, and provide support, 8.30am to 5.00pm Queensland, Australia time and only on Queensland, Australia business days. On occasion, maintenance is required to be performed on our products and services, which may require a period of downtime. However, we try to minimise any such downtime, and where planned maintenance is being undertaken, we will attempt to notify you in advance but cannot guarantee it.</li>
        <li><strong>Multi-Tenant Cloud Hosting:</strong> The data you provide to us is hosted by our chosen hosting partner unless otherwise advised. Our hosting partner is a third-party provider, so the terms referenced above apply. We have no control of server up-time or when that provider decides to undertake maintenance, patches and/or improvement that in turn may affect your access to {BRAND_NAME}.</li>
    </ol>

    <p>&nbsp;{BRAND_NAME} does not guarantee server up-times and is not responsible for server outages and associated effects to the subscriber and your users.</p>
    <ol start={34}>
        <li><strong>Access issues: </strong>{BRAND_NAME} requires the internet to operate, so on occasions you might not be able to access our services and your data. This might happen for any number of reasons, at any time, and is outside of our control.</li>
    </ol>
    <ol start={35}>
        <li><strong>Data loss: </strong>When using any cloud technology, data loss is an unavoidable risk. It is your responsibility to maintain copies of your data entered into our services. {BRAND_NAME} has daily back-up procedures in place with its third-party hosting provider. This means we can recover and restore data to the prior business day if you need us to do that for you.</li>
    </ol>
    <ol start={36}>
        <li><strong>No compensation: </strong>Whatever the cause of any downtime, access issues or data loss, your only recourse is to discontinue using our products and services.</li>
    </ol>
    <ol start={37}>
        <li><strong>Problems and support: </strong>If you have a problem or require support, please <a href="https://agencyconnect.com.au/contact/#field_first_name">contact</a> us via our web site and will endeavour to reply to you within 24 hours, but we are not under any service level agreement to do so.</li>
    </ol>
    <ol start={38}>
        <li><strong>Modifications: </strong>We often release new updates, modifications and enhancements to our products and services, and in some cases discontinue features. We will endeavour to notify you when this occurs.</li>
    </ol>
    <h2>Do&rsquo;s and don&rsquo;ts</h2>
    <ol start={39}>
        <li><strong>Feedback: </strong>We appreciate receiving feedback and may use your feedback without restriction.</li>
    </ol>
    <ol start={40}>
        <li><strong>Help using our services: </strong>Guidance and support is provided to help you use our products and services. You agree to use our products and services only for lawful business purposes and in line with the instructions and guidance we provide in accordance with these Terms of Service, Australia Federal and Queensland State authorities and laws.</li>
    </ol>
    <ol start={41}>
        <li><strong>Limitations: </strong>Some of our products and services may be subject to limits.</li>
    </ol>
    <ol start={42}>
        <li><strong>No-charge: </strong>We may, on occasion, offer a product or service at no charge for a limited time &ndash; for example, a time-limited trial account. Due to the nature of these services, you use them at your own risk.</li>
    </ol>
    <ol start={43}>
        <li><strong>While we cannot cover everything here, we do want to highlight a few more examples of things you must not do:</strong></li>
        <ul>
            <li>Undermine the security or integrity of our products, services or networks.</li>
            <li>Use our products and services in any way that could impair functionality or interfere with other people&rsquo;s use.</li>
            <li>Access any system without permission.</li>
            <li>Introduce or upload anything to our products or services that includes <strong>harmful code</strong>, which means any computer code that is intended or known to be harmful, destructive, disabling or which in assist in, or enable theft of, alteration, denial service, unauthorised disclosure of destruction or corruption of data, including viruses, worms, spyware, adware, key loggers, trojans and any new threats that may be classified.</li>
            <li>Upload or share anything that may be offensive, violates any laws, or infringes on the rights of others.</li>
            <li>Modify, copy, adapt, reproduce, disassemble, decompile, reverse engineer, or extract the source code of any part of our products or services.</li>
            <li>Resell, lease, or provide our products or services in any way not expressly permitted through our services.</li>
            <li>Repackage, resell, or sublicense any data accessed through our services.</li>
            <li>Commit fraud or other illegal acts through our services.</li>
            <li>Act in a manner that is abusive or disrespectful to an {BRAND_NAME} employee, partner, or another {BRAND_NAME} customer or candidate/ employee. We will not tolerate any abuse or bullying of our {BRAND_NAME} employees in any situation and that includes interaction with our support team members.</li>
        </ul>
    </ol>
    <h2>Termination</h2>
    <ol start={44}>
        <li><strong>Product and Services cost: </strong>Our products and services are valid for the period covered by the fee paid or payable.</li>
    </ol>
    <p>You can terminate your use of our products and services at any time by providing written notice one month in advance. When you terminate, you will still need to pay all relevant fees and any other fees invoiced/to be invoiced up to and including the day of termination.</p>
    <p>To terminate your products and services, please contact us via our web site.</p>
    <ol start={45}>
        <li><strong>Termination by {BRAND_NAME}: </strong>By providing one month&rsquo;s written notice in advance, {BRAND_NAME} may choose to terminate your user access and/ or account at any time. {BRAND_NAME} may also terminate or suspend your access to all or any data immediately if:</li>
        <ul>
            <li>you breach any of these terms and do not remedy the breach within 14 days after receiving notice of the breach,</li>
            <li>you breach any of these terms and the breach cannot be remedied,</li>
            <li>you fail to pay your fees on due date detailed in our invoice, or</li>
            <li>you or your business become insolvent, your business goes into liquidation or has a receiver or manager appointed over any of its assets, you make any arrangement with your creditors or become subject to any similar insolvency event in any jurisdiction.</li>
        </ul>
    </ol>
    <p>If we terminate your use of our products and services, you have an obligation to return and/or securely destroy our confidential information. We may ask you to sign a notice confirming your compliance with this request and you agree to sign the certificate if requested to do so. You also agree to abide by the confidentiality clauses in our Terms apply after termination.</p>
    <ol start={46}>
        <li><strong>No refunds: </strong>If you terminate your use of our products and services or {BRAND_NAME} terminates them in accordance with these Terms, no refund is due to you.</li>
    </ol>
    <ol start={47}>
        <li><strong>Retention of your data: </strong>Once the use of our products and services are terminated by you or us, your data is archived, and the data submitted or created by you is only available upon request. This data is retained for a period of time consistent with our data retention policy and requirements under law, We retain data in case you need it as part of your record retention obligations, however if you wish, you can contact us to have your data removed completely.</li>
    </ol>
    <h2>Liability and indemnity</h2>
    <ol start={48}>
        <li><strong>You indemnify us: </strong>You indemnify us against all losses, costs (including legal costs), expenses, demands or liability that we incur arising out of, or in connection with, a third-party claim against us relating to your use of our products and services or any third-party product (except as far as we are at fault).</li>
    </ol>
    <ol start={49}>
        <li><strong>Disclaimer of warranties: </strong>Our products and services and all third-party products are made available to you on an &ldquo;as is&rdquo; basis. Subject to the exclusion in section 56, we disclaim all warranties, express or implied, including any implied warranties of non-infringement, merchantability, and fitness for a particular purpose.</li>
    </ol>
    <ol start={50}>
        <li><strong>Limitation of liability: </strong>Other than liability that we cannot exclude or limit by law, our liability to you in connection with our products and services or these terms, in contract, tort (including negligence) or otherwise, is limited as follows:</li>
        <ul>
            <li>We have no liability arising from your use of our products and services for any loss of revenue or profit, loss of goodwill, loss of customers, loss of capital, loss of anticipated savings, legal, tax or accounting compliance issues, damage to reputation, loss in connection with any other contract, or indirect, consequential, incidental, punitive, exemplary, or special loss, damage, or expense.</li>
            <li>For loss or corruption of your data, our liability will be limited to taking reasonable steps to try and recover that data from our available backups.</li>
        </ul>
    </ol>
    <p>Our total aggregate liability to you in any circumstances is limited to the total amount you paid us for your Model(s) cost in the 1 month immediately preceding the date on which the claim giving rise to the liability arose.</p>
    <h2>Disputes</h2>
    <ol start={51}>
        <li><strong>Dispute resolution: </strong>Most disputes and concerns can be resolved quickly and to everyone&rsquo;s satisfaction by contacting our support team. If we are unable to resolve your complaint to your satisfaction (or if we have not been able to resolve a dispute, we have with you after attempting to do so informally), you and we agree to resolve those disputes through binding arbitration or small claims court instead of in courts of general jurisdiction. You and we agree that any dispute must be brought in the parties&rsquo; individual capacity and not as a plaintiff or class member in any purported class or representative proceeding.</li>
    </ol>
    <h2>Host employer obligations</h2>
    <ol start={52}>
        <li>As a host employer, you have a legal obligations to comply with Federal and State legislation when agreeing to take on an {BRAND_NAME} labour hire employee. You obligations include but are not limited to the following:</li>
        <ul>
            <li>clarify your workplace health and safety (WHS) duties and provide them with your policy and /or other procedures documents and information.</li>
            <li>identify and manage risks to health and safety</li>
            <li>match the labour hire worker to tasks</li>
            <li>complete induction and training</li>
            <li>supervise and monitor the health and safety of people at your workplace.</li>
        </ul>
    </ol>
    <ol start={53}>
        <li>In addition, you need to take the following actions:</li>
        <ul>
            <li>treat labour hire workers, apprentices, and trainees as though they are your own workers in providing and maintaining a safe working environment and conditions</li>
            <li>define the job, tasks or roles that labour hire workers will perform</li>
            <li>identify hazards associated with the work, and assess and control risks</li>
            <li>identify the skills and knowledge (including any licensing and certification requirements) that labour hire workers need in order to do their work safely</li>
            <li>advise {BRAND_NAME} of the job requirements, work environment, organisational arrangements, health and safety risks associated with the work, and the skills and knowledge required for the work.</li>
            <li>verify that the workers selected have the necessary skills and knowledge to perform their work safely</li>
            <li>clarify who will provide any equipment, including personal protective equipment (PPE), to enable the workers to do the work safely and ensure that equipment brought into your workplace meets health and safety standards</li>
            <li>conduct workplace inductions for all labour hire workers, including new workers or new tasks.</li>
        </ul>
    </ol>
    <ol start={54}>
        <li>Provide any other training that enables them to perform their work safely. Consult with workers in relation to health and safety issues and establish an open communication process and encourage labour hire workers to participate in workplace consultative arrangements.</li>
    </ol>
    <ol start={55}>
        <ul>
            <li>Introduce labour hire workers to health and safety staff and the person with the WHS management responsibility in the area where they will work </li>
            <li>verify that labour hire workers understand the WHS requirements in your workplace</li>
            <li>provide adequate supervision to monitor whether the work is being conducted safely</li>
            <li>encourage labour hire workers and the labour hire agency to participate in hazard management specific to the labour hire workers&rsquo; work</li>
            <li>inform the agency if there is a change to your workplace that impacts on the labour hire workers. Do not transfer labour hire workers to other tasks until the agency responds. You should provide any further training, instruction or information to the labour hire workers as necessary Workplace Health and Safety Queensland</li>
            <li>encourage labour hire workers to maintain contact with the labour hire agency</li>
            <li>cooperate with the labour hire agency to help meet its legal WHS duties</li>
            <li>allow the labour hire agency to have access to the workplace and relevant documents to enable them to perform a workplace safety assessment.</li>
        </ul>
    </ol>
    <ol start={56}>
        <li>If a workplace accident or issue occurs you will immediately notify {BRAND_NAME} You also irrevocably undertake to provide us with all information we require and to assist us with out charge to manage and related issues.</li>
    </ol>
    <ol start={57}>
        <li>To pay us all statutory employments related charges and cost, which may be varied without notice.</li>
    </ol>
    <ol start={58}>
        <li>Our workers have rights and entitlements and are protected by a number of State and Commonwealth laws. This means you agree they are entitled to but not limited by the following:</li>
        <ul>
            <li>be paid at least the minimum wage and in accordance with applicable Awards/ EBA&rsquo;s and National Employment Standards.</li>
            <li>a safe work place.&nbsp;</li>
            <li>Reasonable hours, rest breaks and time off work.</li>
            <li>information on the terms and conditions of employment.&nbsp;</li>
            <li>Be treated fairly and and free from discrimination</li>
            <li>suitable accommodation if it is provided to you.</li>
            <li>safe transport if it is provided to you.</li>
            <li>be a member of a union if they want to.</li>
            <li>No be unfairly dismissed or stood down from working.</li>
        </ul>
    </ol>
    <h2>Important housekeeping</h2>
    <ol start={59}>
        <li><strong>No professional advice: </strong>{BRAND_NAME} is not a professional services firm of any sort, and therefore is not in the business of giving any kind of professional advice or recommendations. We may provide you with information we think could be helpful or useful in running your business, however this should not be seen as a substitute for professional advice. We are not liable for your use of the information or your use of our product and services in that way.</li>
    </ol>
    <ol start={60}>
        <li><strong>Events outside our control: </strong>We do our best to control what can be controlled. We are not liable to you for any failure or delay in performance of any of our obligations under these terms arising out of any event or circumstance beyond our reasonable control.</li>
    </ol>
    <ol start={61}>
        <li><strong>Notices: </strong>Any notice you send to {BRAND_NAME} must be sent to our support team ({SUPPORT_EMAIL}), and any notices we send to you will be sent to your email address provided through your user account.</li>
    </ol>
    <ol start={62}>
        <li><strong>Exclusion: </strong>There may be, in some places, non-excludable warranties, guarantees or other rights provided by law (<strong>non-excludable guarantees</strong>). These terms do not exclude, restrict, or modify them &ndash; they still apply. We are bound only by the express promises made in these terms, except for non-excludable guarantees and other rights you have that we cannot exclude. Our liability for breach of a non-excludable guarantee is limited, at our option, to either replacing or paying the cost of replacing the relevant product or service (unless the non-excludable guarantee says otherwise).</li>
    </ol>
    <ol start={63}>
        <li><strong>Export limitations: </strong>You must not use our products or services in violation of any export or trade embargo laws that apply to you.</li>
    </ol>
    <ol start={64}>
        <li><strong>Blocking your access, disabling your access, or refusing to process a payment: </strong>As {BRAND_NAME} sites are global, different laws may apply in different countries that may restrict our relationship with you. If we believe there is a risk - like a potential breach of a law or regulation - associated with you, your company, or a payment, we may block your access, terminate your user account, or refuse to process a payment. Examples include transactions where the payment is from a sanctioned person or country; or where we reasonably believe there is a legal or regulatory risk, or a risk of loss being suffered by us or our customers or partners. You promise that you are not located in a sanctioned country and are not on a sanctioned persons list. We may also block users from a country if we cannot receive payments from that country and we may take any of these actions without notice.</li>
    </ol>
    <ol start={65}>
        <li><strong>Relationship between the parties; assignment: </strong>Nothing in these terms is to be construed as constituting a partnership, joint venture, employment or agency relationship between you and us. As we deem appropriate, {BRAND_NAME} may assign these terms - or any of our rights or obligations in these terms - to another {BRAND_NAME} entity. {BRAND_NAME} entities are the companies controlled by or under common control with Sunshade Capital Pty Limited (an Australian company with registration Australian Business Number 54 612 233 637).</li>
    </ol>
    <ol start={66}>
        <li><strong>Changes to these terms: </strong>We will make every effort to let you know if, or when, we decide to change these terms of use. We usually endeavour to provide you with 30 days&rsquo; notice of material changes before they become effective, unless immediate changes are required for reasons, we do not have control over. Notification will be by email or by posting a visible notice through our products and services. If a change is not material, we may not notify you. If you find a modified term unacceptable, you may terminate your user account by giving the standard advance notice to {BRAND_NAME}.</li>
    </ol>
    <ol start={67}>
        <li><strong>Enforcement of terms: </strong>If there is any part of these terms that either one of us is unable to enforce, we will ignore that part, however everything else will remain enforceable.</li>
    </ol>
    <ol start={68}>
        <li><strong>Interpretation: </strong>It is important to note that words like &lsquo;include&rsquo; and &lsquo;including&rsquo; are not words of limitation and where anything is within our discretion, we mean our sole discretion.</li>
    </ol>
    <ol start={69}>
        <li><strong>{BRAND_NAME} contracting entities; law and venue: </strong>Our contracting entities are listed in the table below along with what law and venue apply in any dispute between you and us:</li>
    </ol>
    <table width={653}>
        <tbody>
            <tr>
                <td width={81}>
                    <p><strong>Edition</strong></p>
                </td>
                <td width={99}>
                    <p><strong>Entity</strong></p>
                </td>
                <td width={149}>
                    <p><strong>Address</strong></p>
                </td>
                <td width={119}>
                    <p><strong>Registration</strong></p>
                </td>
                <td width={89}>
                    <p><strong>Law</strong></p>
                </td>
                <td width={117}>
                    <p><strong>Venue</strong></p>
                </td>
            </tr>
            <tr>
                <td width={81}>
                    <p><strong>Australia</strong></p>
                </td>
                <td width={99}>
                    <p>Sunshade Capital Pty Limited</p>
                </td>
                <td width={149}>
                    <p>Tower 2, Level 3, Suite 306, 55 Plaza Parade, Maroochydore, Queensland, 4558</p>
                </td>
                <td width={119}>
                    <p>54 612 233 637</p>
                </td>
                <td width={89}>
                    <p>Queensland, Australia</p>
                </td>
                <td width={117}>
                    <p>Maroochydore, Queensland, Australia</p>
                </td>
            </tr>
        </tbody>
    </table>
    <h2>Contact us</h2>
    <p>If you would like to contact us to discuss our products or services, you can do so by using one of the following methods.</p>
    <ul>
        <li>Web site: Via out Contact Us page.</li>
        <li>Email: Send us an email to <a href={`mailto:${INFO_EMAIL}`}>{INFO_EMAIL}</a></li>
        <li>Mail: Post your correspondence to us at P O Box 688, Mooloolaba, Queensland, 4558, Australia.</li>
        <li>Phone: Give us a call between 8.30am &ndash; 5.00pm Queensland, Australia time on +61 7 3040 2098.</li>
    </ul>

</>

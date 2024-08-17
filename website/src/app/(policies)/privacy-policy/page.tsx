import React from 'react'
import { BRAND_NAME, INFO_EMAIL, PAGE, SUPPORT_EMAIL } from '@/consts';
import { Metadata } from 'next';
import s from "../Legal.module.sass";
import { PageHeading } from '@/components/ui/PageHeading';
import Wrapper from '../Wrapper';
import Footer from '@/components/Footer';

const pageTitle = PAGE.PRIVACY_POLICY;

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
    <p>The Privacy Act 1988 requires entities bound by the Australian Privacy Principles to have a Privacy Policy.</p>
    <p>This Privacy Policy (&ldquo;<strong>Policy</strong>&rdquo;) sets out how Sunshade Capital Pty Ltd trading as {BRAND_NAME} (ABN: TBC) (&ldquo;<strong>{BRAND_NAME}&rdquo;</strong>) handles your personal information.</p>
    <p>The specific legal obligations of {BRAND_NAME} when collecting and handling your personal information are outlined in:</p>
    <ol>
        <li>The Privacy Act 1988 (<strong>Privacy Act</strong>) and the Australian Privacy Principles found in the Privacy Act.</li>
        <li>The New Zealand Privacy Act 2020 (<strong>NZPA</strong>).</li>
        <li>The General Data Protection Regulation EU 2016/679 (<strong>EUGDPR</strong>) of the European Union and European Economic Area and</li>
        <li>The UK General Data Protection Regulation tailored by the Data Protection Act 2018 (<strong>UKGDPR</strong>).</li>
    </ol>
    <p>For the purposes of the EUGDPR and UKGDPR, {BRAND_NAME} is the &ldquo;Controller&rdquo; and &ldquo;Processor&rdquo; for the personal information you provide, unless otherwise stated.</p>
    <p>{BRAND_NAME} is not required to appoint a Data Protection Officer, so any enquiries about our use of your personal data should be sent by email to <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL} </a>or by writing to P O Box 688, Mooloolaba, Queensland, 4557, Australia.</p>
    <p>We may revise this Policy from time to time by updating our Policy. The revised Policy will take immediate effect when it is posted on our website or distributed through our communication channels.</p>
    <h2>Overview</h2>
    <p>{BRAND_NAME} collects, holds, uses, controls, processes, and discloses personal information to carry out {BRAND_NAME} activities, services, and functions under the Privacy Act, NZPA, EUGDPR and UKGDPR.</p>
    <p>These functions, services or activities include, but may not limited to the provision of a cloud recruitment technology platform that allows &ldquo;<strong>you</strong>&rdquo;, &ldquo;<strong>your</strong>&rdquo;, &ldquo;<strong>user</strong>&rdquo;, &ldquo;<strong>registered user</strong>&rdquo; to:</p>
    <ol>
        <li>Create your user account and log in credentials to access {BRAND_NAME} products and services available on our web site.</li>
        <li>Maintain your personal details for example name, address, contact numbers, email address, password and other details associated with your user profile, including sensitive personal individual data.</li>
        <li>Upload and download records to/ from your user profile.</li>
        <li>De-activate your user profile and</li>
        <li>Establish and maintain your privacy settings.</li>
        <li>Search for job vacancies and at apply for one or more jobs, noting if you apply for a job vacancy, {BRAND_NAME} does not guarantee you will be selected or appointed to the job.</li>
    </ol>
    <p>{BRAND_NAME} also collects personal information through our website, technology applications and social networking services such as Whats App, Facebook, Instagram, Linkedin and Twitter.</p>
    <p>{BRAND_NAME} uses this information to improve our website and technology applications and to receive feedback from the community.</p>
    <h2>What is Personal Information?</h2>
    <p>Personal information means information or an opinion about an identified individual, or an individual who is reasonably identifiable:</p>
    <ol>
        <li>Whether the information or opinion is true or not; and</li>
        <li>Whether the information or opinion is recorded in a material form or not.</li>
    </ol>
    <h2>Whose Personal Information Do We Collect?</h2>
    <p>We collect personal information from individuals who are connected to {BRAND_NAME} operations and activities &ndash; including, but not limited to candidates, employees, clients, users, and service providers, to name but a few.</p>
    <h2>How Do We Collect Your Personal Information?</h2>
    <p>Where possible, we will collect your personal information directly from you. This may be in person (for example, where you attend a meeting or an event), on the telephone or via email (for example, if you contact {BRAND_NAME} by phone or email) or online when you register and interact with the {BRAND_NAME} cloud recruitment technology platform or via our website www.{BRAND_NAME}.ai.</p>
    <p>We may also obtain personal information from third parties such as contractors and list vendors. If we collect personal information about you from a third party and it is unclear that you have consented to the disclosure of your personal information to us, we will take reasonable steps to contact you and ensure that you are aware of the circumstances surrounding the collection and purposes for which we collected your personal information.</p>
    <h2>Why Do We Collect Your Personal Information?</h2>
    <p>We collect your personal information for a number of purposes, including, but not limited to:</p>
    <ol>
        <li><strong>Marketing:</strong>&nbsp;Communicate with you about our products, services, campaigns, and events.</li>
        <li><strong>Job Application(s):</strong>&nbsp;To assess your job application submitted from time to time.</li>
        <li><strong>Other:</strong>&nbsp;Communicate with you in relation to our operations, activities, and objectives, to verify your identity, to improve and evaluate our programs, services, and marketing and to comply with relevant laws.</li>
    </ol>
    <p>Where we collect your personal information for a specific purpose not outlined above, we will endeavour to provide you with a collection notice which explains the primary purpose and any related secondary purposes for which we are collecting your personal information.</p>
    <h2>Other Sensitive Information</h2>
    <p>As part of administering our services, we may collect other information and other sensitive information. Sensitive information includes the following type of information: racial or ethnic origin; political opinions; membership of a political association; religious beliefs or associations; philosophical beliefs; memberships; sexual orientation; genetic information; biometric information; biometric templates.</p>
    <p>We will limit the collection of sensitive information to the minimum amount required to perform our services and when collecting you will be required to provide us with your &ldquo;explicit consent&rdquo;.</p>
    <h2>What Happens If You Don&rsquo;t Provide All This Information?</h2>
    <p>If you do not provide some or all of the personal information requested, we may not be able to offer you our services or provide you with information about our causes, events, programs, projects, products, or services.</p>
    <h2>Using a Pseudonym or Engaging With Us Anonymously</h2>
    <p>Where practicable, you will be given the opportunity to engage with us on an anonymous basis or using a pseudonym. If the purpose of your registration on our web site to is apply for a job advertised, then this option is not available.</p>
    <h2>Website Usage Information and HTTP Cookies</h2>
    <p>A cookie is a small piece of data (text file) that a website or technology application &ndash; when visited by a user &ndash; asks your browser to store on your device in order to remember information about you, such as your language preference or login information. Those cookies are set by us and called first-party cookies.</p>
    <p>We also use third-party cookies &ndash; which are cookies from a domain different than the domain of the website you are visiting &ndash; for our advertising and marketing efforts. More specifically, we use cookies and other tracking technologies for the following purposes:</p>
    <h2>Strictly Necessary Cookies</h2>
    <p>These cookies are necessary for the website and technology applications to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. &nbsp; &nbsp;You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do store any personally identifiable information.</p>
    <table>
        <tbody>
            <tr>
                <td width="201">
                    <p><strong>Cookie</strong></p>
                </td>
                <td width="201">
                    <p><strong>Description</strong></p>
                </td>
                <td width="201">
                    <p><strong>Opt-Out Link</strong></p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>WordPress_sec</p>
                </td>
                <td width="201">
                    <p>This WordPress cookie stores account details and is limited to the admin access section.</p>
                </td>
                <td width="201">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>Wfwaf-authcookie</p>
                </td>
                <td width="201">
                    <p>This cookie is only used for website admins to perform a capability check of the user before WordPress has been loaded.</p>
                </td>
                <td width="201">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>XSRF-Token</p>
                </td>
                <td width="201">
                    <p>An anti-forgery token to prevent CSRF attack. It&rsquo;s included in X-XSRF-TOKEN header in every AJAX requests.</p>
                </td>
                <td width="201">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>.AspNet.ExternalCookie</p>
                </td>
                <td width="201">
                    <p>The cookie contains information of the authenticated user which received from the SSO system. This information contains user&rsquo;s given name, family name and roles.</p>
                </td>
                <td width="201">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>.AspNet.ApplicationCookie</p>
                </td>
                <td width="201">
                    <p>The cookie contains information of the user who visits the site, such as TenantId, UserId, Name, ContactId.</p>
                </td>
                <td width="201">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>_RequestVerificationToken</p>
                </td>
                <td width="201">
                    <p>An anti-forgery token to prevent CSRF attack when submiting forms.</p>
                </td>
                <td width="201">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>ASP.NET_SessionId</p>
                </td>
                <td width="201">
                    <p>ASP.Net_SessionId is a cookie which is used to identify the user session on the server. The session being an area on the server which can be used to store data in between http requests.</p>
                </td>
                <td width="201">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>Abp.Localization.CulutureName</p>
                </td>
                <td width="201">
                    <p>The system uses it to determine the current language in every web request and sets the&nbsp;<strong>current thread&rsquo;s culture (and UI culture)</strong>.</p>
                </td>
                <td width="201">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>HSID, SSID, APISID, SAPISID</p>
                </td>
                <td width="201">
                    <p>HSID, SSID, APISID and SAPISID cookies enable Google to collect user information for videos hosted by YouTube.</p>
                </td>
                <td width="201">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>.ASPXAUTH</p>
                </td>
                <td width="201">
                    <p>&nbsp;determines if a user is authenticated</p>
                </td>
                <td width="201">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>CurrentUserDateTime</p>
                </td>
                <td width="201">
                    <p>Stores date time of user</p>
                </td>
                <td width="201">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>__stripe_*</p>
                </td>
                <td width="201">
                    <p>to&nbsp;provide fraud prevention of stripe</p>
                </td>
                <td width="201">
                    <p>N/A</p>
                </td>
            </tr>
        </tbody>
    </table>
    <h2>Performance Cookies</h2>
    <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our web site or technology applications. They help us to know which pages are the most and least popular and see how visitors move around the web site &amp; technology applications. &nbsp; &nbsp;All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site and will not be able to monitor its performance.</p>
    <table>
        <tbody>
            <tr>
                <td width="201">
                    <p><strong>Cookies</strong></p>
                </td>
                <td width="201">
                    <p><strong>Description</strong></p>
                </td>
                <td width="201">
                    <p><strong>Opt-Out Link</strong></p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>_HPVN</p>
                </td>
                <td width="201">
                    <p>This Microsoft MSN cookie helps to ensure proper functioning of the website.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>_gat</p>
                </td>
                <td width="201">
                    <p>This Google Analytics cookie collects information on how visitors use our site. We use this information to understand how our visitors use the site, and how we can improve the website and user experience.</p>
                </td>
                <td width="201">
                    <p>https://policies.google.com/technologies/cookies?hl=en</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>_ga</p>
                </td>
                <td width="201">
                    <p>This Google Analytics cookie collects information on how visitors use our site. We use this information to understand how our visitors use the site, and how we can improve the website and user experience.</p>
                </td>
                <td width="201">
                    <p>https://policies.google.com/technologies/cookies?hl=en</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>_gcl_au</p>
                </td>
                <td width="201">
                    <p>This Google Tag Manager cookie stores and tracks conversions across the website.</p>
                </td>
                <td width="201">
                    <p>https://policies.google.com/technologies/cookies?hl=en</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>_gid</p>
                </td>
                <td width="201">
                    <p>This Google Analytics cookie collects information on how visitors use our site. We use this information to understand how our visitors use the site, and how we can improve the website and user experience.</p>
                </td>
                <td width="201">
                    <p>https://policies.google.com/technologies/cookies?hl=en</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>Wp-settings-4</p>
                </td>
                <td width="201">
                    <p>This cookie is used for admins of the WordPress website to customise the view of the admin interface.</p>
                </td>
                <td width="201">
                    <p>https://en-au.wordpress.org/about/privacy/cookies/</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>Wp-settings-time-4</p>
                </td>
                <td width="201">
                    <p>This cookie is used for admins of the WordPress website to customise the view of the admin interface.</p>
                </td>
                <td width="201">&nbsp;</td>
            </tr>
            <tr>
                <td width="201">
                    <p>WordPress_logged_in</p>
                </td>
                <td width="201">
                    <p>This cookie is used for admins of the WordPress website to customise the view of the admin interface.</p>
                </td>
                <td width="201">&nbsp;</td>
            </tr>
            <tr>
                <td width="201">
                    <p>_lscache_vary</p>
                </td>
                <td width="201">
                    <p>This cookie is used for admins of the WordPress site and stores login data.</p>
                </td>
                <td width="201">&nbsp;</td>
            </tr>
            <tr>
                <td width="201">
                    <p>WordPress_test_cookie</p>
                </td>
                <td width="201">
                    <p>This cookie is used to determine if the website visitor&rsquo;s browser supports cookies.</p>
                </td>
                <td width="201">
                    <p>https://en-au.wordpress.org/about/privacy/cookies/</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>_clck</p>
                </td>
                <td width="201">
                    <p>This cookie is installed by Microsoft Clarity to store information about how visitors use the website.</p>
                </td>
                <td width="201">
                    <p>https://privacy.microsoft.com/en-us/privacystatement</p>
                </td>
            </tr>
        </tbody>
    </table>
    <h2>Targeting Cookies</h2>
    <p>These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. &nbsp; &nbsp;They do not store directly personal information but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.</p>
    <table>
        <tbody>
            <tr>
                <td width="201">
                    <p><strong>Cookies</strong></p>
                </td>
                <td width="201">
                    <p><strong>Description</strong></p>
                </td>
                <td width="201">
                    <p><strong>Opt-Out Link</strong></p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>MR</p>
                </td>
                <td width="201">
                    <p>This cookie collects user action information for analytics purposes on the Bing advertising network.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>WLS</p>
                </td>
                <td width="201">
                    <p>This cookie helps us to target and track performance of advertising campaigns on the Bing advertising network.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>OIDI</p>
                </td>
                <td width="201">
                    <p>This cookie helps us to target and track performance of advertising campaigns on the Bing&nbsp; advertising network.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>_RwBf</p>
                </td>
                <td width="201">
                    <p>This cookie helps us to track the effectiveness of advertising campaigns on the Bing advertising network.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>SRCHUSR</p>
                </td>
                <td width="201">
                    <p>This cookie allows us to serve relevant advertisements to visitors across the Microsoft Bing network.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>ipv6</p>
                </td>
                <td width="201">
                    <p>This cookie helps us to target and track performance of advertising campaigns on the Bing&nbsp; advertising network.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>OIDR</p>
                </td>
                <td width="201">
                    <p>This cookie helps us to target and track performance of advertising campaigns on the Bing advertising network.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>BFBUSR</p>
                </td>
                <td width="201">
                    <p>This cookie helps us to target and track performance of advertising campaigns on the Bing advertising network.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>_SS</p>
                </td>
                <td width="201">
                    <p>This cookie tracks and allows us to understand the effectiveness of advertising campaigns across the Microsoft Bing advertising network.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>_EDGE_S</p>
                </td>
                <td width="201">
                    <p>This cookie helps us to target and track performance of advertising campaigns on the Bing advertising network.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>SRCHD</p>
                </td>
                <td width="201">
                    <p>This cookie allows us to serve relevant advertisements to visitors across the Microsoft Bing network.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>MUID</p>
                </td>
                <td width="201">
                    <p>This cookie is used widely by Microsoft as a unique user ID. This Bing cookie enables tracking by synchronising the ID across many Microsoft domains.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>SRCHUID</p>
                </td>
                <td width="201">
                    <p>This cookie allows us to serve relevant advertisements to visitors across the Microsoft Bing network.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>SerpPWA</p>
                </td>
                <td width="201">
                    <p>This cookie helps us to target and track performance of advertising campaigns on the Bing advertising network.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>_uetmsclkid</p>
                </td>
                <td width="201">
                    <p>This cookie tracks conversions on the Microsoft Bing advertising network</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>ABDEF</p>
                </td>
                <td width="201">
                    <p>This cookie is used by the Bing advertising network for advertising tracking purposes.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>_uetsid</p>
                </td>
                <td width="201">
                    <p>This is a tracking cookie used by Microsoft Bing advertising to allow us to engage with a user that has previously visited our website.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>_uetvid</p>
                </td>
                <td width="201">
                    <p>This is a tracking cookie used by Microsoft Bing advertising to allow us to engage with a user that has previously visited our website.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>SRCHHPGUSR</p>
                </td>
                <td width="201">
                    <p>This cookie helps us to track the effectiveness of advertising campaigns on the Bing advertising network.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>NAP</p>
                </td>
                <td width="201">
                    <p>This Microsoft cookie contains an encrypted version of each user&rsquo;s country, ZIP code, age, gender, language and occupation, if known, based on their Microsoft profile.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>_fbp</p>
                </td>
                <td width="201">
                    <p>This cookie helps us to provide the most relevant advertising across Facebook.</p>
                </td>
                <td width="201">
                    <p>https://www.facebook.com/policies/cookies</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>_fbc</p>
                </td>
                <td width="201">
                    <p>This cookie helps us to provide the most relevant advertising across Facebook.</p>
                </td>
                <td width="201">
                    <p>https://www.facebook.com/policies/cookies</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>Mp_</p>
                </td>
                <td width="201">
                    <p>This Mixpanel cookie provides us with data on website traffic</p>
                </td>
                <td width="201">
                    <p>https://mixpanel.com/legal/privacy-policy/</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>OID</p>
                </td>
                <td width="201">
                    <p>This cookie is used as an identifier for an object in Microsoft&rsquo;s identity system.</p>
                </td>
                <td width="201">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>ANON</p>
                </td>
                <td width="201">
                    <p>This cookie helps us to target and track performance of advertising campaigns on the Bing advertising network.</p>
                </td>
                <td width="201">
                    <p><a href="https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy">https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</a></p>
                </td>
            </tr>
            <tr>
                <td width="201">
                    <p>__Secure-3PSIDCC</p>
                </td>
                <td width="201">
                    <p>Cookie Provider: google.com. Targeting cookie. Used by for targeting purposes to build a profile of the website visitor&rsquo;s interests in order to show relevant &amp; personalised Google advertising</p>
                </td>
                <td width="201">
                    <p>https://www.google.com/</p>
                </td>
            </tr>
        </tbody>
    </table>
    <p>{BRAND_NAME} has enabled plug-in technology that enables you to manage all bar Strictly Necessary cookie preferences.</p>
    <h2>Why We Collect Information From You</h2>
    <p>We collect information from you to for the following, but limited to:</p>
    <ul>
        <li>Provide, operate, optimise, and maintain our website, system administration and security.</li>
        <li>Handle enquiries and requests and provide you with information and access to our services or resources.</li>
        <li>Process the registration and or/ job application form that you submitted via our website.</li>
        <li>Schedule a meeting.</li>
        <li>Negotiate and execute contractual documents.</li>
        <li>Carry out our obligations arising from contracts entered in to between us and our clients.</li>
        <li>Perform our role as Data Controller and Processor under the EUGDPR and UKGDPR.</li>
        <li>Perform administrative duties.</li>
        <li>Seek your views or comments on the services we provide.</li>
        <li>Compile aggregated statistics about the usage of our website and better understand the preferences of our clients and contacts.</li>
        <li>Carry out research and development to improve our services.</li>
        <li>Notify you of changes to our services.</li>
        <li>Provide you with our e-newsletter.</li>
        <li>Send information for marketing purposes.</li>
        <li>Carry out other legitimate business purposes, as well as other lawful purposes about which we will notify contacts, visitors, and clients.</li>
    </ul>
    <h2>Legal Basis for Processing</h2>
    <p>Our legal basis for processing the Personal Data described above will depend on the Personal Data concerned and on the specific context in which we process it. We primarily rely on four legal bases to process your Personal Data:</p>
    <ol>
        <li>Where you have given us valid consent to use your Personal Data in certain ways, we will rely on your consent. This includes situations where we will obtain your consent prior to sending your information for the purposes of handling your requests regarding the use of your Personal Data.</li>
        <li>We process Personal Data when it is necessary for us to do so in order to provide our services, pursuant to their instructions and in accordance with our Terms of Service that are available on our website.</li>
        <li>In certain cases, we may process your Personal Data where it is necessary in our legitimate interests, where those legitimate interests are not overridden by your rights and freedoms. This includes direct marketing, usage statistics and analytics to better understand how to use our website so that we can improve our services.</li>
        <li>In some cases, we may also have a legal obligation to process your Personal Data. If we ask you to provide Personal Data to comply with a legal requirement, we will make this clear at the relevant time and inform you on whether the provision of your Personal Data is mandatory or not (as well as of the possible consequences if you do not provide your Personal Data).</li>
    </ol>
    <h2>How Long We Keep Your Information</h2>
    <p>We review our retention periods for Personal Data on a regular basis. We will hold your Personal Data in our systems only for as long as is necessary for the relevant activity, or as long as is set out in any relevant contract, after which time it will be destroyed, unless we are legally required to hold some types of information to fulfil our statutory obligations.</p>
    <h2>Who Has Access To Your&nbsp;Information?</h2>
    <p>We will not share your Personal Data with any third parties for the purposes of direct marketing or otherwise sell or rent your Personal Data to third parties.</p>
    <p>We may share your Personal Data to third parties in the following circumstances or as otherwise described in this Privacy Policy:</p>
    <ul>
        <li>With your consent or pursuant to your instructions.</li>
        <li>To consultants, subcontractors and other service providers who need access to such information to carry out work on our behalf or to assist us in the provision of our website and other business-related functions such as website analytics.</li>
        <li>As part of a duty to disclose or share your Personal Data in order to comply with a legal obligation, for example, by a court order, or for the purposes of prevention of fraud or other crime, or to enforce or apply our Terms of Service or to protect the rights, property, or safety of our clients.</li>
    </ul>
    <p>When we use third party service providers, we only disclose the Personal Data that is necessary to deliver the service and we have a contract in place that requires them to keep your information secure and to keep it for no longer than necessary for the purposes of completing the tasks and providing the services to you on our behalf.</p>
    <h2>Your Rights In Relation to Your Personal Data</h2>
    <p>You have the following rights:</p>
    <ul>
        <li><strong>Right to withdraw your consent</strong></li>
    </ul>
    <p>If we have asked for your consent to process your Personal Data, you may withdraw that consent at any time.</p>
    <ul>
        <li><strong>Right of access</strong></li>
    </ul>
    <p>You can ask us what information we hold about you, and you can ask for copies of your Personal Data.</p>
    <ul>
        <li><strong>Right to Rectification</strong></li>
    </ul>
    <p>You can ask us to correct your Personal Data&nbsp;if it is inaccurate or to complete if it is incomplete.</p>
    <ul>
        <li><strong>Right of erasure</strong></li>
    </ul>
    <p>You have the right to ask us to delete your Personal Data&nbsp;in certain circumstances (for example, if we no longer need your Personal Data, if you initially consented to the use of your Personal Data but have now withdrawn your consent, if you have objected to the use of your Personal Data and your interests outweigh our interests)</p>
    <ul>
        <li><strong>Right to restrict the processing</strong></li>
    </ul>
    <p>In certain circumstances, you have the right to ask us to stop using your Personal Data for a period of time (for example, if you believe we are not doing so lawfully).</p>
    <ul>
        <li><strong>Right to object to the processing</strong></li>
    </ul>
    <p>You have a right to object to the processing of your Personal Data where we rely on our legitimate interests to process your Personal Data.</p>
    <ul>
        <li><strong>Right to data portability</strong></li>
    </ul>
    <p>You have the right to ask that we transfer the Personal Data that you shared with us to another provider or that we give you a copy in a machine-readable format so that you can transfer it to another provider.</p>
    <h2>How You Can Access and Update Your Information</h2>
    <p>The accuracy of your information is important to us. If you change your e-mail address, or if any of the other information we hold is inaccurate or out of date, please send us an e-mail to {SUPPORT_EMAIL} or write to us at P O Box 688, Mooloolaba, Queensland, 4557, Australia.</p>
    <h2>Security Precautions In Place To Protect The Loss, Misuse Or Alteration Of Your Information</h2>
    <p>When you provide us with Personal Data, we take steps to ensure that it&rsquo;s treated securely.</p>
    <p>Non-sensitive details (such as, for example, your e-mail address, etc.) are transmitted normally over the Internet, and this can never be guaranteed to be 100% secure. As a result, while we strive to protect your Personal Data, we cannot guarantee the security of any information you transmit to us, and you do so at your own risk. Once we receive your information, we make our best effort to ensure its security on our systems.</p>
    <h2>Transferring Your Information Outside of Australia and the European Economic Area</h2>
    <p>As part of our services, the information that you provide us with may be transferred to countries outside of Australia and the European Economic Area (EEA), which includes all EU countries and non-EU countries Iceland, Liechtenstein, and Norway. By way of example, this may happen for purposes related to your requests to exercise your rights under the EUGDPR and UKGDPR. These countries may not have equivalent data protection laws to the EU/ UK or benefit from an adequacy decision by the EU/ UK Commission. By submitting your Personal Data, you&rsquo;re agreeing to this transfer and processing. If we transfer your information outside of the EEA in this way, we will take necessary steps to ensure that appropriate security measures are taken with the aim of ensuring that your privacy rights continue to be protected as outlined in this Policy.</p>
    <p>If you use our services while you are outside the EEA, your information may be transferred outside the EEA in order to provide you with those services.</p>
    <h2>Children</h2>
    <p>{BRAND_NAME} products and services are not directed at children under the age of 16. We do not knowingly solicit or collect personal information from children under the age of 16.</p>
    <p>If a child under the age of 16 wants to register on our cloud technology platform the parent/ guardian of that child must provide us with written authority and their proof of identity.</p>
    <h2>Opting Out Of Direct Marketing Communications</h2>
    <p>Where we use your personal information to send you marketing and promotional information by for example post, email, or telephone, we will provide you with an opportunity to opt-out of receiving such information. By electing not to opt-out, we will assume we have your implied consent to receive similar information and communications in the future. We will always ensure that our opt-out notices are clear, conspicuous, and easy to initiate.</p>
    <h2>Who Does {BRAND_NAME} Disclose Your Personal Information To?</h2>
    <p>We may need to disclose your personal information to other parties or associated group companies in order to carry out our activities. This may include:</p>
    <ol>
        <li><strong>Business Providers:</strong>&nbsp;Professionals and/or businesses that provide support services to us.</li>
        <li><strong>Researchers:</strong>&nbsp;To conduct research.</li>
        <li><strong>Third Parties for Marketing:</strong>&nbsp;We may provide your contact details to contact you with information that may be of interest to you. From time to time, we may participate in data collectives where we share your personal information (other than sensitive information) with other organisations.</li>
        <li><strong>Contractors and Service Providers:&nbsp;</strong>Who perform services on our behalf, such as mailing houses, printers, information technology services providers (including offshore cloud hosting/ computing service providers), database contractors and telemarketing agencies.</li>
    </ol>
    <p>Wherever we propose to disclose your personal information to a third party not outlined above, we will endeavour to provide you with a collection notice which explains the circumstances in which we might disclose your personal information.</p>
    <h2>Cross-border Disclosures Of Your Information</h2>
    <p>We use cloud data hosting facilities and third party service providers to assist us with providing our goods and services. As a result, your personal information may be transferred to, and stored at, a destination outside Australia, New Zealand, the EU, UK, and EEA, including but not limited to New Zealand, Netherlands, China, Singapore, Hong Kong, Ireland, Canada, United States of America and the United Kingdom.</p>
    <p>Personal information may also be processed by staff or by other third parties operating outside Australia who work for us or for one of our suppliers, agents, or partners. We take such steps as are necessary in the circumstances to ensure that any overseas third-party service providers we engage are aware of the Privacy Act and Australian Privacy Principles, NZPA, EUGDPR and UK GDPR including through contractual arrangements where this is possible.</p>
    <p>If your personal information is collected using our services, you have as a result consented to the disclosure, transfer, storing or processing of your personal information outside of Australia. You also acknowledge and understand that by providing such consent that we will not be required to take such steps as are reasonable in the circumstances to ensure such third parties comply with the Privacy Act and the Australian Privacy Principles.</p>
    <h2>Where Is Your Personal Information Stored?</h2>
    <p>We take reasonable steps to protect all of the personal information we hold from misuse, interference, and loss, and from unauthorised access, modification, or disclosure. Your personal information will be stored on a password protected electronic database, which may be on our database, a database maintained by a cloud hosting service provider or other third party database storage or server provider. Backups of electronic information are written to drives which are stored with our hosting partner of choice.</p>
    <p>Hard copy information is generally stored in our office(s), which are secured to prevent entry by unauthorised people. Any personal information not actively being used is archived, usually after 5 years, with a third party provider of secure archiving services.</p>
    <p>Where personal information is stored with a third party, we have arrangements which require those third parties to maintain the security of the information. We take reasonable steps to protect the privacy and security of that information, but we are not liable for any unauthorised access or use of that information. Your personal information will stay on the database indefinitely until you advise you would like it removed unless we de-identify it or destroy it earlier in accordance with privacy law requirements.</p>
    <h2>Access To Your Personal Information</h2>
    <p>We will, upon your written request, and subject to applicable privacy laws, provide you with access to your personal information that is held by us. However, we request that you identify, as clearly as possible, the type(s) of information requested.</p>
    <p>We will deal with your request in writing to provide access to your personal information within 30 days and you agree we may charge you our reasonable costs incurred in supplying you with access to this information.</p>
    <p>Your rights to access personal information are not absolute and privacy laws dictate that we are not required to grant access in certain circumstances such as where:</p>
    <ol>
        <li>Access would pose a serious threat to the life, safety, or health of any individual or to public health or public safety.</li>
        <li>Access would have an unreasonable impact on the privacy of other individuals.</li>
        <li>The request is frivolous or vexatious.</li>
        <li>Denying access is required or authorised by a law or a court or tribunal order.</li>
        <li>Access would be unlawful, or</li>
        <li>Access may prejudice commercial negotiations, legal proceedings, enforcement activities or appropriate action being taken in respect of a suspected unlawful activity or serious misconduct.</li>
    </ol>
    <p>If we refuse to grant you access to your personal information, we will provide you with reasons for that decision (unless it is unreasonable to do so) and the avenues available for you to complain about the refusal.</p>
    <h2>Updating Your Personal Information</h2>
    <p>You may ask us to update, correct or delete the personal information we hold about you at any time. We will take reasonable steps to verify your identity before granting access or making any corrections to or deletion of your information.</p>
    <p>We have obligations to take reasonable steps to correct the personal information we hold when we are satisfied that it is inaccurate, out- of-date, incomplete, irrelevant, or misleading for the purpose for which it is held.</p>
    <p>If you require access to, or wish to update your personal information, please contact our Privacy Champion.</p>
    <p><strong>Email:</strong> <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
    <p><strong>Postal:</strong>&nbsp;P O Box 688, Mooloolaba, Queensland, 4557, Australia</p>
    <h2>Your Debit or Credit Cards</h2>
    <p>We do not store credit card or debit card numbers on our web site or in our data base.</p>
    <p>{BRAND_NAME} payment gate way is provided by Stripe.</p>
    <p>Stripe holds Payment Card Data Security Standards (PCI DSS) accreditation.</p>
    <p>This is the global security standard for all entities that store, process, or transmit cardholder data and/or sensitive authentication data. PCI DSS sets a baseline level of protection for consumers and helps reduce fraud and data breaches across the entire payment ecosystem.</p>
    <p>This is applicable to any organization that accepts or processes payment cards.</p>
    <p>PCI DSS compliance involves three main components:</p>
    <ul>
        <li>Handling the ingress of credit card data from customers; namely, that sensitive card details are collects and transmitted securely.</li>
        <li>Storing data securely, which is outlined in the 12 security domains of the PCI standard, such as encryption, ongoing monitoring, and security testing of access to card data and</li>
        <li>Validating annually that the required security controls are in place, which can include forms. questionnaires, external vulnerability scanning services, and third-party</li>
    </ul>
    <h2>European and United Kingdom Union General Data Protection Regulations</h2>
    <p>If you are a resident of the European Union or United Kingdom for the purposes of the EUGDPR and UKGDPR the following applies to you.</p>
    <p>{BRAND_NAME} is a data controller and processor for the purposes of the EUGDPR and UKGDPR and by you consenting to this Privacy Policy {BRAND_NAME} is able to processes your Personal Data in accordance with this Privacy Policy.</p>
    <p>In providing our products and services to you, {BRAND_NAME} may make use of a number of automated processes using your Personal Data and your activity on our Site as tracked by us, in order to provide more tailored and relevant services to you such as providing recommended to you through email communication, and on the Site or within our Apps.</p>
    <p>{BRAND_NAME} may also use such data in automated processes aimed at providing more tailored and relevant services to advertisers, such as:</p>
    <ul>
        <li>an approachability signal which indicates you being approachable or amenable to being approached about a particular service opportunity.</li>
    </ul>
    <p>In addition to your rights set out above, you may:</p>
    <ul>
        <li>update or rectify any of the Personal Data that we hold about you, in the manner described in the &ldquo;Updating Your Information&rdquo; paragraph above.</li>
        <li>deactivate your account by navigating to your setting page.</li>
        <li>withdraw your consent to {BRAND_NAME} use of your Personal Information as described in this Privacy Policy by deleting your account. This will also delete all the Personal Data about you which we hold. This can be done by emailing {SUPPORT_EMAIL}</li>
        <li>request that Meta-Optimize:</li>
        <ol>
            <li>provides you with a copy of the Personal Data {BRAND_NAME} holds about you in a portable and machine readable form; or.</li>
            <li>share your Personal Data with a nominated third party;</li>
        </ol>
    </ul>
    <p>You may request that from us by contacting us using any of the methods set out in the &ldquo;Contact Us&rdquo; paragraph below.</p>
    <p>Should you have any concerns in relation to {BRAND_NAME} collection and/or processing of your Personal Data, then in addition to the process set out in the &ldquo;Complaints and Contact Us&rdquo; about privacy and the {BRAND_NAME} website&ldquo; set out above (including the right to complain to the Office of the Australian Information Commissioner), you have the right to complain to a supervisory authority (within the meaning of the UKGDPR and UKGDPR).</p>
    <h2>General Data Protection Regulation (EUGDPR) &ndash; European Representative</h2>
    <p><em>Pursuant to Article 27 of the General Data Protection Regulation (GDPR), Sunshade Capital Pty Ltd has appointed European Data Protection Office (EDPO) as its EU GDPR representative in the EU. You can contact EDPO regarding matters pertaining to the GDPR:</em></p>
    <p><em>&ndash;&nbsp;by using EDPO&rsquo;s online request form:&nbsp;</em><a href="https://edpo.com/gdpr-data-request/"><em>https://edpo.com/gdpr-data-request/</em></a></p>
    <p><em>&ndash;&nbsp;by writing to EDPO at Avenue Huart Hamoir 71, 1030 Brussels, Belgium.</em></p>
    <h2>General Data Protection Regulation (UKGDPR) &ndash; United Kingdom Representative</h2>
    <p><em>Pursuant to the UKGDPR, Sunshade Capital Pty Ltd has appointed EDPO UK Ltd as its UKGDPR representative in the UK. You can contact EDPO UK regarding matters pertaining to the UK GDPR:</em></p>
    <p><em>-by using EDPO UK&rsquo;s online request form:&nbsp;</em><a href="https://edpo.com/uk-gdpr-data-request/"><em>https://edpo.com/uk-gdpr-data-request/</em></a></p>
    <p><em>-by writing to EDPO UK at 8 Northumberland Avenue, London WC2N 5BY, United Kingdom</em></p>
    <h2>Complaints &amp; Contact Us</h2>
    <p>If you want to contact us, have any queries, or would like to make a complaint in relation to our Policy or the manner in which we handle your personal information, please contact our Privacy Champion at.</p>
    <p><strong>Email:</strong> <a href={`mailto:${INFO_EMAIL}`}> {INFO_EMAIL}</a></p>
    <p><strong>Postal:</strong>&nbsp;P O Box 688, Mooloolaba, Queensland, 4557, Australia.</p>
    <p><strong>Phone:</strong> <a href="tel:+61730402098">+61 7 3040 2098</a></p>
    <p>We endeavour to respond to complaints and queries within thirty days of their receipt.</p>
    <p>If you are dissatisfied with our response, you may refer the matter to the Australian Information Privacy Commissioner (see&nbsp;<a href="http://www.oaic.gov.au/">www.oaic.gov.au</a>).</p>
    <p>If you are an EU or UK individual, then in addition to above, you have the right to complain direct to our EU or UK representative or direct to the EU or UK Supervisory Authority.</p>
    <p>If you are New Zealand individual, then in addition to above, you have the right to complain direct the New Zealand Privacy Commissioner.</p>
</>

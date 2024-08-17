import React from 'react'
import { BRAND_NAME, PAGE, SUPPORT_EMAIL } from '@/consts';
import { Metadata } from 'next';
import s from "../Legal.module.sass";
import { PageHeading } from '@/components/ui/PageHeading';
import Wrapper from '../Wrapper';
import Footer from '@/components/Footer';

const pageTitle = PAGE.COOKIE_POLICY;

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
    <h2>Cookie Policy</h2>
    <p>This policy document specifies how Sunshade Capital Pty Ltd trading as {BRAND_NAME} (referred to as &ldquo;the company&rdquo;) and its management ensures its Cookies Policy is transparent to web site users and is available for review on our web site.</p>
    <p>In this policy we use the term &ldquo;cookies&rdquo; to refer to cookies and other similar technologies covered by:</p>
    <ol>
        <li>The Privacy Act 1988 (<strong>Privacy Act</strong>) and in particular in the Australian Privacy Principles found in that Act.</li>
        <li>The New Zealand Privacy Act 2020 (<strong>NZPA</strong>).</li>
        <li>The General Data Protection Regulation EU 2016/679 (<strong>EUGDPR</strong>) of the European Union and European Economic Area and</li>
        <li>The UK General Data Protection Regulation tailored by the Data Protection Act 2018 (<strong>UKGDPR</strong>).</li>
    </ol>
    <h2>What is a cookie?</h2>
    <p>A cookie is a small piece of data that a website asks your browser to store on your computer or mobile device.</p>
    <p>The cookie allows the website to &ldquo;remember&rdquo; your actions or preferences over time.</p>
    <p>Most Internet browsers support cookies; however, users can set their browsers to decline certain types of cookies or specific cookies. Further, users can delete cookies at any time.</p>
    <h2>Why do we use cookies?</h2>
    <p>We use cookies to learn how you interact with our content and to improve your experience when visiting our website(s) or technology applications. For example, some cookies remember your language or preferences so that you do not have to repeatedly make these choices when you visit one of our websites. Additionally, cookies allow us to serve you specific content, such as videos on our website(s). We may employ the learnings of your behaviour on our website(s) to serve you with targeted advertisements on third-party website(s) in an effort to &ldquo;re-market&rdquo; our products and services to you.</p>
    <h2>What types of cookies do we use?</h2>
    <p><strong>First-Party and Third-Party Cookies</strong></p>
    <p>We use both first-party and third-party cookies on our website.</p>
    <p>First-party cookies are cookies issued from the <a href={`https://${BRAND_NAME}.ai`}>{BRAND_NAME}.ai</a> domain that are generally used to identify language and location preferences or render basic site functionality.</p>
    <p>Third-party cookies belong to and are managed by other parties, such as the Company&rsquo;s business partners or service providers. These cookies may be required to render certain forms, such as the submission of a Contact Us, or to allow for some advertising outside of the Company&rsquo;s website.</p>
    <p><strong>Session Cookies</strong></p>
    <p>Session cookies are temporary cookies that are used to remember you during the course of your visit to the website, and they expire when you close the web browser.</p>
    <p><strong>Persistent Cookies</strong></p>
    <p>Persistent cookies encompass all cookies that remain on your hard drive until you erase them, or your browser does, depending on the cookie&rsquo;s expiration date. Persistent cookies have an expiration date written into their code, but the duration can vary. According to ePrivacy Directive, they should not last longer than 12 months, but in practise, they could remain on your device much longer if you do not take any action.</p>
    <p>Cookies are used to remember your preferences within the website and remain on your desktop or mobile device even after you close your browser or restart your computer. We use these cookies to analyse user behaviour to establish visit patterns so that we can improve our website functionality for you and others who visit our website(s). These cookies also allow us to measure the effectiveness of our site functionality and marketing.</p>
    <h2>How are third party cookies used?</h2>
    <p>For some of the functions within our websites we use third party suppliers, for example, when you visit a page with videos embedded from or links to YouTube. These videos or links (and any other content from third party suppliers) may contain third party cookies, and we encourage you to consult the privacy policies of these third party vendors on their websites for information regarding their use of cookies.</p>
    <h2>How do I reject and delete cookies?</h2>
    <p>You can choose to reject or block all or specific types of cookies set by virtue of your visit to the Company&rsquo;s website by clicking on the cookie preferences on our website(s). You can change your preferences for the websites and/or the websites of any third party suppliers by changing your browser settings. Please note that most browsers automatically accept cookies. Therefore, if you do not wish cookies to be used, you may need to actively delete or block the cookies. If you reject the use of cookies, you will still be able to visit our websites but some of the functions may not work correctly.</p>
    <p>You may also visit&nbsp;<a href="http://www.allaboutcookies.org/">www.allaboutcookies.org</a>&nbsp;for details on how to delete or reject cookies and for further information on cookies generally. By using our website without deleting or rejecting some or all cookies, you agree that we can place those cookies that you have not deleted or rejected on your device.</p>
    <h2>Types of Cookies, Provenance &amp; Purpose</h2>
    <p>In general, there are three different ways to classify cookies: what purpose they serve, how long they endure, and their provenance.</p>
    <h2>Duration</h2>
    <ul>
        <li><strong>Session cookies&nbsp;&ndash;</strong>&nbsp;These cookies are temporary and expire once you close your browser (or once your session ends).</li>
        <li><strong>Persistent cookies&nbsp;&mdash;&nbsp;</strong>This category encompasses all cookies that remain on your hard drive until you erase them, or your browser does, depending on the cookie&rsquo;s expiration date. All persistent cookies have an expiration date written into their code, but their duration can vary. According to the ePrivacy Directive, they should not last longer than 12 months, but in practice, they could remain on your device much longer if you do not take action.</li>
    </ul>
    <h2>Provenance</h2>
    <ul>
        <li><strong>First-party cookies&nbsp;&mdash;</strong>&nbsp;As the name implies, first-party cookies are put on your device directly by the website you are visiting.</li>
        <li><strong>Third-party cookies</strong>&nbsp;&mdash; These are the cookies that are placed on your device, not by the website you are visiting, but by a third party like an advertiser or an analytic system.</li>
    </ul>
    <h2>Purpose</h2>
    <ul>
        <li><strong>Strictly necessary cookies</strong>&nbsp;&mdash; These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site. Cookies that allow web shops to hold your items in your cart while you are shopping online are an example of strictly necessary cookies. These cookies will generally be first-party session cookies. While it is not required to obtain consent for these cookies, what they do and why they are necessary should be explained to the user.</li>
        <li><strong>Preferences cookies</strong>&nbsp;&mdash; Also known as &ldquo;functionality cookies,&rdquo; these cookies allow a website to remember choices you have made in the past, like what language you prefer, what region you would like weather reports for, or what your user name and password are so you can automatically log in.</li>
        <li><strong>Statistics cookies</strong>&nbsp;&mdash; Also known as &ldquo;performance cookies,&rdquo; these cookies collect information about how you use a website, like which pages you visited, and which links you clicked on. None of this information can be used to identify you. It is all aggregated and, therefore, anonymized. Their sole purpose is to improve website functions. This includes cookies from third-party analytics services as long as the cookies are for the exclusive use of the owner of the website visited.</li>
        <li><strong>Marketing cookies</strong>&nbsp;&mdash; These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad. These cookies can share that information with other organizations or advertisers. These are persistent cookies and almost always of third-party provenance.</li>
    </ul>
    <p>These are the main ways of classifying cookies, although there are cookies that will not fit neatly into these categories or may qualify for multiple categories.</p>
    <p><strong>EUGDPR &amp; UKGDPR</strong></p>
    <p>EU GDPR Recital 30 and UKGDPR Article 4(1) mentions cookies as &ldquo;Natural persons may be associated with online identifiers provided by their devices, applications, tools, and protocols, such as internet protocol addresses, cookie identifiers or other identifiers such as radio frequency identification tags. This may leave traces which, in particular when combined with unique identifiers and other information received by the servers, may be used to create profiles of the natural persons, and identify them.&rdquo;</p>
    <p>This is stating that cookies, insofar as they are used to identify users, qualify as personal data and are therefore subject to the GDPR. Companies do have a right to process their users&rsquo; data as long as they receive consent or if they have a<a href="https://ec.europa.eu/info/law/law-topic/data-protection/reform/rules-business-and-organisations/legal-grounds-processing-data/grounds-processing/what-does-grounds-legitimate-interest-mean_en"> legitimate interest</a>.</p>
    <h2>Cookies Compliance</h2>
    <p>To comply with the regulations governing cookies under the APA, NZPA, EUGDPR, UKGDPR and the ePrivacy Directive the Company undertakes the following:</p>
    <ul>
        <li>Receives users&rsquo; consent before you use any cookies&nbsp;<strong>except</strong>&nbsp;strictly necessary cookies.</li>
        <li>Provides accurate and specific information about the data each cookie tracks and its purpose in plain language before consent is received.</li>
        <li>Documents and stores consent received from users.</li>
        <li>Allow users to access your service even if users refuse to allow the use of certain cookies and</li>
        <li>Make it as easy for users to withdraw their consent as it was for them to give their consent in the first place.</li>
    </ul>
    <h2>Cookies used by the Company</h2>
    <p>Our Company uses the following cookies. This list may change at the Company&rsquo;s discretion and without notice being provided.</p>
    <h2>Strictly Necessary Cookies</h2>
    <table>
        <tbody>
            <tr>
                <td width="200">
                    <p><strong>Cookie</strong></p>
                </td>
                <td width="200">
                    <p><strong>Description</strong></p>
                </td>
                <td width="200">
                    <p><strong>Opt-Out Link</strong></p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>WordPress_sec</p>
                </td>
                <td width="200">
                    <p>This WordPress cookie stores account details and is limited to the admin access section.</p>
                </td>
                <td width="200">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>Wfwaf-authcookie</p>
                </td>
                <td width="200">
                    <p>This cookie is only used for website admins to perform a capability check of the user before WordPress has been loaded.</p>
                </td>
                <td width="200">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>XSRF-Token</p>
                </td>
                <td width="200">
                    <p>An anti-forgery token to prevent CSRF attack. It&rsquo;s included in X-XSRF-TOKEN header in every AJAX requests.</p>
                </td>
                <td width="200">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>.AspNet.ExternalCookie</p>
                </td>
                <td width="200">
                    <p>The cookie contains information of the authenticated user which received from the SSO system. This information contains user&rsquo;s given name, family name and roles.</p>
                </td>
                <td width="200">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>.AspNet.ApplicationCookie</p>
                </td>
                <td width="200">
                    <p>The cookie contains information of the user who visits the site, such as TenantId, UserId, Name, ContactId.</p>
                </td>
                <td width="200">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>_RequestVerificationToken</p>
                </td>
                <td width="200">
                    <p>An anti-forgery token to prevent CSRF attack when submiting forms.</p>
                </td>
                <td width="200">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>ASP.NET_SessionId</p>
                </td>
                <td width="200">
                    <p>ASP.Net_SessionId is a cookie which is used to identify the user session on the server. The session being an area on the server which can be used to store data in between http requests.</p>
                </td>
                <td width="200">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>Abp.Localization.CulutureName</p>
                </td>
                <td width="200">
                    <p>The system uses it to determine the current language in every web request and sets the&nbsp;<strong>current thread&rsquo;s culture (and UI culture)</strong>.</p>
                </td>
                <td width="200">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>HSID, SSID, APISID, SAPISID</p>
                </td>
                <td width="200">
                    <p>HSID, SSID, APISID and SAPISID cookies enable Google to collect user information for videos hosted by YouTube.</p>
                </td>
                <td width="200">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>.ASPXAUTH</p>
                </td>
                <td width="200">
                    <p>&nbsp;determines if a user is authenticated</p>
                </td>
                <td width="200">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>CurrentUserDateTime</p>
                </td>
                <td width="200">
                    <p>Stores date time of user</p>
                </td>
                <td width="200">
                    <p>N/A</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>__stripe_*</p>
                </td>
                <td width="200">
                    <p>to&nbsp;provide fraud prevention of stripe</p>
                </td>
                <td width="200">
                    <p>N/A</p>
                </td>
            </tr>
        </tbody>
    </table>
    <h2>Performance Cookies</h2>
    <table>
        <tbody>
            <tr>
                <td width="200">
                    <p><strong>Cookies</strong></p>
                </td>
                <td width="200">
                    <p><strong>Description</strong></p>
                </td>
                <td width="200">
                    <p><strong>Opt-Out Link</strong></p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>_HPVN</p>
                </td>
                <td width="200">
                    <p>This Microsoft MSN cookie helps to ensure proper functioning of the website.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>_gat</p>
                </td>
                <td width="200">
                    <p>This Google Analytics cookie collects information on how visitors use our site. We use this information to understand how our visitors use the site, and how we can improve the website and user experience.</p>
                </td>
                <td width="200">
                    <p>https://policies.google.com/technologies/cookies?hl=en</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>_ga</p>
                </td>
                <td width="200">
                    <p>This Google Analytics cookie collects information on how visitors use our site. We use this information to understand how our visitors use the site, and how we can improve the website and user experience.</p>
                </td>
                <td width="200">
                    <p>https://policies.google.com/technologies/cookies?hl=en</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>_gcl_au</p>
                </td>
                <td width="200">
                    <p>This Google Tag Manager cookie stores and tracks conversions across the website.</p>
                </td>
                <td width="200">
                    <p>https://policies.google.com/technologies/cookies?hl=en</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>_gid</p>
                </td>
                <td width="200">
                    <p>This Google Analytics cookie collects information on how visitors use our site. We use this information to understand how our visitors use the site, and how we can improve the website and user experience.</p>
                </td>
                <td width="200">
                    <p>https://policies.google.com/technologies/cookies?hl=en</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>Wp-settings-4</p>
                </td>
                <td width="200">
                    <p>This cookie is used for admins of the WordPress website to customise the view of the admin interface.</p>
                </td>
                <td width="200">
                    <p>https://en-au.wordpress.org/about/privacy/cookies/</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>Wp-settings-time-4</p>
                </td>
                <td width="200">
                    <p>This cookie is used for admins of the WordPress website to customise the view of the admin interface.</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>WordPress_logged_in</p>
                </td>
                <td width="200">
                    <p>This cookie is used for admins of the WordPress website to customise the view of the admin interface.</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>_lscache_vary</p>
                </td>
                <td width="200">
                    <p>This cookie is used for admins of the WordPress site and stores login data.</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>WordPress_test_cookie</p>
                </td>
                <td width="200">
                    <p>This cookie is used to determine if the website visitor&rsquo;s browser supports cookies.</p>
                </td>
                <td width="200">
                    <p>https://en-au.wordpress.org/about/privacy/cookies/</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>_clck</p>
                </td>
                <td width="200">
                    <p>This cookie is installed by Microsoft Clarity to store information about how visitors use the website.</p>
                </td>
                <td width="200">
                    <p>https://privacy.microsoft.com/en-us/privacystatement</p>
                </td>
            </tr>
        </tbody>
    </table>
    <h2>Targeting Cookies</h2>
    <table>
        <tbody>
            <tr>
                <td width="200">
                    <p><strong>Cookies</strong></p>
                </td>
                <td width="200">
                    <p><strong>Description</strong></p>
                </td>
                <td width="200">
                    <p><strong>Opt-Out Link</strong></p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>MR</p>
                </td>
                <td width="200">
                    <p>This cookie collects user action information for analytics purposes on the Bing advertising network.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>WLS</p>
                </td>
                <td width="200">
                    <p>This cookie helps us to target and track performance of advertising campaigns on the Bing advertising network.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>OIDI</p>
                </td>
                <td width="200">
                    <p>This cookie helps us to target and track performance of advertising campaigns on the Bing&nbsp; advertising network.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>_RwBf</p>
                </td>
                <td width="200">
                    <p>This cookie helps us to track the effectiveness of advertising campaigns on the Bing advertising network.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>SRCHUSR</p>
                </td>
                <td width="200">
                    <p>This cookie allows us to serve relevant advertisements to visitors across the Microsoft Bing network.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>ipv6</p>
                </td>
                <td width="200">
                    <p>This cookie helps us to target and track performance of advertising campaigns on the Bing&nbsp; advertising network.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>OIDR</p>
                </td>
                <td width="200">
                    <p>This cookie helps us to target and track performance of advertising campaigns on the Bing advertising network.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>BFBUSR</p>
                </td>
                <td width="200">
                    <p>This cookie helps us to target and track performance of advertising campaigns on the Bing advertising network.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>_SS</p>
                </td>
                <td width="200">
                    <p>This cookie tracks and allows us to understand the effectiveness of advertising campaigns across the Microsoft Bing advertising network.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>_EDGE_S</p>
                </td>
                <td width="200">
                    <p>This cookie helps us to target and track performance of advertising campaigns on the Bing advertising network.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>SRCHD</p>
                </td>
                <td width="200">
                    <p>This cookie allows us to serve relevant advertisements to visitors across the Microsoft Bing network.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>MUID</p>
                </td>
                <td width="200">
                    <p>This cookie is used widely by Microsoft as a unique user ID. This Bing cookie enables tracking by synchronising the ID across many Microsoft domains.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>SRCHUID</p>
                </td>
                <td width="200">
                    <p>This cookie allows us to serve relevant advertisements to visitors across the Microsoft Bing network.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>SerpPWA</p>
                </td>
                <td width="200">
                    <p>This cookie helps us to target and track performance of advertising campaigns on the Bing advertising network.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>_uetmsclkid</p>
                </td>
                <td width="200">
                    <p>This cookie tracks conversions on the Microsoft Bing advertising network</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>ABDEF</p>
                </td>
                <td width="200">
                    <p>This cookie is used by the Bing advertising network for advertising tracking purposes.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>_uetsid</p>
                </td>
                <td width="200">
                    <p>This is a tracking cookie used by Microsoft Bing advertising to allow us to engage with a user that has previously visited our website.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>_uetvid</p>
                </td>
                <td width="200">
                    <p>This is a tracking cookie used by Microsoft Bing advertising to allow us to engage with a user that has previously visited our website.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>SRCHHPGUSR</p>
                </td>
                <td width="200">
                    <p>This cookie helps us to track the effectiveness of advertising campaigns on the Bing advertising network.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>NAP</p>
                </td>
                <td width="200">
                    <p>This Microsoft cookie contains an encrypted version of each user&rsquo;s country, ZIP code, age, gender, language and occupation, if known, based on their Microsoft profile.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>_fbp</p>
                </td>
                <td width="200">
                    <p>This cookie helps us to provide the most relevant advertising across Facebook.</p>
                </td>
                <td width="200">
                    <p>https://www.facebook.com/policies/cookies</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>_fbc</p>
                </td>
                <td width="200">
                    <p>This cookie helps us to provide the most relevant advertising across Facebook.</p>
                </td>
                <td width="200">
                    <p>https://www.facebook.com/policies/cookies</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>Mp_</p>
                </td>
                <td width="200">
                    <p>This Mixpanel cookie provides us with data on website traffic</p>
                </td>
                <td width="200">
                    <p>https://mixpanel.com/legal/privacy-policy/</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>OID</p>
                </td>
                <td width="200">
                    <p>This cookie is used as an identifier for an object in Microsoft&rsquo;s identity system.</p>
                </td>
                <td width="200">
                    <p>https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>ANON</p>
                </td>
                <td width="200">
                    <p>This cookie helps us to target and track performance of advertising campaigns on the Bing advertising network.</p>
                </td>
                <td width="200">
                    <p><a href="https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy">https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy</a></p>
                </td>
            </tr>
            <tr>
                <td width="200">
                    <p>__Secure-3PSIDCC</p>
                </td>
                <td width="200">
                    <p>Cookie Provider: google.com. Targeting cookie. Used by for targeting purposes to build a profile of the website visitor&rsquo;s interests in order to show relevant &amp; personalised Google advertising</p>
                </td>
                <td width="200">
                    <p>https://policies.google.com/technologies/cookies?hl=en</p>
                </td>
            </tr>
        </tbody>
    </table>
    <h2>Contact Us</h2>
    <p>Please contact us if you have any questions regarding our Cookies Policy.</p>
    <p><strong>The Privacy Officer:</strong> {BRAND_NAME}, P O Box 688 Mooloolaba, Queensland 4557, Australia</p>
    <p><strong>Phone:</strong>&nbsp;<a href={`tel:+61730402098`}>+ 61 7 3040 2098</a></p>
    <p><strong>Email:</strong>&nbsp;<a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>

</>
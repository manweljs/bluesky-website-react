import React from 'react'
import { BRAND_NAME, PAGE } from '@/consts';
import { Metadata } from 'next';
import Image from 'next/legacy/image';
import s from "../Legal.module.sass";
import Wrapper from '../Wrapper';
import { PageHeading } from '@/components/ui/PageHeading';
import Footer from '@/components/Footer';

const pageTitle = PAGE.AI_ACT_GROUP_POLICY

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
    <h2>Introduction &amp; Scope</h2>
    <p>The Blue Sky Creations Group is committed to maintaining the confidentiality, integrity, and availability of information assets, including those related to Artificial Intelligence (AI) systems development and provision.</p>
    <p>Compliance with the New Zealand and Australia Privacy Acts, European General Data Protection Regulation (GDPR), United Kingdom GDPR, and more recently introduced, the European Union AI Act (Act) is a prerequisite.</p>
    <p>This policy outlines the principles, responsibilities, and procedures that govern the management of information security within our organization, specifically addressing the requirements of the Act.</p>
    <p>The policy applies to all employees, contractors, suppliers, and other parties working on behalf of our organisation. It encompasses all information assets, systems, processes, and activities related to AI systems development and provision, including but not limited to algorithm development, data processing, model training, and deployment.</p>
    <h2>Reference documents</h2>
    <ul>
        <li>Statement of Applicability</li>
        <li>ISMS Scope</li>
        <li>Privacy Policy</li>
        <li>General Data Protection Policy</li>
    </ul>
    <h2>AI Act Introduction</h2>
    <p>The&nbsp; Act is a&nbsp;<a href="https://en.wikipedia.org/wiki/Regulation_(European_Union)">European Union regulation</a>&nbsp;on&nbsp;<a href="https://en.wikipedia.org/wiki/Artificial_intelligence">artificial intelligence</a>&nbsp;in the&nbsp;<a href="https://en.wikipedia.org/wiki/European_Union">European Union</a>. Proposed by the&nbsp;<a href="https://en.wikipedia.org/wiki/European_Commission">European Commission</a>&nbsp;on 21 April 2021&nbsp;and passed on 13 March 2024,&nbsp;it aims to establish a common regulatory and legal framework for AI.</p>
    <p>Its scope encompasses all types of AI in a broad range of sectors (exceptions include AI systems used solely for military, national security, research, and non-professional purposes). As a piece of product regulation, it would not confer rights on individuals, but does regulate the providers of AI systems, and entities using AI in a professional context.</p>
    <p>The Act was revised following the rise in popularity of&nbsp;<a href="https://en.wikipedia.org/wiki/Generative_AI">generative AI</a>&nbsp;systems such as&nbsp;<a href="https://en.wikipedia.org/wiki/ChatGPT">ChatGPT</a>, whose general-purpose capabilities present different stakes and did not fit the defined framework.&nbsp;More restrictive regulations are planned for powerful generative AI systems with systemic impact.</p>
    <p>The Act aims to classify and regulate AI applications based on their risk to cause harm.</p>
    <h2>Act Classifications</h2>
    <p>Classification includes four categories as follows.</p>
    <ol>
        <li><strong>Unacceptable Risks</strong> - AI applications deemed to represent unacceptable risks are banned.</li>
        <li><strong>High-Risk</strong> - AI applications must comply to security, transparency and quality obligations and undergo conformity assessments.</li>
        <li><strong>Limited-Risk</strong> - AI applications only have transparency obligations.</li>
        <li><strong>Minimal risk</strong> - AI applications are not regulated.</li>
    </ol>
    <p>For general-purpose AI, transparency requirements are imposed, with additional and thorough evaluations when representing particularly high risks.</p>
    <p>The Act further proposes the introduction of a European Artificial Intelligence Board to promote national cooperation and ensure compliance with the regulation.</p>
    <h2>Risk Categories</h2>
    <p>There are different risk categories depending on the type of application, and one specifically dedicated to general-purpose generative AI.</p>
    <Image
        width={1229}
        height={614}
        src={'/images/risk-category.png'}
        alt="Risk Categories"
    />
    <ul>
        <li><strong>Unacceptable risk</strong>: AI applications that fall under this category are banned. This includes AI applications that manipulate human behaviour, those that use real-time remote&nbsp;<a href="https://en.wikipedia.org/wiki/Biometrics">biometric</a> identification (including&nbsp;<a href="https://en.wikipedia.org/wiki/Facial_recognition_system">facial recognition</a>) in public spaces, and those used for social scoring (ranking people based on their personal characteristics, socio-economic status or behaviour).</li>
    </ul>
    <ul>
        <li><strong>High-risk</strong>: AI applications that pose significant threats to health, safety, or the fundamental rights of persons. Notably, AI systems used in health, education, recruitment, critical infrastructure management, law enforcement or justice. They are subject to quality, transparency, human oversight, and safety obligations, and in some cases a Fundamental Rights Impact Assessment&nbsp;is required. They must be evaluated before they are placed on the market, as well as during their life cycle. The list of high-risk applications can be expanded without requiring modifying the Act itself.</li>
        <li><strong>General-purpose AI</strong> (GPAI): This category was added in 2023 and includes in particular&nbsp;<a href="https://en.wikipedia.org/wiki/Foundation_model">foundation models </a>like ChatGPT. They are subject to transparency requirements. High-impact general-purpose AI systems which could pose systemic risks (notably those trained using a computation capability of more than 10<sup>2</sup>&nbsp;<a href="https://en.wikipedia.org/wiki/FLOPS">FLOPS</a>) must also undergo a thorough evaluation process.</li>
        <li><strong>Limited risk</strong>: These systems are subject to transparency obligations aimed at informing users that they are interacting with an artificial intelligence system and allowing them to exercise their choices. This category includes, for example, AI applications that make it possible to generate or manipulate images, sound, or videos (like&nbsp;<a href="https://en.wikipedia.org/wiki/Deepfake">deepfakes</a>). In this category, free and open-source models whose parameters are publicly available are not regulated, with some exceptions.</li>
        <li><strong>Minimal risk</strong>: This includes for example AI systems used for video games or spam filters. Most AI applications are expected to be in this category.&nbsp;They are not regulated, and Member States are prevented from further regulating them via&nbsp;<a href="https://en.wikipedia.org/wiki/Maximum_harmonisation">maximum harmonization</a>. Existing national laws related to the design or use of such systems are disapplied. However, a voluntary code of conduct is suggested.</li>
    </ul>
    <h2>Information Security Objectives</h2>
    <p>This Policy ensures our organisation achieves the following objectives.</p>
    <ul>
        <li><strong>Compliance</strong> with the provisions of the&nbsp; Act, including but not limited to requirements related to data protection, transparency, accountability, and ethical use of AI systems.</li>
        <li><strong>Protect the confidentiality, integrity</strong>, and availability of information assets, including AI algorithms, datasets, and proprietary information, in accordance with the principles and requirements of the Act.</li>
        <li><strong>Minimize the risk</strong> of unauthorized access, disclosure, alteration, or destruction of information assets, particularly those containing sensitive or personal data used in AI systems.</li>
        <li>Implement appropriate technical and organizational measures to mitigate the risks associated with AI systems development and provision, including measures to address bias, fairness, interpretability, and accountability.</li>
        <li><strong>Promote a culture of security awareness </strong>and accountability among employees and stakeholders involved in AI systems development and provision, emphasizing compliance with the Act and related policies and procedures.</li>
    </ul>
    <h2>Information Security Responsibilities</h2>
    <p>Our organisation manages AI information security as follows.</p>
    <ul>
        <li><strong>Management Commitment</strong>: Senior management is committed to ensuring that information security measures are implemented and maintained in compliance with the Act and other relevant laws, regulations, and standards.</li>
    </ul>
    <ul>
        <li><strong>Information Security Coordinator</strong>: The Information Security Coordinator is responsible for overseeing the implementation and maintenance of information security measures related to AI systems development and provision, including compliance with the Act.</li>
    </ul>
    <ul>
        <li><strong>Employees</strong>: All employees are responsible for complying with information security policies, procedures, and guidelines, particularly those related to AI systems development and provision. Employees involved in AI-related activities are expected to adhere to ethical principles and legal requirements outlined in the Act.</li>
    </ul>
    <h2>Risk Management</h2>
    <p>Our organisation manages AI risk management as follows:</p>
    <ul>
        <li><strong>Risk Assessment</strong>: Our organisation conducts regular risk assessments to identify, evaluate, and prioritize information security risks related to AI systems development and provision, considering the requirements of the AI Act.</li>
    </ul>
    <ul>
        <li><strong>Risk Treatment</strong>: Based on the results of risk assessments, appropriate controls are implemented to mitigate identified risks to an acceptable level, including controls to address legal and regulatory requirements of the Act.</li>
    </ul>
    <h2>Access Control</h2>
    <p>&nbsp;Our organisation controls access as follows:</p>
    <ul>
        <li><strong>Access Rights</strong>: Access to AI systems, databases, and sensitive information is granted on a need-to-know basis and is regularly reviewed and updated as necessary to ensure compliance with the Act.</li>
    </ul>
    <ul>
        <li><strong>Authentication and Authorization</strong>: Strong authentication mechanisms and access controls are implemented to ensure that only authorized individuals can access and modify information assets, particularly those containing sensitive or personal data used in AI systems.</li>
    </ul>
    <h2>Security Awareness and Training</h2>
    <p>Our organisation undertakes the following:</p>
    <ul>
        <li><strong>Security Awareness</strong>: We provide ongoing security awareness training to employees, contractors, and other relevant parties involved in AI systems development and provision to promote understanding of information security risks, ethical principles, and legal requirements outlined in the Act.</li>
    </ul>
    <ul>
        <li><strong>Incident Response</strong>: Employees are trained to recognize and report security incidents promptly, including those related to potential violations of the AI Act, to facilitate timely response and resolution.</li>
    </ul>
    <h2>Compliance</h2>
    <p>Our commercial and compliance team undertake the following:</p>
    <ul>
        <li><strong>Legal and Regulatory Compliance</strong>: We compliance with the provisions of the Act, including requirements related to data protection, transparency, accountability, and ethical use of AI systems, as well as other relevant laws, regulations, and standards.</li>
    </ul>
    <ul>
        <li><strong>Contractual Obligations</strong>: We ensure that contracts with clients, suppliers, and other relevant parties include appropriate information security requirements and provisions, particularly those related to AI systems development and provision and compliance with the Act.</li>
    </ul>
    <h2>Monitoring and Review</h2>
    <p>Our organisation undertakes the following:</p>
    <ul>
        <li><strong>Performance Monitoring</strong>: We regularly monitor the effectiveness of information security controls, processes, and practices related to AI systems development and provision through audits, reviews, and performance measurements, with specific attention to compliance with the Act.</li>
    </ul>
    <ul>
        <li><strong>Management Review</strong>: Senior management conducts periodic reviews of the Information Security Management System (ISMS) to assess its continued suitability, adequacy, and effectiveness, including compliance with the AI Act, and to identify opportunities for improvement.</li>
    </ul>
    <h2>Continual Improvement</h2>
    <p>Our organisation is committed to continually improving its information security management processes, controls, and practices related to AI systems development and provision, with a focus on enhancing compliance with the Act and addressing emerging threats and vulnerabilities.</p>
    <h2>Document Control</h2>
    <p>This Policy is maintained, reviewed, and updated as necessary to ensure its continued relevance and effectiveness, particularly in relation to compliance with the Act and other legal and regulatory requirements.</p>
    <h2>Policy Compliance</h2>
    <p>Failure to comply with this Policy, including its specific provisions related to compliance with the Act, may result in disciplinary action, up to and including termination of employment or contractual relationship, as well as legal consequences in cases of serious non-compliance.</p>
    <h2>Validity and document management</h2>
    <p>This document is valid as of April 24, 2021.</p>
    <p>The owner of this document is Chief Operations Officer, who must check and, if necessary, update the document every 12 months.</p>

</>


import { title } from "process";
import { LinkedinOutlined, FacebookOutlined } from '@ant-design/icons';
import { MetaOPTImage, MetaOPTImage2 } from "./outline-images/MetaOPT";
import { SquirrelImage, SquirrelImage2 } from "./outline-images/Squirrel";
import { OptimizeDCImage, OptimizeDCImage2 } from "./outline-images/OptimizeDC";
import { AgencyConnectImage, AgencyConnectImage2 } from "./outline-images/AgencyConnect";
import { RecruitCompleteImage, RecruitCompleteImage2 } from "./outline-images/RecruitComplete";
import { BlueSkyStudioImage } from "./outline-images/BlueSkyStudio";


export const sections = ['home', 'about', 'collaboration', 'products', 'blog', 'contact',];


export const socialMedia = [
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/company/bluesky-creations/",
        icon: 'fi-brands-linkedin'
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com/BlueSkyCreationsSoftware/",
        icon: "fi-brands-facebook"
    },

]

export const homeImages = ["/img/Image-1.png", "/img/Image-2.png", "/img/Image-3.png"]


export const contents = {
    heading: {
        title: "Welcome to BlueSky Creations",
        subtitle: "Optimal decision making, making the uncertain more certain."
    }
}



export const productList = [
    {
        id: "MetaOPT",
        title: "Unlock the full potential of your data center operations",
        logo: "/MetaOPT.svg",
        button: {
            title: "Learn more",
            href: "https://meta-optimize.com/"
        },
        color: "#0062ff",
        paragraph: [
            `Route your way to success with our routing optimization 
            algorithms Keep your inventory optimized with Meta OPT’s 
            inventory optimization tools. Simplify your scheduling with our 
            intuitive scheduling software.`,

            `Need something else optimized? Our user-friendly 
            platform enables you to submit your data and receive optimized results in 
            just minutes. With the ability to integrate GPT technology and chatbots,
             Meta OPT is always evolving to meet your needs.`
        ],
        image1: <MetaOPTImage />,
        image2: <MetaOPTImage2 />,
    },
    {
        id: "SquirrelHR",
        title: "The most complete HR & talent management software solution",
        logo: "/SquirrelHR.svg",
        button: {
            title: "Learn more",
            href: "https://squirrelhr.com/"
        },
        color: "#7310eb",
        paragraph: [
            `SquirrelHR is a complete cloud-based HR, workforce management and payroll platform for teams of any size.`,

            `Squirrel exists to enable people management professionals to engage, 
            manage and retain their top talent. From hiring through to payroll, 
            and an employee’s first day to their last, 
            Squirrel not only makes all people management processes pain free, but enjoyable.`
        ],
        image1: <SquirrelImage />,
        image2: <SquirrelImage2 />,
    },
    {
        id: "OptimizeDC",
        title: "Unlock the full potential of your Distribution Centre Operations",
        logo: "/OptimizeDC.svg",
        button: {
            title: "Learn more",
            href: "https://optimizedc.com/"
        },
        color: "#ff5e29",
        paragraph: [
            `Improve the performance, efficiency, and cost-effectiveness 
            of your data center operations. Get customized solutions that 
            meet your specific needs from our team of experts.`,

            `OptimizeDC is designed to provide you with the best 
            results and take your data center operations to the next level.`
        ],
        image1: <OptimizeDCImage />,
        image2: <OptimizeDCImage2 />,
    },
    {
        id: "AgencyConnect",
        title: "Make your labor hire business more efficient and effective",
        logo: "/AgencyConnect.svg",
        button: {
            title: "Learn more",
            href: "https://agencyconnect.com/"
        },
        color: "#065bf7",
        paragraph: [
            `Empower employers, agents, and candidates with our AI-powered solutions. 
            Transform the way you operate in the dynamic world of temporary and on-demand labor acquisition and provision. 
            Enjoy genuine efficiencies in the labor hire industry with our comprehensive suite of products.`,

            `Small business or large enterprise? Our advanced analytics, optimization algorithms, and artificial intelligence can help you flourish in the labor market.`
        ],
        image1: <AgencyConnectImage />,
        image2: <AgencyConnectImage2 />,
    },
    {
        id: "RecruitComplete",
        title: "End-to-end recruitment & HR management system",
        logo: "/RecruitComplete.svg",
        button: {
            title: "Learn more",
            href: "https://recruitcomplete.com/"
        },
        color: "#00be68",
        paragraph: [
            `Transform your recruitment, HR & payroll workflows with all systems in one place.
             Streamline recruitment, HR, and payroll workflows with one integrated system.`,

            `Recruit Complete combines a range of Bluesky’s solutions to cater specifically for recruiters, 
            HR managers and business owner to better manage recruitment and their people.`
        ],
        image1: <RecruitCompleteImage />,
        image2: <RecruitCompleteImage2 />,
    },
    {
        id: "BlueSkyStudio",
        title: "Partner with our team of AI experts and engineers.",
        logo: "/BlueSkyStudio.svg",
        button: null,
        color: "#0062ff",
        paragraph: [
            `We offer custom AI development, prototyping, and implementation services.
             Our team has decades of experience in AI, machine learning, and optimization.`,

            `Collaborate with us to solve complex business problems and take your business to new heights.`
        ],
        image1: <BlueSkyStudioImage />,
        image2: null,
    },
]

import { Advertising, Content, Contest, Dannyo, Kols, Partnerships, Punkbrand, Raribrand, Referral, Rio, Sandboxbrand, Ser, Topshotbrand, Veefriendbrand, Zedbrand } from "./assets";
import utilitiestracking from "./assets/utilitytracking.svg";
import utilitiespremium from "./assets/utilitiespremium.svg";
import aiception from "./assets/ception.svg";
import crosschain from "./assets/crosschain.svg";
import cryptorypad from "./assets/cryptorypad.svg";
import cryptorydapp from "./assets/cryptorydapp.svg";
import cryptoryweb from "./assets/cryptoryweb.svg";
import { GitHub, Telegram, Twitter, YouTube } from "@mui/icons-material";

export const navLinks = [
    {
        name: "Main use cases",
        url: "/#usecases"
    },
    {
        name: "Road Map",
        url: "/#roadmap"
    },
    {
        name: "GT Marketing Strategy",
        url: "/#strategy"
    },
    {
        name: "Tokenomics",
        url: "/#tokenomics"
    },
    {
        name: "Other",
        url: "/#footer"
    },
];

export const brands = [
    {
        name: "Punk",
        icon: <Punkbrand />
    },
    {
        name: "Rari",
        icon: <Raribrand />
    },
    {
        name: "Sandbox",
        icon: <Sandboxbrand />
    },
    {
        name: "Topshot",
        icon: <Topshotbrand />
    },
    {
        name: "Veefriend",
        icon: <Veefriendbrand />
    },
    {
        name: "Zedbrand",
        icon: <Zedbrand />
    },
];

export const pointers = [
    {
        title: "communities",
        count: 100000
    },
    {
        title: "utilities listed out of 10000+ available",
        count: 100
    },
    {
        title: "Web3 users target",
        count: 400000000
    },
    {
        title: "Web3 utiliities TVL servicing",
        count: 10000000
    },
];

export const mainusecases = [
    {
        title: "Utility Tracking / Connection",
        body: "offers a platform where web3 utilities are connected and made accessible to the millions of users in the space.",
        thumbnail: utilitiestracking
    },
    {
        title: "AI Ception",
        body: "CRYPTORY’S AI ception provides AI toolkits solution to aid builders in developing their conceived AI related projects.",
        thumbnail: aiception
    },
    {
        title: "Cross-chain swapping",
        body: "a reliable and a faster protocol to convert assets from one chain to another seamlessly.",
        thumbnail: crosschain
    },
    {
        title: "Cryptory.pad",
        body: "Offers the community, funding, and support essential to turning Web3 utility concepts into fully-fledged projects.",
        thumbnail: cryptorypad
    },
    {
        title: "CRYPTORY Dapp",
        body: "Offers a platform to list DAPPs where users can download and access the utilities.",
        thumbnail: cryptorydapp
    },
    {
        title: "Access to Utilities Premium Features at Cheaper Rate",
        body: "Cryptory, through negotiation with our partner projects, offers access to some premium features of our partner projects.",
        thumbnail: utilitiespremium,
    },
    {
        title: "Cryptory Web Apps",
        body: "Access all the Web3 Utilities from the web page.",
        thumbnail: cryptoryweb
    },
];

export const goToMarketStrategy = [
    {
        name: "Strategic Parternships",
        icon: <Partnerships />
    },
    {
        name: "Targeted Advertising",
        icon: <Advertising />
    },
    {
        name: "Referral System",
        icon: <Referral />
    },
    {
        name: "Contest and Promotions",
        icon: <Contest />
    },
    {
        name: "Content Marketing",
        icon: <Content />
    },
    {
        name: "KOLs/Influencers partnership",
        icon: <Kols />
    },
];

export const tokenomics = [
    {
        title: "Token Name",
        value: "$CRYPT"
    },
    {
        title: "Blockchain Platform",
        value: "Ethereum"
    },
    {
        title: "Total Supply",
        value: "10,000,000 (10 Million)"
    },
];

export const tokenAllocation = [
    {
        title: "Liquidity Pool",
        value: "6,400,000 $CRYPT(64%)"
    },
    {
        title: "Centralized Exchange",
        value: "1,000,000 $CRYPT(10%)"
    },
    {
        title: "RevShare/Staking/Rewards",
        value: "1,200,000 $CRYPT(12%)"
    },
    {
        title: "Marketing/User Acquisition",
        value: "900,000 $CRYPT(12%)"
    },
    {
        title: "Team, Partners, Advisors",
        value: "500,000 $CRYPT(5%)"
    },
    {
        title: "Marketing/User Acquisition",
        value: "900,000 $CRYPT(12%)"
    },
];

export const tokenTaxes = [
    {
        title: "5% - buys & sell",
    },
    {
        title: "1% - Marketing and User Acquisition",
        value: "A more focused approach combining marketing efforts with strategies specifically aimed at acquiring new users, thus enhancing community growth and engagement."
    },
    {
        title: "1% - Team",
        value: "This allocation ensures that we can attract, retain, and adequately compensate top talent, essential for our long- term success."
    },
    {
        title: "2% - Ecosystem",
        value: "This is a multi- faceted allocation that includes: a.) RevShare: Continuing our commitment to sharing our success with our community. b.) Buybacks: Tokens bought back are burnt forever."
    }
];

export const roadmap = [
    {
        subtitle: "PHASE1",
        title: "Laying the Groundwork",
        body: "This foundational phase marks the genesis of Cryptory, focusing on development, team building, and early community formation. Key Objectives: Solidify the core architecture and design of the utility marketplace, Build a skilled development team with expertise in blockchain and web3 utilities. Initiate social media presence and begin cultivating an early adopter community."
    },
    {
        subtitle: "PHASE2",
        title: "Building Core Functionality and Securing Funding",
        body: "Building Core Functionality and Securing Funding. The focus shifts to developing essential platform features and successfully raising capital to fuel project growth. Key Objectives: Complete Platform interface and secure partnerships with utility projects. Design and finalize the tokenomics model for the project's native token."
    },
    {
        subtitle: "PHASE3",
        title: "Launch and Rapid Expansion",
        body: "This pivotal quarter sees the official launch of Cryptory and a period of accelerated feature development. Key Objectives: Public launch of the Cryptory platform with initial onboarding of the first 100 utilities. Integrate the cross chain swapping feature. Begin the process of securing listings on prominent centralized exchanges (CEXs)."
    },
    {
        subtitle: "PHASE4",
        title: "Refinement and Strategic Growth",
        body: "With a live platform, emphasis shifts towards polishing user experience, establishing partnerships, and planning further expansion. Key Objectives: Enhance UI/UX based on early user feedback, ensuring seamless interaction. Initiate partnerships with data providers and analytics tools to enrich the platform. Research and develop additional complementary products and services for future rollout."
    },
];

export const team = [
    {
        icon: <Dannyo />,
        title: "Dannyo",
        body: "Dedicated community and social media manager, adept at fostering online connections and growing vibrant communities for the last 8 years."
    },
    {
        icon: <Rio />,
        title: "Rio",
        body: "Digital Marketer and Content Creator that  seamlessly blends visions into workable actions. With a keen eye for trends and a strategic mindset his aim is to best communicate our vision and goals."
    },
    {
        icon: <Ser />,
        title: "Ser PT",
        body: "The driving force behind XCEPTION, a leader who epitomizes intelligence and forward thinking. As the helm of our dynamic company, he is not just a CEO; he’s a strategic architect with a colossal vision for the future."
    },
];

export const qanda = [
    {
        question: "What can Cryptory do?",
        answer: "Cryptory is a cutting-edge tool that assists in generating website content, designs, and layouts using artificial intelligence. It streamlines the website creation process, making it efficient and user-friendly."
    },
    {
        question: "How do I access Cryptory?",
        answer: "Cryptory is a cutting-edge tool that assists in generating website content, designs, and layouts using artificial intelligence. It streamlines the website creation process, making it efficient and user-friendly."
    },
    {
        question: "Is Cryptoryfree to use?",
        answer: "Cryptory is a cutting-edge tool that assists in generating website content, designs, and layouts using artificial intelligence. It streamlines the website creation process, making it efficient and user-friendly."
    },
    {
        question: "How does Cryptory generate content?",
        answer: "Cryptory is a cutting-edge tool that assists in generating website content, designs, and layouts using artificial intelligence. It streamlines the website creation process, making it efficient and user-friendly."
    },
    {
        question: "Can I customize the cryptory-generated content?",
        answer: "Cryptory is a cutting-edge tool that assists in generating website content, designs, and layouts using artificial intelligence. It streamlines the website creation process, making it efficient and user-friendly."
    },
    {
        question: "Is my data safe with cryptory?",
        answer: "Cryptory is a cutting-edge tool that assists in generating website content, designs, and layouts using artificial intelligence. It streamlines the website creation process, making it efficient and user-friendly."
    },
];

export const footerLinks = {
    quickLinks: [
        {
            name: "About Us",
            url: "/#",
        },
        {
            name: "Features",
            url: "/#",
        },
        {
            name: "KYC",
            url: "/#",
        },
        {
            name: "Token",
            url: "/#",
        },
    ],
    support: [
        {
            name: "GitBook",
            url: "/#",
        },
        {
            name: "Bot",
            url: "/#",
        },
        {
            name: "FAQs",
            url: "/#",
        },
    ],
};

export const socialMediaIcons = [
    {
        icon: <Telegram />,
        url: "/#"
    },
    {
        icon: <Twitter />,
        url: "/#"
    },
    {
        icon: <GitHub />,
        url: "/#"
    },
    {
        icon: <YouTube />,
        url: "/#"
    },
]
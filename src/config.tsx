import { Advertising, Content, Contest, Kols, Partnerships, Punkbrand, Raribrand, Referral, Sandboxbrand, Topshotbrand, Veefriendbrand, Zedbrand } from "./assets";
import utilitiestracking from "./assets/utilitytracking.svg";
import utilitiespremium from "./assets/utilitiespremium.svg";
import aiception from "./assets/ception.svg";
import crosschain from "./assets/crosschain.svg";
import cryptorypad from "./assets/cryptorypad.svg";
import cryptorydapp from "./assets/cryptorydapp.svg";
import cryptoryweb from "./assets/cryptoryweb.svg";

export const navLinks = [
    {
        name: "Main use cases",
        url: "#"
    },
    {
        name: "Road Map",
        url: "#"
    },
    {
        name: "GT Marketing Strategy",
        url: "#"
    },
    {
        name: "Tokenomics",
        url: "#"
    },
    {
        name: "Other",
        url: "#"
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
]
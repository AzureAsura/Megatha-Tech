import { MessageCircle, Mail, Instagram, Linkedin } from 'lucide-react';
import { Palette, Code, Rocket, Wrench } from 'lucide-react';
import { ElementType } from 'react';
import {
    Briefcase, Umbrella, ShoppingBag, Hotel, Home,
    Car, Key, Newspaper, User, Code2
} from 'lucide-react';


export const services = [
    { name: "Company Profile", slug: "company-profile" },
    { name: "Property Website", slug: "property" },
    { name: "Car Sales Website", slug: "car-dealer" },
    { name: "E-Commerce Website", slug: "ecommerce" },
    { name: "Landing Page", slug: "landing-page" },
    { name: "Custom Web App", slug: "custom-app" },
]

export const banner = [
    {
        id: 1,
        name: "Brittco Consulting",
        flag: "🇨🇦",
        country: "Canada"
    },
    {
        id: 2,
        name: "Mainstreet Global",
        flag: "🇨🇦",
        country: "Canada"
    },
    {
        id: 3,
        name: "Ken Gooz",
        flag: "🇨🇦",
        country: "Canada"
    },
    {
        id: 4,
        name: "Nine Planets Coffee",
        flag: "🇨🇦",
        country: "Canada"
    },
    {
        id: 5,
        name: "Sody App",
        flag: "🇨🇦",
        country: "Canada"
    },

]

export const teamMembers = [
    {
        name: "Wayan Phantom Megaditha",
        nickname: "Wayne",
        role: "Chief Executive Officer",
        image: "phantom.jpeg",
        social: [
            { icon: MessageCircle, href: "#", label: "WhatsApp" },
            { icon: Mail, href: "#", label: "Email" },
            { icon: Instagram, href: "#", label: "Instagram" },
            { icon: Linkedin, href: "#", label: "LinkedIn" }
        ]
    },
    {
        name: "Made Paramasura",
        nickname: "Azure",
        role: "Chief Technology Officer",
        image: "sura.jpg",
        social: [
            { icon: MessageCircle, href: "#", label: "WhatsApp" },
            { icon: Mail, href: "#", label: "Email" },
            { icon: Instagram, href: "#", label: "Instagram" },
            { icon: Linkedin, href: "#", label: "LinkedIn" }
        ]
    }
];

interface BenefitItem {
    title: string;
    text: string;
    icon: ElementType;
}

export const benefits: BenefitItem[] = [
    {
        title: "UI Design",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        icon: Palette
    },
    {
        title: "Programming Code",
        text: "The app uses natural language processing to understand user queries and provide accurate responses.",
        icon: Code
    },
    {
        title: "Deployment",
        text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible.",
        icon: Rocket
    },
    {
        title: "Maintenance",
        text: "Experience lightning fast response times, ensuring your productivity never hits a bottleneck.",
        icon: Wrench
    },
];

export interface ServiceItem {
    id: string;
    title: string;
    icon: ElementType;
}

export const serviceSection: ServiceItem[] = [
    { id: "1", title: "Perusahaan", icon: Briefcase },
    { id: "2", title: "Tour Travel", icon: Umbrella },
    { id: "3", title: "Toko Online", icon: ShoppingBag },
    { id: "4", title: "Hotel/Villa", icon: Hotel },
    { id: "5", title: "Agen Properti", icon: Home },
    { id: "6", title: "Sales Mobil", icon: Car },
    { id: "7", title: "Rental Mobil", icon: Key },
    { id: "8", title: "Portal Berita", icon: Newspaper },
    { id: "9", title: "Website Pribadi", icon: User },
    { id: "10", title: "Website Custom", icon: Code2 },
];

export const featured = [
    {
        title: "Modern E-Commerce",
        category: "E-Commerce",
        image: "/ecommercee.png",
    },
    {
        title: "Real Estate Portal",
        category: "Property",
        image: "/property.png",
    },
    {
        title: "SaaS Dashboard",
        category: "Web App",
        image: "/saas.png",
    },
]
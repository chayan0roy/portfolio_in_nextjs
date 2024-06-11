"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from "framer-motion";

const about = {
    title: "About Me",
    description: "jkfbdgbfjjdf jv dfjv dfjvdhfvj dfjuvdfsv hjdfs vdfjv dfjvh",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Chayan Roy"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91) 7003103509"
        },
        {
            fieldName: "Experience",
            fieldValue: "12 + Years"
        },
        {
            fieldName: "Email",
            fieldValue: "tochayan@gmail.com"
        }
    ]
};

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description: "dsv sdjkv dsjv sdjhv sdkhjgv sdhvsdv hsdv sdj",
    items: [
        {
            company: "Tech Solution Inc",
            position: "Full Stack Developer",
            duration: "2024 - 2024"
        },
        // More items...
    ]
};

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "fg,m bnhflggn gffg fg fgfgfg bmlfgbl",
    items: [
        {
            institution: "Collage Name",
            degree: "Full Stack web Development Bootcamp",
            duration: "2024"
        },
        // More items...
    ]
};

const skills = {
    title: "My Skills",
    description: "dsv sdjkv dsjv sdjhv sdkhjgv sdhvsdv hsdv sdj",
    skillsList: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        // More skills...
    ]
};

export default function Resume() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>
                    <div className="w-full">
                        <TabsContent value="experience">
                            <div className="flex flex-col text-center">
                                <h3 className="text-2xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-2 gap-6">
                                        {experience.items.map((item, index) => (
                                            <li key={index} className="bg-gray-900 p-6 rounded">
                                                <span className="text-yellow-400 text-sm">{item.duration}</span>
                                                <h3 className="text-white text-lg">{item.position}</h3>
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Repeat for other tabs */}
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}

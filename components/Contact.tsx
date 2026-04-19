"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { contactContent, socialLinks } from "@/lib/content";
import { useState } from "react";
import { SiGithub, SiX } from 'react-icons/si';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const iconMap: Record<string, any> = {
    GitHub: SiGithub,
    LinkedIn: FaLinkedin,
    Facebook: FaFacebook,
    Instagram: FaInstagram,
    X: SiX,
    YouTube: FaYoutube,
    Email: MdEmail,
};

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Message from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
        window.location.href = `mailto:${contactContent.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <motion.section
            id="contact"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="px-4 lg:px-10 py-14"
        >
            <motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <button className="bg-transparent text-base text-foreground font-semibold rounded-full px-4 py-1.5 border border-foreground cursor-pointer group relative overflow-hidden">
                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">Contact</span>
                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">Contact</span>
                    </button>

                    <motion.h2
                        variants={fadeInUp}
                        className="mt-7 text-foreground lg:text-3xl text-2xl lg:max-w-6xl font-semibold"
                    >
                        {contactContent.title}
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="mt-4 text-foreground/80 lg:text-lg text-base lg:max-w-4xl"
                    >
                        {contactContent.subtitle}
                    </motion.p>

                    <motion.p
                        variants={fadeInUp}
                        className="mt-4 text-foreground/80 lg:text-lg text-base lg:max-w-4xl"
                    >
                        {contactContent.description}
                    </motion.p>

                    <motion.a
                        variants={fadeInUp}
                        href={`mailto:${contactContent.email}`}
                        className="inline-block mt-6 bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:bg-foreground/90 transition-colors"
                    >
                        Send a Message
                    </motion.a>


                </div>

                <motion.div variants={fadeInUp} className="flex flex-col">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-foreground font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-foreground/20 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-foreground font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-foreground/20 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-foreground font-semibold mb-2">Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows={5}
                                className="w-full px-4 py-2 border border-foreground/20 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:bg-foreground/90 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Contact;
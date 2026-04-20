"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { contactContent } from "@/lib/content";
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
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setSuccess(true);
            setName("");
            setEmail("");
            setMessage("");
            setTimeout(() => setSuccess(false), 3000);
        } catch (err) {
            setError("Failed to send message. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
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
                    <button className="bg-transparent text-base text-foreground font-semibold rounded-full px-4 py-1.5 border border-foreground cursor-pointer">
                        Contact
                    </button>

                    <motion.h2
                        variants={fadeInUp}
                        className="mt-7 text-foreground lg:text-3xl text-2xl lg:max-w-6xl font-semibold"
                    >
                        {contactContent.title}
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="mt-4 text-foreground/80 lg:text-lg text-base lg:max-w-lg"
                    >
                        {contactContent.description}
                    </motion.p>


                </div>

                <motion.div variants={fadeInUp} className="flex flex-col mt-10">
                    {success && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm"
                        >
                            Message sent successfully! I'll get back to you soon.
                        </motion.div>
                    )}
                    
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm"
                        >
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-foreground font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                disabled={loading}
                                className="w-full px-4 py-2 border border-foreground/20 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground disabled:opacity-50"
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
                                disabled={loading}
                                className="w-full px-4 py-2 border border-foreground/20 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground disabled:opacity-50"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-foreground font-semibold mb-2">Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                disabled={loading}
                                rows={5}
                                className="w-full px-4 py-2 border border-foreground/20 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground resize-none disabled:opacity-50"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Contact;
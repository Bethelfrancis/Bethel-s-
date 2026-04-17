import Link from "next/link";
import { footerNav } from "@/lib/content";
import { SocialLinks } from "./SocialLinks";

const Footer = () => {
    return (
        <footer className="bg-foreground text-background px-4 lg:px-10 py-12">

            <div 
                className="mt-7 flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-10"
            >
                <h2 className="lg:text-7xl text-3xl lg:max-w-lg leading-23">
                    Open to Collaboration
                </h2>
                
                <button className="bg-black text-base font-semibold rounded-full px-10 py-3 cursor-pointer">
                    Get in Touch
                </button>
            </div>


            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mt-20 border-y-2 border-black py-10 space-y-10">

                <div className="lg:max-w-xs">
                    <Link href="#home" className="text-2xl font-medium">
                        Bethel
                    </Link>
                    <p className="mt-4 text-sm leading-7 text-slate-300 lg:text-base">
                        Available for freelance work and collaboration, focused on building scalable, high-performance frontend applications.
                    </p>
                    <SocialLinks />
                </div>

                {/* <div className="w-full flex justify-between gap-8 ml-50"> */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.24em]">Contact</p>
                        <p className="mt-4 text-sm text-slate-300">bethelndegonekwu@gmail.com</p>
                        <p className="mt-2 text-sm text-slate-300">+234 91 372 01647</p>
                        <p className="mt-2 text-sm text-slate-300">Remote · Lagos, Nigeria</p>
                    </div>
                    
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.24em]">Quick links</p>

                        <ul className="grid md:grid-cols-2 mt-4 space-y-3 space-x-6 text-sm text-slate-300 mr-10">
                            {
                                footerNav.map((item) => (
                                    <li key={item.href}>
                                        <Link href={item.href} className="transition-colors duration-200 hover:text-white">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    
                {/* </div> */}

            </div>

            <div className="text-center pt-6 text-base">
                <p>&copy; {new Date().getFullYear()} Bethel. All rights reserved. </p>
            </div>
            
   
        </footer>
    );
}
export default Footer
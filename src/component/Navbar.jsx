"use client"
import Logo from "@/assets/logo.png"
import { Button } from "@heroui/react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
let date = new Date().toDateString()
const poppins = Poppins({
    weight: "400"
})

const Navbar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 px-5 container m-auto backdrop-blur-lg">
                <header className="flex flex-col items-center justify-around py-4">
                    <div className="flex items-center flex-col justify-center gap-3">
                        <Image src={Logo} width={200} height={200} alt="Dragon news logo" />

                        <p className={`${poppins}`}>Journalism Without Fear or Favour</p>
                    </div>
                    <ul className="flex items-center my-3 gap-4">
                        <li className={`${poppins}`}><Link href="#">Features</Link></li>
                        <li className={`${poppins}`}><Link href="#">Pricing</Link></li>
                    </ul>
                    {date}
                </header>
            </nav>
        </div>
    );
};

export default Navbar;
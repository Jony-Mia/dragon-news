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
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 px-5 backdrop-blur-lg">
                <header className="flex flex-col  items-center justify-around py-6">
                    <div className="flex items-center flex-col justify-center gap-3">
                        <Image src={Logo} width={200} height={200} alt="Dragon news logo" />

                        <p className={`${poppins}`}>Journalism Without Fear or Favour</p>
                    </div>
                    <ul className="flex items-center my-3 gap-4">
                        <li><Link href="#">Features</Link></li>
                        <li><Link href="#">Pricing</Link></li>
                    </ul>
                    {date}
                </header>
            </nav>
            <section className="flex justify-between items-center px-10 ">
                <ul className="flex justify-center  container m-auto gap-5 p-3">
                    <li>
                        <Link href={"/"} >Home</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link href={"/career"}>Career</Link>
                    </li>
                </ul>
                <div className=" flex gap-2 ">

                    <Link href={"/login"}>
                        <Button>Log In</Button>
                    </Link>
                    <Link href={"/signup"}>
                        <Button variant="tertiary" >Sign Up</Button>
                    </Link>

                </div>
            </section>
        </div>
    );
};

export default Navbar;
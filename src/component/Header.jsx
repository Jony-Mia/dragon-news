import { Button } from '@heroui/react';
import Link from 'next/link';
import { Poppins } from "next/font/google";
const poppins = Poppins({
    weight: "400"
})


const Header = () => {
    return (
        <div>
            <section className="flex justify-between items-center px-10 mt-3 ">
                <ul className="flex justify-center translate-x-24 text-center container m-auto gap-5 p-3">
                    <li className={`${poppins}`}>
                        <Link href={"/"} >Home</Link>
                    </li>
                    <li className={`${poppins}`}>
                        <Link href={"/about"}>About</Link>
                    </li>
                    <li className={`${poppins}`}>
                        <Link href={"/career"}>Career</Link>
                    </li>
                </ul>
                <div className=" flex gap-2 ">

                    <Link href={"/login"}>
                        <Button className={`${poppins}`}>Log In</Button>
                    </Link>
                    <Link href={"/signup"}>
                        <Button className={`${poppins}`} variant="tertiary" >Sign Up</Button>
                    </Link>

                </div>
            </section>
        </div>
    );
};

export default Header;
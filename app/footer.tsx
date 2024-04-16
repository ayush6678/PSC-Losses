import Image from "next/image";
import logo from "./logo.png";
function Footer() {
    return (
        <div>
            <div className=" p-32 bg-white ">
                <Image
                    src={logo}
                    width={300}
                    height={300}
                />
            </div>
            <div className=" h-11 bg-orange-400 text-center justify-center flex items-center">
                © 2024 | Prestress contrete, All Rights Reserved.
            </div>
        </div>
    )
}
export default Footer;
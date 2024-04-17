import Image from "next/image";
import logo from "./logo.png";
function Footer() {
    return (
        <div>
            <div className=" p-32 bg-white flex align-middle items-center ">
                <Image
                    src={logo}
                    width={300}
                    height={300}
                />
                <div className=" ml-16 align-middle"> 
                    <div className=" font-bold text-xl">Team:</div>

                    <div className=" flex gap-8 font-medium ">
                        <div>Aditi Gupta</div>
                        <div>Aditi Solanki</div>
                        <div>Anulika</div>
                        <div>Ayush</div>
                        <div>Geetesh</div>
                        <div>Mansi</div>
                        <div>Priyaansh</div>
                        <div>Satwik</div>
                        <div>Sonal</div>
                        <div>Khush</div>
                    </div>
                </div>
            </div>
            <div className=" h-11 bg-orange-400 text-center justify-center flex items-center">
                © 2024 | Prestress contrete, All Rights Reserved.
            </div>
        </div>
    )
}
export default Footer;
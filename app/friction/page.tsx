import Navbar from "../navbar";
import i1 from "../image10.png";
import i2 from "../image11.png";
import Image from "next/image";
import Footer from "../footer";
import Link from "next/link";
function Friction() {
    return (
        <div style={{ backgroundColor: "#F5F5F5" }}>
            <Navbar />

            <div className="grid grid-cols-4">
                <div className=" col-span-1 p-16 pt-32 ">
                    <div className=" border-r-2 border-r-black fixed">
                        <h2 className=" font-semibold text-center p-2 ">Content:</h2>
                        <ul className="list-disc space-y-3 p-4" >

                            <li>
                                <Link href="#1">
                                    Introduction
                                </Link>

                            </li>
                            <li>
                                <Link href="#2">
                                    Mechanism
                                </Link></li>
                            <li>
                                <Link href="#3">
                                    Loss of stress due to the curvature<br />effect,

                                </Link></li>
                            <li>
                                <Link href="#4">
                                    Loss of stress due to the wobble<br />effect,

                                </Link></li>

                        </ul>
                    </div>
                </div>
                <div className="col-span-3 pr-16">

                    <h1 className="pt-32 p-25 font-bold text-2xl text-center">
                        Loss of prestress due to friction
                    </h1>

                    <div>
                        <h1 id="1" className=" font-semibold text-xl ml-0 m-8">Introduction</h1>

                        <div>
                            In the case of post-tensioned members, the tendons are housed in ducts
                            pre-formed in concrete. The ducts are either straight or follow a curved profile
                            depending upon the design requirements. Consequently, on tensioning the
                            curved tendons, loss of stress occurs in the post-tensioned members due
                            to friction between the tendons and the surrounding concrete ducts. The
                            magnitude of this loss is of the following types:

                        </div>
                    </div>

                    <div>
                        <h1 id="2" className=" font-semibold text-xl ml-0 m-8">Loss of stress due to the curvature effect</h1>
                        <div>
                            which depends upon the tendon
                            form or alignment which generally follows a curved profile along the length of the beam.

                        </div>
                    </div>


                    <div>
                        <h1 id="3" className=" font-semibold text-xl ml-0 m-8"> Loss of stress due to the wobble effect</h1>
                        <div>
                            which depends upon the local
                            deviations in the alignment of the cable. The wobble or wave effect is the
                            result of accidental or unavoidable misalignment, since ducts or sheath
                            cannot be perfectly located to follow a predetermined profile throughout
                            the length of the beam.<br />
                            <br />
                            Referring to fig. given, the magnitude of the prestressing force, Px, at a
                            distance x from the tensioning end follows an exponential function of the type:
                            <br />
                            <Image
                                alt="none"

                                className=" m-8 pl-58"
                                src={i1.src}
                                width={500}
                                height={500}
                            />
                            <Image
                                alt="none"

                                className=" m-8"
                                src={i2.src}
                                width={500}
                                height={300}
                            />
                        </div>
                        <Link href={"/calculator"}>
                            <button style={{ marginLeft: "30vw" }} className=" m-16 bg-orange-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto">
                                Calculate Loss
                            </button>
                        </Link>

                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
export default Friction
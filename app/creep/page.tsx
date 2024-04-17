import Navbar from "../navbar";

import i2 from "../image 8.png";
import i3 from "../image 9.png";

import Image from "next/image";
import Footer from "../footer";
import Link from "next/link";
function Creep() {
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
                                    Factor affecting creep of concrete
                                </Link></li>
                            <li>
                                <Link href="#3">
                                    Creep of concrete  formula

                                </Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-3 pr-16">

                    <h1 className="pt-32 p-16 font-bold text-2xl text-center">
                        Loss due to Creep of Concrete
                    </h1>

                    <div>
                        <h1 id="1" className=" font-semibold text-xl ml-0 m-8">Introduction</h1>

                        <div>
                            Creep of concrete is the permanent deformation reported in a part of a structure due to the sustained load for a long time. Creep indicates that strain in the structure continuously increases, but stress remains constant. Creep in a structure will depend on the structural material, loading quantity, loading duration, etc. Creep in concrete structures will be lesser than in steel structures.<br />
                            <br />

                            Creep deformation generally occurs in 3 stages. These stages are called primary creep, secondary creep and tertiary creep. In the primary stage, concrete creep starts rapidly, and the rate decreases with time. In the secondary stage, creep generally occurs at a constant rate. And in the tertiary stage, creep starts at an increasing rate until the structural member breaks down.
                        </div>
                    </div>

                    <div>
                        <h1 id="2" className=" font-semibold text-xl ml-0 m-8">Factor Affecting Creep of concrete</h1>
                        <div>
                            As we discussed, creep is the permanent deformation caused by sustained loading. So based on the cause of the creep of concrete, it will depend on several factors. These factors govern the quality of the concrete material. These factors include the time depending loading factors and parameters related to manufacturing concrete material.<br />
                            <br />

                            Here a few factors are listed below on which the creep of concrete depends<br />
                            <br />
                            <ul className="list-disc pl-5">
                                <li>Type of cement used for the construction of concrete material</li>
                            </ul>
                            <ul className="list-disc pl-5">
                                <li>Quantity of cement used in the concrete</li>
                            </ul>
                            <ul className="list-disc pl-5">
                                <li>Size and shape of the concrete material</li>
                            </ul>
                            <ul className="list-disc pl-5">
                                <li>Amount of the reinforcing bars</li>
                            </ul>
                            <ul className="list-disc pl-5">
                                <li>Surface-to-volume ratio</li>
                            </ul>
                            <ul className="list-disc pl-5">
                                <li>The humidity of the surrounding atmosphere</li>
                            </ul>
                            <ul className="list-disc pl-5">
                                <li>The temperature of the surrounding atmosphere</li>
                            </ul>

                        </div>
                    </div>


                    <div>
                        <h1 id="3" className=" font-semibold text-xl ml-0 m-8 flex flex-col justify-center items-center " >Creep of concrete formula </h1>
                        <div>
                            Creep of concrete = creep strain × length of the member.<br />
                            <br />
                            Creep strain can be related to the modulus of elasticity of concrete at the age of the concrete.<br />
                            <br />
                            The modulus of elasticity at a particular age of the concrete can be calculated as                Ec=Es/(1+Θ)
                            Where Θ is the creep coefficient, which will depend on the age of the concrete.</div>

                        <Image
                            className=" m-8"
                            src={i2.src}
                            width={300}
                            height={300}
                        />
                        <Image
                            className=" m-8"
                            src={i3.src}
                            width={500}
                            height={500}
                        />
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
export default Creep
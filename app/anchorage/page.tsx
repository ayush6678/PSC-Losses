import Navbar from "../navbar";
import i1 from "../image12.png";

import Image from "next/image";
import Footer from "../footer";
import Link from "next/link";
function Anchorage() {
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
                                    Occurence
                                </Link></li>
                            <li>
                                <Link href="#3">
                                    Structual Issues

                                </Link></li>
                            <li>
                                <Link href="#4">
                                    Formula representation

                                </Link></li>

                        </ul>
                    </div>
                </div>
                <div className="col-span-3 pr-16">

                    <h1 className="pt-32 p-6 pr-20 font-bold text-2xl text-center">
                        Loss due to Anchorage Slip
                    </h1>

                    <div>
                        <h1 id="1" className=" font-semibold text-xl ml-0 m-8">Introduction</h1>

                        <div>
                            Anchorage is a component that is used to attach the tendons to the concrete while terminating them. When the stressing process is over, the major role of anchorage is to transfer the stressing force to the concrete. Tendons are provided inside the ducts of a precast concrete member in the case of a post-tensioning system. To transfer the stressing force to the concrete, anchoring is supplied at both ends of the tendon. If the anchorage moves from its original position, the tendons loosen, resulting in prestress loss. The loss of stress due to anchorage slip does not occur in the pre-tensioned concrete. The tendons are monolithically implanted in the concrete when pre-tensioning.
                        </div>
                    </div>

                    <div>
                        <h1 id="2" className=" font-semibold text-xl ml-0 m-8">Occurence</h1>
                        <div>
                            Anchorage slip happens due to factors such as friction between the tendon and the anchorage, deformation of the tendon, and concrete creep. These factors collectively contribute to the displacement or slipping of the tendon within the anchorage zone. Despite the anchorage devices' design to securely grip the tendon, some degree of slip may still occur over time. This slip occurs gradually and can lead to a reduction in the prestress force carried by the tendon, impacting the efficiency and effectiveness of the prestressed concrete member.
                        </div>
                    </div>


                    <div>
                        <h1 id="3" className=" font-semibold text-xl ml-0 m-8">Structual Issues</h1>
                        <div>
                            Anchorage slip can result in significant structural concerns over time. Excessive slip may induce cracks in the concrete, compromise the structural stability, and increase deflection beyond acceptable limits. These structural issues not only jeopardize the safety of the structure but also affect its long-term durability and functionality. Therefore, effective measures to minimize anchorage slip are crucial for maintaining the structural integrity and performance of prestressed concrete members throughout their service life.</div>
                    </div>


                    <div>
                        <h1 id="4" className=" font-semibold text-xl ml-0 m-8">
                            Formula representation
                        </h1>
                        <div>
                            The loss due to anchorage slip (σa)= (Δl/l)Es<br />
                            <br />

                            where,<br />

                            Δl = anchorage slip in mm<br />
                            l = Length of cable in mm<br />
                            Es= Young’s modulus of steel (N/mm2)<br />
                            <br />
                            <Image
                                className=" m-8 p-10"
                                src={i1.src}
                                width={800}
                                height={800}
                            />

                        </div>
                    </div>






                    <Link href={"/calculator"}>
                        <button style={{ marginLeft: "30vw" }} className=" m-16 bg-orange-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto">
                            Calculate Loss
                        </button>
                    </Link>



                </div>
            </div>

            <Footer />

        </div>
    )
}
export default Anchorage
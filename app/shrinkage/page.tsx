import Navbar from "../navbar";
import Image from "next/image";
import Footer from "../footer";
import Link from "next/link";
function Shrinkage() {
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
                                    Factor Influencing Shrinkage
                                </Link></li>
                            <li>
                                <Link href="#3">
                                    Mitigating shrinkage loss

                                </Link></li>
                            <li>
                                <Link href="#4">
                                    Types of Shrinkage

                                </Link></li>

                        </ul>
                    </div>
                </div>
                <div className="col-span-3 pr-16">

                    <h1 className="pt-32 p-16 font-bold text-2xl text-center">
                        Shrinkage Loss in  Prestressed Concrete
                    </h1>

                    <div>
                        <h1 id="1" className=" font-semibold text-xl ml-0 m-8">Introduction</h1>

                        <div>
                            Shrinkage is a natural phenomenon that occurs in prestressed concrete due to the  loss of moisture over time. This reduction in volume can lead to a decrease in the  compressive forces within the concrete, affecting the overall structural integrity.
                        </div>
                    </div>

                    <div>
                        <h1 id="2" className=" font-semibold text-xl ml-0 m-8">Factors Influencing Shrinkage</h1>
                        <div>
                            CONCRETE COMPOSITION :<br />
                            The mix design, including the water-cement ratio and the use of admixtures,  can significantly impact the amount of shrinkage.<br />
                            <br />
                            ENVIRONMENT CONDITIONS:<br />
                            Temperature, humidity, and exposure to  wind and sunlight can all contribute to  the rate and extent of shrinkage.<br />
                            <br />
                            Curing Time Curing time, which the time between the end of external curing and the application of  prestressing, can affect shrinkage.
                        </div>
                    </div>


                    <div>
                        <h1 id="3" className=" font-semibold text-xl ml-0 m-8">Mitigating Shrinkage Loss</h1>
                        <div>
                            POST -TENSIONING TECHNIQUES:<br />
                            Apply prestress after some initial  shrinkage has occurred, reducing  stress losses due to subsequent  shrinkage.<br />
                            <br />
                            CONTROLLED CURING :<br />
                            Carefully monitoring and  maintaining the curing process  can significantly reduce the  amount of shrinkage in  prestressed concrete.<br />
                            <br />
                            CONCRETE COMPOSITION:<br />
                            Admixture Addition Incorporating shrinkage-reducing  admixtures into the concrete mix  can help minimize the loss of  volume over time.<br />
                        </div>
                    </div>
                    <div>
                        <h1 id="3" className=" font-semibold text-xl ml-0 m-8">Types of Shrinkage Losses</h1>
                        <div>
                            SHORT-TERM SHRINKAGE:<br />
                            Occurs during the initial curing process, typically  within the first few days or weeks after concrete  placement.<br />
                            <br />
                            LONG-TERM SHRINKAGE:<br />
                            Long-term Shrinkage Continues over the lifespan of the structure,  influenced by environmental factors and the  concrete's internal changes.<br />
                        </div>
                    </div>
                    <div>
                        <h1 id="3" className=" font-semibold text-xl ml-0 m-8">Formula for Shrinkage Losses</h1>
                        <div>
                            There is contraction due to drying of concrete and shrinkage strain occurs in concrete. Shrinkage strain causes the steel to lose its stretch, resulting in the loss of prestress.<br />
                            Loss of stretch = shrinkage strain (esh).<br />
                            Therefore, loss in prestress(fs) = Es X esh, esh = 0.0003 for pre-tensioned elements, and<br />
                            esh = 0.002/log 10 (t + 2) for post-tensioned beams. Where 't' is the age of concrete.<br />

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
export default Shrinkage
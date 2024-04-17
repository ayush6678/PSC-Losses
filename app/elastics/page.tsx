import Navbar from "../navbar";
import i1 from "../intrinsicR.png";
import i2 from "../reducedR1.png";
import i3 from "../reducde.png";
import i4 from "../reducedR3.png";
import Image from "next/image";
import Footer from "../footer";
import Link from "next/link";
function Elastics() {
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

                                    Elastic shortening for<br />pre-tensioned members
                                </Link></li>
                            <li>
                                <Link href="#3">
                                    Loss in prestress in<br />post-tensioned members


                                </Link></li>
                            <li>
                                <Link href="#4">
                                    Loss due to successive<br />tensioning of straight cables

                                </Link></li>

                        </ul>
                    </div>
                </div>
                <div className="col-span-3 pr-16">

                    <h1 className="pt-32 p-16 font-bold text-2xl text-center">
                        LOSS IN PRESTRESS  DUE TO ELASTIC  SHORTENING
                    </h1>

                    <div>
                        <h1 id="1" className=" font-semibold text-xl ml-0 m-8">Introduction</h1>

                        <div>
                            Loss in prestress due to elastic shortening, also known as  immediate elastic shortening, is a significant consideration  in prestressed concrete design and construction. When  prestressed concrete members, such as beams or slabs, are  subjected to initial prestressing forces, they experience  immediate elastic shortening due to the compression of the  concrete and the elongation of the prestressing tendons. This loss occurs primarily because the concrete, while  initially behaving elastically, undergoes compression and  deformation under the applied prestressing force. This  deformation causes an immediate reduction in the prestress  force, known as immediate elastic shortening loss.
                        </div>
                    </div>

                    <div>
                        <h1 id="2" className=" font-semibold text-xl ml-0 m-8">Elastic shortening for pre-tensioned members</h1>
                        <div>
                            Loss in prestress due to elastic shortening, also known as  immediate elastic shortening, is a significant consideration  in prestressed concrete design and construction. When  prestressed concrete members, such as beams or slabs, are  subjected to initial prestressing forces, they experience  immediate elastic shortening due to the compression of the  concrete and the elongation of the prestressing tendons. This loss occurs primarily because the concrete, while  initially behaving elastically, undergoes compression and  deformation under the applied prestressing force. This  deformation causes an immediate reduction in the prestress  force, known as immediate elastic shortening loss.
                        </div>
                    </div>


                    <div>
                        <h1 id="3" className=" font-semibold text-xl ml-0 m-8">Loss in prestress in post-tensioned members</h1>
                        <div>
                            If there is only one tendon,then in the post -tensioned beam  there will be no loss due to  elastic shortening of concrete. If there are multiple tendons  and all are tensioned  simultaneously then no loss of  prestress due to elastic  shortening can be seen.<br />
                            <br />

                            If there are multiple tendons and  tensioning is done one by one,there will develop pre -stress loss due to elastic shortening of concrete.<br />
                            <br />
                            REASON FOR SUCH BEHAVIOUR → Shortening happens during the time of pre -stressing and once  the tendons reach its desired pre -stressing  value, the available shortening in the  concrete had already happened and thus  no more room for further shortening or elastic deformation</div>
                    </div>


                    <div>
                        <h1 id="4" className=" font-semibold text-xl ml-0 m-8">Loss due to successive tensioning of straight cables
                        </h1>
                        <div>
                            Lets say we have four cables post-tensioned simultaneously the the loss of prestress in each cable is→<br />
                            Cable 1 →α.(fc2)+α(fc3)+α(fc4)<br />
                            Cable 2→α(fc3)+α(fc4)<br />
                            Cable 3→α(fc4)<br />
                            Cable 4→0<br />
                            <br />
                            For any tendon→<br />
                            Fc1→elongation at support(endspan)<br />
                            Fc2→elongation at midspan.<br />
                            Fc(avg)=Fc1+2/3(Fc2-Fc1) …(Fc2{'>'}Fc1) Fc(avg)=Fc2+2/3(Fc1-Fc2) …(Fc1{'>'}Fc2)<br />
                            the Loss is therefore→α.Fc(avg)<br />
                            <br />
                            For successively loaded tendons in pot-tensioned prestressed beams,say for<br />
                            3 tendons→ <br />
                            Loss in tendon1→α.Fc1(avg)+α.Fc2(avg)+α.Fc3(avg)<br />
                            Loss in tendon2→α.Fc2(avg)+α.Fc3(avg)<br />
                            Loss in tendon3→α.Fc3(avg)<br />
                            <br />
                            NOTE→Incase tendon 3 was straight then Loss due to tendon 3 will taken  as 0.
                            <br />
                        </div>
                    </div>
                    <div>

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
export default Elastics
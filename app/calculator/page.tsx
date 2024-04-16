import Footer from "../footer";
import Navbar from "../navbar";
import { useState } from "react";
function Calculator() {
    // const [loss, setLoss] = useState("");

    // const handleOptionChange = (event) => {
    //     setLoss(event.target.value);
    // };


    return (
        <div style={{ backgroundColor: "#A4B6C2" }}>

            <Navbar />
            <div className="p-32">
                <h1 className=" text-xl font-semibold text-center">Calculating the prestress losses due to its different types</h1>

                <form className=" max-w-3xl mx-auto p-8">
                    <select className=" bg-gray-200 text-gray-900 text-sm rounded-3xl w-full p-3 ">
                        <option selected>Select the type of prestress loss</option>
                        <option value="es">Elastic</option>
                        <option value="cr">Creep</option>
                        <option value="as">Anchorage Slip</option>
                        <option value="fr">Friction</option>
                        <option value="rx">Relaxation</option>
                        <option value="sk">Shrinkage</option>
                    </select>
                </form>
                <div>
                    {/* {loss} */}
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Calculator;
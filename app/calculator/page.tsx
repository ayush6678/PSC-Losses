"use client";
import Footer from "../footer";
import Navbar from "../navbar";
import { useEffect, useState } from "react";
import Elastics from "./elastics";
import Anchorage from "./anchorage";
import Shrinkage from "./shrinkage";
import Friction from "./friction";
import Creep from "./creep";
import Relaxation from "./relaxation";
function Calculator() {
    const [loss, setLoss] = useState("");
    const [calc, setCalc] = useState(<></>);

    const handleOptionChange = (event) => {
        setLoss(event.target.value);
    };

    useEffect(() => {
        if (loss === "as") {
            setCalc(<Anchorage />);
        }
        if (loss === "cr") {
            setCalc(<Creep></Creep>);
        }
        if (loss === "fr") {
            setCalc(<Friction></Friction>);
        }
        if (loss === "es") {
            setCalc(<Elastics></Elastics>);
        }
        if (loss === "rx") {
            setCalc(<Relaxation></Relaxation>);
        }
        if (loss === "sk") {
            setCalc(<Shrinkage></Shrinkage>);
        }
    }, [loss])

    return (
        <div style={{ backgroundColor: "#A4B6C2" }}>

            <Navbar />
            <div className="p-32">
                <h1 className=" text-xl font-semibold text-center">Calculating the prestress losses due to its different types</h1>

                <form className=" max-w-3xl mx-auto p-8">
                    <select
                        value={loss}
                        onChange={handleOptionChange}
                        className=" bg-gray-200 text-gray-900 text-sm rounded-3xl w-full p-3 ">
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
                    {calc}
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Calculator;
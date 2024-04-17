"use client";
import { useState } from "react";

function Elastics() {

    const [es, setEs] = useState(1);
    const [fc, setFc] = useState(1);
    const [ec, setEc] = useState(1);
    const [type, setType] = useState("");
    const [formula, setFormula] = useState(<></>);
    const [ans, setAns] = useState();

    const calculate = () => {
        setAns(((es * fc) / ec));
    }
    return (
        <div className=" text-center">
            <h1 className=" font-semibold p-4 text-xl">Calculating the prestress losses due to Elastic shortening</h1>

            <select
                className=" bg-slate-200 rounded-3xl m-8 p-2"

                value={type}
                onChange={(e) => {
                    if (e.target.value === "pre") {
                        setFormula(<div>
                            <h1 className="p-2 text-xl">Formula</h1>
                            <div className="p-4">loss of stress in steel = Es(fc/Ec)</div>
                        </div>)
                        setType(e.target.value);
                    } else {
                        setFormula(
                            <div>
                                <h1 className="p-2 text-xl">In Post-Tensioning</h1>
                                <div className="p-4">If all the wires are stretched simlultaneously then Es=0.</div>
                            </div>
                        );
                        setType(e.target.value);
                    }
                }}
            >
                <option selected>Choose the type of member</option>
                <option value="pre">Pre-Tensioned Member</option>
                <option value="post">Post-Tensioned Member</option>
            </select>
            <div>
                {formula}
            </div>
            {(type === "pre") ?
                <>
                    <div className=" flex mx-auto justify-center flex-col max-w-lg">
                        <input
                            className=" bg-slate-200 rounded-3xl m-8 p-2"
                            type="number"
                            // value={es}
                            onChange={(e) => { setEs(e.target.value) }}
                            placeholder="Enter the value of modulus of elasticity of steel in Pa" ></input>
                        <input
                            className=" bg-slate-200 rounded-3xl m-8 p-2"
                            type="number"
                            // value={ec}
                            onChange={(e) => { setEc(e.target.value) }}
                            placeholder="Enter the value of modulus of elasticity of concrete in Pa"></input>
                        <input
                            className=" bg-slate-200 rounded-3xl m-8 p-2"
                            type="number"
                            // value={fc}
                            onChange={(e) => { setFc(e.target.value) }}
                            placeholder="Enter the value of prestress in concrete at the level of steel"></input>
                    </div>
                    <button onClick={calculate} className=" bg-zinc-500 rounded-3xl p-2 font-normal text-white">Calculate Loss</button>



                    {(ans ? <div className="p-4 font-medium text-center text-2xl">Result:</div> : <></>)}
                    <div className=" font-normal text-2xl">{ans}</div>
                </>
                : <></>}


        </div >
    )
}
export default Elastics;
"use client";
import { useState } from "react";

function Shrinkage() {
    const [ec, setEcs] = useState(1);
    const [es, setEs] = useState(1);
    const [T, setT] = useState(1);
    const [type, setType] = useState("");
    const [formula, setFormula] = useState(<></>);
    const [ans, setAns] = useState(0);

    const calculate = () => {
        if (type === "pre") {
            setEcs(0.0003);
            setAns(ec * es);
        }
        if (type === "post") {
            const result = (2 * Math.pow(10, -4)) / Math.log(T + 2);
            setEcs(result)
            setAns(ec * es);
        }
    }
    return (
        <div className=" text-center">
            <h1 className=" font-semibold p-4 text-xl">Calculating the prestress loss due to Shrinkage</h1>

            <select
                className=" bg-slate-200 rounded-3xl m-8 p-2"

                value={type}
                onChange={(e) => {
                    if (e.target.value === "pre") {
                        setFormula(<div>
                            <h1 className="p-2 text-xl">Formula</h1>
                            <div className="p-4">Shrinkage Loss = Ecs X Es</div>
                            <div> Ecs = 3*10^-4</div>
                        </div>)
                        setType(e.target.value);
                    } else {
                        setFormula(
                            <div>
                                <h1 className="p-2 text-xl">Formula</h1>
                                <div className="p-4">Shrinkage Loss = Ecs X Es</div>
                                <div>Ecs = (2*10^-4)/(log(T+2))</div>
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

            <div className=" flex mx-auto justify-center flex-col max-w-lg">

                <input
                    className=" bg-slate-200 rounded-3xl m-8 p-2"
                    type="number"
                    // value={es}
                    onChange={(e) => { setEs(e.target.value) }}
                    placeholder="Enter the value of modulus of elasticity of steel in Mpa" ></input>

                {(type === "pre" ? <></> : <>
                    <input
                        className=" bg-slate-200 rounded-3xl m-8 p-2"
                        type="number"
                        // value={ec}
                        onChange={(e) => { setT(e.target.value) }}
                        placeholder="Enter the age of Concrete in Days (T)"></input>
                </>)}

            </div>
            <button onClick={calculate} className=" bg-zinc-500 rounded-3xl p-4 font-semibold text-white">Calculate Loss</button>

            {(ans ? <div className="p-4 font-medium text-center text-2xl">Result:</div> : <></>)}
            <div className=" font-normal text-2xl">{ans}</div>        </div >
    )
}
export default Shrinkage;
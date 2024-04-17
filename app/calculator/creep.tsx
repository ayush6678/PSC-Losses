"use client";
import { useState } from "react";

function Creep() {

    const [es, setEs] = useState(1);
    const [ecc, setEcc] = useState(1);
    const [fc, setFc] = useState(1);
    const [ans, setAns] = useState();

    const calculate = () => {
        setAns(es * ecc * fc);
    }
    return (
        <div className=" text-center">
            <h1 className=" font-semibold p-4 text-xl">Calculating the prestress losses due to Creep of Concrete</h1>

            <div>
                <h1 className="p-2 text-xl">Formula</h1>
                <div className="p-4">Loss = Ecc X Fc X Es</div>
            </div>
            <div className=" flex mx-auto justify-center flex-col max-w-lg">
                <input
                    className=" bg-slate-200 rounded-3xl m-8 p-2"
                    type="number"
                    // value={es}
                    onChange={(e) => { setEs(e.target.value) }}
                    placeholder="Enter the value of modulus of elasticity of steel" ></input>
                <input
                    className=" bg-slate-200 rounded-3xl m-8 p-2"
                    type="number"
                    // value={ec}
                    onChange={(e) => { setEcc(e.target.value) }}
                    placeholder="Enter the value of ultimate creep strain"></input>
                <input
                    className=" bg-slate-200 rounded-3xl m-8 p-2"
                    type="number"
                    // value={fc}
                    onChange={(e) => { setFc(e.target.value) }}
                    placeholder="Enter the compressive stress in concrete"></input>
            </div>
            <button onClick={calculate} className=" bg-zinc-500 rounded-3xl p-4 font-semibold text-white">Calculate Loss</button>

            {(ans ? <div className="p-4 font-medium text-center text-2xl">Result:</div> : <></>)}
            <div className=" font-normal text-2xl">{ans}</div>
        </div >
    )
}
export default Creep;
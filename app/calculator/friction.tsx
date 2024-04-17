"use client";
import { useState } from "react";

function Friction() {

    const [u, setU] = useState(1);
    const [a, setA] = useState(1);
    const [k, setK] = useState(1);
    const [x, setX] = useState(1);
    const [po, setPo] = useState(1);

    const [ans, setAns] = useState();

    const calculate = () => {
        setAns(po * ((u * a) + (k * x)));
    }
    return (
        <div className=" text-center">
            <h1 className=" font-semibold p-4 text-xl">Calculating the prestress losses due to Friction</h1>

            <div>
                <h1 className="p-2 text-xl">Formula</h1>
                <div className="p-4">Loss = Po ( ua + kx )</div>
                <div>Only found in Post-tensioned members</div>
            </div>
            <div className=" flex mx-auto justify-center flex-col max-w-lg">
                <input
                    className=" bg-slate-200 rounded-3xl m-8 p-2"
                    type="number"
                    // value={es}
                    onChange={(e) => { setPo(e.target.value) }}
                    placeholder="Enter the value of prestress in force (Po)" ></input>
                <input
                    className=" bg-slate-200 rounded-3xl m-8 p-2"
                    type="number"
                    // value={ec}
                    onChange={(e) => { setU(e.target.value) }}
                    placeholder="Enter the value of coefficient of friction (u)"></input>
                <input
                    className=" bg-slate-200 rounded-3xl m-8 p-2"
                    type="number"
                    // value={fc}
                    onChange={(e) => { setA(e.target.value) }}
                    placeholder="Enter the value of cumulative angel in radian (a)"></input>
                <input
                    className=" bg-slate-200 rounded-3xl m-8 p-2"
                    type="number"
                    // value={fc}
                    onChange={(e) => { setK(e.target.value) }}
                    placeholder="Enter the value of friction coefficient for wave effect (k)"></input>
                <input
                    className=" bg-slate-200 rounded-3xl m-8 p-2"
                    type="number"
                    // value={fc}
                    onChange={(e) => { setX(e.target.value) }}
                    placeholder="Enter the value of distance in meters (x)"></input>
            </div>
            <button onClick={calculate} className=" bg-zinc-500 rounded-3xl p-4 font-semibold text-white">Calculate Loss</button>

            {(ans ? <div className="p-4 font-medium text-center text-2xl">Result:</div> : <></>)}
            <div className=" font-normal text-2xl">{ans}</div>
        </div >
    )
}
export default Friction;
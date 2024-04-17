"use client";
import { useState } from "react";

function Anchorage() {

    const [p, setP] = useState(1);
    const [a, setA] = useState(1);
    const [type, setType] = useState("");
    const [formula, setFormula] = useState(<></>);
    const [ans, setAns] = useState(0);

    const calculate = () => {
        setAns(p/a);
    }
    return (
        <div className=" text-center">
            <h1 className=" font-semibold p-4 text-xl">Calculating the prestress losses due to Anchorage Slip</h1>

            <select
                className=" bg-slate-200 rounded-3xl m-8 p-2"

                value={type}
                onChange={(e) => {
                    if (e.target.value === "pre") {
                        setFormula(<div>
                            <h1 className="p-2 text-xl">In Pre-Tensioning</h1>
                            <div className="p-4">Loss in prestress due to anchorage slip is more in short members than long.</div>
                        </div>)
                        setType(Number(e.target.value));
                    } else {
                        setFormula(
                            <div>
                                <h1 className="p-2 text-xl">In Post-Tensioning</h1>
                                <div className="p-4">Loss: P/A = Es *( 𐤃 / L )</div>
                                <div className="p-4">𐤃 = P*L/A*Es</div>

                            </div>
                        );
                        setType(Number(e.target.value));
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
            {(type === "post") ?
                <>
                    <div className=" flex mx-auto justify-center flex-col max-w-lg">
                       
                        <input
                            className=" bg-slate-200 rounded-3xl m-8 p-2"
                            type="number"
                            // value={fc}
                            onChange={(e) => { setA(Number(Number(e.target.value))) }}
                            placeholder="Enter the value of cross-sectional area"></input>
                            <input
                            className=" bg-slate-200 rounded-3xl m-8 p-2"
                            type="number"
                            // value={fc}
                            onChange={(e) => { setP(Number(Number(e.target.value))) }}
                            placeholder="Enter the value of prestressing force"></input>
                    </div>
                    <button onClick={calculate} className=" bg-zinc-500 rounded-3xl p-2 font-normal text-white">Calculate Loss</button>



                    {(ans ? <div className="p-4 font-medium text-center text-2xl">Result:</div> : <></>)}
                    <div className=" font-normal text-2xl">{ans}</div>
                </>
                : <></>}


        </div >
    )
}
export default Anchorage;
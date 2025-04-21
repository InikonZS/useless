import React, { useState } from "react"
import { LevelResult } from "../levelResult/levelResult";

interface IGameFieldProps{
    levelId: number,
    onExit: ()=>void,
}

export const GameField = ({levelId, onExit}: IGameFieldProps)=>{
    const [result, setResult] = useState(null);
    return <div className="GameField">
        level {levelId}
        <div onClick={()=>{
            setResult(true);
        }}>exit</div>
        {result !=null && <LevelResult result={result} onExit={()=>onExit()}></LevelResult>}
    </div>
}
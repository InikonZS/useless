import React, { useEffect, useState } from "react";
import {MainMenu} from "./components/mainMenu/mainMenu";
import {GameField} from "./components/gameField/gameField";
import "./style.css";

export function App(){
    const [level, setLevel] = useState<number>(null);
    return <>
        {level == null && <MainMenu onLevelClick={(levelId)=>{
            setLevel(levelId);
        }}></MainMenu>}
        {level != null && <GameField levelId={level} onExit={()=>setLevel(null)}></GameField>}
    </>
}
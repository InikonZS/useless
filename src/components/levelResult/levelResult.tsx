import React from "react"

interface ILevelResultProps{
    result: any,
    onExit: ()=>void
}

export const LevelResult = ({result, onExit}: ILevelResultProps)=>{
    return <div className="LevelResult">
        <div onClick={()=>{onExit()}}>main menu</div>
    </div>
}
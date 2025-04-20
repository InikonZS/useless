import React from "react"

export const Level1 = ({onComplete}: {onComplete: ()=>void})=>{
    return <div>
        <div onClick={()=>onComplete()}>click</div>
    </div>
}
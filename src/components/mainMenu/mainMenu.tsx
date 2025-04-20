import React from "react";
import { GoodScroll } from "../goodScroll/GoodScroll";
import "./mainMenu.css";

interface IMainMenuProps{

}

export const MainMenu = ({}: IMainMenuProps)=>{
    const levels = new Array(20).fill(null).map((it, i)=>({name: i.toString()}));
    return <div className="MainMenu">
        <div className="MainMenu_header">
            <div className="MainMenu_player">
                <div className="MainMenu_player_avatar">
                
                </div>
                <div className="MainMenu_player_name">
                
                </div>
            </div>
            <div className="MainMenu_stats">
                <div className="MainMenu_resource MainMenu_coins">
                    <div className="MainMenu_resource_icon">
                    
                    </div>
                    <div className="MainMenu_resource_value">
                    
                    </div>
                </div>
                <div className="MainMenu_resource MainMenu_crystals">
                    <div className="MainMenu_resource_icon">
                    
                    </div>
                    <div className="MainMenu_resource_value">
                    
                    </div>
                </div>
            </div>
        </div>
        <GoodScroll>
        <div className="MainMenu_scroll">
            <div className="MainMenu_levels">
                {levels.map(it=>{
                    return <div className="MainMenu_level">{it.name}</div>
                })}
            </div> 
        </div>
        </GoodScroll>
        <div className="MainMenu_buttons">
            <div className="MainMenu_playButton">
                Play
            </div>
        </div>
    </div>
}
import Todoform from "./Todoform"
import Todolist from "./Todolist"
import { useState } from "react"

function Todocondainer() {
    
        const [activityarr,setactivityarr] = useState([
            {
                id:1,
                activity:"Go for walk" 
            },
    
            {
                id:2,
                activity:"Eat breakfast"
            },
    
            {
                id:3,
                activity:"Take a shower"
            }
        ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <Todoform activityarr={activityarr} setactivityarr={setactivityarr}/>
                <Todolist activityarr={activityarr} setactivityarr={setactivityarr}/>
            </div>
        </div>
    )
}

export default Todocondainer
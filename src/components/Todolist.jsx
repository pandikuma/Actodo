import { useState } from "react"
import Todoitem from "./Todoitem"


function Todolist(props) {

    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr

    return (
        <div className=" bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className=" text-2xl font-medium">Todays Activites</h1>
            
            {activityarr.length===0?<p>you haven't added any activity yet</p>:""}

            {
                activityarr.map(function(item,index){
                    return <Todoitem id={item.id} activity={item.activity} index={index} activityarr={activityarr} setactivityarr={setactivityarr}/>
                })
            }
        </div>
    )
}


export default Todolist
import { useLocation } from "react-router-dom"
import Card from "../components/Card"
import Header from "../components/Header"
import Todocondainer from "../components/Todocondainer"


function Landing()
{

    const data = useLocation()
    
    return(
    <div className=" bg-black p-10">
      <div className=" bg-[#EFEFEF] p-10 border rounded-md">
        <Header name={data.state.user}/>

        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Srivilliputhur"} />
          <Card bgcolor={"#FD6663"} title={"May-3"} subtitle={"12:50"} />
          <Card bgcolor={"#FCA201"} title={"Bulid using"} subtitle={"React"} />
        </div>

        <Todocondainer/>
      </div>

    </div>
    )
}

export default Landing
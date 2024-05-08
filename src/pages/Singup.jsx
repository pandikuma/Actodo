import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Singup(props) {


    const users = props.users
    const setusers = props.setusers

    const navigate = useNavigate()
    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()

    function handleUInput(evt)
    {
        setEusername(evt.target.value)
    }

    function handlePInput(evt)
    {
        setEpassword(evt.target.value)
    }

    function Adduser()
    {
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/")
    }

    return (
        <div className=" bg-black p-10">
            <div className=" bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className=" text-3xl font-medium">Hey you</h1>
                <p>Sing up here</p>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" placeholder="Username" 
                    className=" w-52 border-black p-1 bg-transparent border rounded-md" onChange={handleUInput} />
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" placeholder="Possword" 
                    className=" w-52 border-black p-1 bg-transparent border rounded-md"  onChange={handlePInput}/>
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" placeholder="Conformpassword" 
                    className=" w-52 border-black p-1 bg-transparent border rounded-md" />

                    <button className=" bg-[#8272DA] w-24 p-1 rounded-md" onClick={Adduser}>
                        Sing Up
                    </button>

                    <p>Alreaty have account? <Link to={"/"} className=" underline">Login</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Singup
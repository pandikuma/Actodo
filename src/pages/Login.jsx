import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props) {
    const navigate = useNavigate()
    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()

    const [ruser, setRuser] = useState(true)

    const users = props.users


    function handleUInput(evt) {
        setEusername(evt.target.value)
    }

    function handlePInput(evt) {
        setEpassword(evt.target.value)
    }

    function checkuser() {

        var userfound = false

        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("login succses")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
        })

        if (userfound === false)
            console.log("failed")
        setRuser(false)
    }



    return (
        <div className=" bg-black p-10">
            <div className=" bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className=" text-3xl font-medium">Hey you</h1>
                {ruser ? <p>I help you manage your activity after you logi :)</p> : <p className=" text-red-600">please sing up before you login</p>}

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" placeholder="Username"
                        className=" w-52 border-black p-1 bg-transparent border rounded-md" onChange={handleUInput} />
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" placeholder="Possword"
                        className=" w-52 border-black p-1 bg-transparent border rounded-md" onChange={handlePInput} />
                </div>
                <button className=" bg-[#FCA201] w-24 p-1 rounded-md" onClick={checkuser}>
                    Login
                </button>

                <p>Don't have account? <Link to={"/singup"} className=" underline">Sing up</Link> </p>
            </div>
        </div>
    )
}

export default Login
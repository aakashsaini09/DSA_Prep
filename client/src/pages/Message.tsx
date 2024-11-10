import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { useToast } from "@/hooks/use-toast";
import Loading from "@/components/Loading";
const Message = () => {
    let { id } = useParams()
    const {toast} = useToast()
    const [loading, setloading] = useState(false)
    const [title, settitle] = useState('')
    const sendMessage = async () => {
        setloading(true)
        try {  
            await axios.post(`http://localhost:4000/api/user/addfeed/${id}`, {title: title})
            toast({description: "Message Send Successfully" })
            setloading(false)
            settitle("")
        } catch (error) {
            settitle("")
            toast({variant: 'destructive', description: "Error Occure! Please try again" })
            console.log("Something went wrong. Error: ", error)
            setloading(false)
        }
    }
  return (
    <>
     {loading && <div className="min-h-[100vh] min-w-[100vw] absolute z-10 bg-gray-900 text-white"><Loading/></div>}
    <div className="min-h-[100vh] max-w-[100vw] bg-black overflow-hidden">
        <input value={title} onChange={(e)=> {settitle(e.target.value)}} type="text" className="px-4 py-3 border-2 border-black outline-none bg-red-400 " />
        <Button onClick={sendMessage}>Click to send req</Button>
    </div>
    </>
  )
}

export default Message

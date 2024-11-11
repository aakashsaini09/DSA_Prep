import Loading from '@/components/Loading'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import axios from 'axios'
import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Landing = () => {
  const {toast} = useToast()
  const [loading, setloading] = useState(false)
  const [users, setusers] = useState(Number)
  const getAllusers = async() => {
    setloading(true)
    try {    
        const res = await axios.get('https://anonymous-feedback-ewej.onrender.com/api/auth/getall')
        if (res.data.success) {
          setusers(res.data.users.length)
          console.log(res.data.users.length)
          setloading(false)
        } else {
          toast({ variant: 'destructive', description: res.data.message });
          setloading(false)
        }
      } catch (err) {
        console.log(err)
        setloading(false)
    }
  }
  useEffect(() => {
    getAllusers()
  }, [])
 
  return (
    <>
    {loading && <div className="min-h-[100vh] min-w-[100vw] absolute z-10 bg-gray-900 text-white"><Loading/></div>}
      <div className="min-h-[100vh] w-full bg-black flex flex-col items-center justify-center gap-6 overflow-hidden">
        <nav>
            <ul className='flex w-[100vw] justify-between px-28 pt-7'>
                {/* <li className='text-5xl font-bold text-white'>Logo</li> */}
                <img src={logo} className='h-16 w-16'/>
                <Button asChild variant={'secondary'}>
                    <Link to={'/login'} className='cursor-pointer'>Login/Sign-up</Link>
                </Button>
            </ul>
        </nav>
        <h1 className='font-bold text-gray-100 text-5xl font-serif pt-10'>Get honest feedback, anonymous, truly unfiltered.</h1>
        <p className='text-gray-400 w-3/6 text-lg mb-10'>Sometimes, the most valuable insights are shared anonymously. With our platform, you can invite friends to give you feedback without any pressure or judgment. Share your personal link in Insta/Whatsapp Story, and watch genuine, constructive responses come in—all safely collected in your private dashboard.</p>
        <img src={`/landing.png`} alt='Landing Image' width={450} height={20}/>
        <div>

        </div>
      <div className='text-white text-4xl font-bold bg-black w-full mx-auto flex justify-center items-center text-center overflow-hidden py-24'>Total Users: {users}</div>
      </div>
    </>
  )
}

export default Landing

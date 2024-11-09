import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Landing = () => {
  const {toast} = useToast()
  const [users, setusers] = useState(Number)
  const getAllusers = async() => {
    try {    
        const res = await axios.get('http://localhost:4000/api/auth/getall')
        if (res.data.success) {
          setusers(res.data.users.length)
          console.log(res.data.users.length)
        } else {
            toast({ variant: 'destructive', description: res.data.message });
        }
    } catch (err) {
        console.log(err)
    }
  }
  useEffect(() => {
    getAllusers()
  }, [])
  if(!users){
    return (
      <div className='min-w-[100vw] min-h-[100vh] bg-black text-white text-6xl font-bold text-center flex justify-center'>Loading...</div>
    )
  }
  return (
    <>
      <div className="min-h-[100vh] w-full bg-black flex flex-col items-center justify-center gap-6 overflow-hidden">
        <nav>
            <ul className='flex w-[100vw] justify-between px-28'>
                <li className='text-5xl font-bold text-white'>Logo</li>
                <Button asChild variant={'secondary'}>
                    <Link to={'/login'} className='cursor-pointer'>Login/Sign-up</Link>
                </Button>
            </ul>
        </nav>
        <h1 className='font-bold text-gray-100 text-5xl font-serif pt-10'>Get honest feedback, anonymous, truly unfiltered.</h1>
        <p className='text-gray-400 w-4/6 text-lg mb-10'>Sometimes, the most valuable insights are shared anonymously. With our platform, you can invite friends to give you feedback without any pressure or judgment. Share your personal link, and watch genuine, constructive responses come in—all safely collected in your private dashboard.</p>
        <img src={`/landing.png`} alt='Landing Image' width={450} height={20}/>
      <div className='text-white text-4xl font-bold bg-black w-full mx-auto flex justify-center items-center text-center overflow-hidden'>Total User {users}</div>
      </div>
    </>
  )
}

export default Landing

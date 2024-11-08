"use client"
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from "@/components/ui/label"
import { FiRefreshCw } from "react-icons/fi";
import { FaCopy } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserName } from '@/store/user';
import { useRecoilValue } from 'recoil';
const Feedbacks = () => {
    const name = useRecoilValue(UserName)
    const {toast} = useToast()
    const navigate= useNavigate()
    const userdata = [
        {
            title: 'Your outfit was amazing today.',
            time: 'Jan 22, 2003 02:44 PM'
        },
        {
            title: 'Your outfit was amazing today.',
            time: 'Oct 22, 2003 02:44 PM'
        },
        {
            title: 'Your outfit was amazing today.',
            time: 'Jun 22, 2003 02:44 PM'
        },
        {
            title: 'Your outfit was amazing today.',
            time: 'Dec 22, 2003 02:44 PM'
        },
        {
            title: 'Your outfit was amazing today.',
            time: 'Feb 12, 2003 02:44 PM'
        },
    ]
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/');
        }
    }, [navigate]);

    const copyFunction = () =>{
        let value = 'https://yoururl-1de6d-242.com';
        navigator.clipboard.writeText(value);
        toast({description: "URL copied!!" })
    }
  return (
    <>
      <div className="min-h-[100vh] max-w-[100vw] bg-black overflow-hidden">
        <nav className='w-[100vw]'>
            <ul className='w-[100vw] py-5 bg-gray-600 flex justify-between items-center px-8'>
            <li className='text-4xl font-bold text-white'>Logo</li>
                <li className='text-xl font-bold text-gray-200'>Welcome {!name ? 'User' : name}</li>
                <Button variant={'secondary'}>Logout</Button>
            </ul>
        </nav>
        <div className="link px-44 pt-10">
            <h1 className='text-5xl text-white font-extrabold py-2'>User Dashboard</h1>
            <p className='text-base text-gray-300'>Copy Your Unique URL and Share with friends</p>
            <div className="w-full flex justify-between items-center bg-gray-950 rounded-lg pr-4">
                <div className="text-white underline px-2 py-3 rounded-sm text-xl">https://yoururl-1de6d-242.com</div>
                <Button className='text-base' variant={'secondary'} onClick={copyFunction}>Copy <FaCopy /></Button>
            </div>
            <div className='flex items-center pt-5'>
                <Switch id='accept-msg'/>
                <Label className='text-gray-300 pl-3' htmlFor="accept-msg">Accept Messages: ON</Label>
            </div>
            <div className="py-10">
                <Button variant="default" size="icon">
                    <FiRefreshCw />
                </Button>
            </div>
        </div>
        <div className="feedbacks grid grid-cols-2 px-40">
            {userdata.map((feed, index) => {
                return <div key={index} className="border border-gray-700 mx-4 my-5 min-h-48 rounded-md flex flex-col justify-center pl-5">
                    <div className='flex justify-between'>
                        <div className="title text-white text-3xl font-semibold mb-6">{feed.title}</div>
                        <Button variant={'destructive'} className='text-white mr-3'>X</Button>
                    </div>
                    <div className="time font-normal text-gray-400">{feed.time}</div>
                </div>
            })}
        </div>
      </div>
    </>
  )
}

export default Feedbacks

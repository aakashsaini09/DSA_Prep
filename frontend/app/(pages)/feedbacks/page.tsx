import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from "@/components/ui/label"
import { FiRefreshCw } from "react-icons/fi";
import React from 'react'
const page = () => {
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
  return (
    <>
      <div className="min-h-[100vh] min-w-[100vw] bg-black">
        <nav>
            <ul className='w-[100vw] py-5 bg-gray-600 flex justify-between items-center px-8'>
            <li className='text-4xl font-bold text-white'>Logo</li>
                <li className='text-xl font-bold text-gray-200'>Welcome Aakash Saini</li>
                <Button variant={'secondary'}>Logout</Button>
            </ul>
        </nav>
        <div className="link px-44 pt-10">
            <h1 className='text-5xl text-white font-extrabold py-2'>User Dashboard</h1>
            <p className='text-base text-gray-300'>Copy Your Unique URL and Share with friends</p>
            <div className="w-full flex justify-between items-center">
                <div className="text-white underline px-2 py-3 rounded-sm text-xl">https://yoururl-1de6d-242.com</div>
                <Button className='text-lg' variant={'secondary'} size={'lg'}>Copy</Button>
            </div>
            <div className='flex items-center '>
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
                    <div className="title text-white text-3xl font-semibold mb-6">{feed.title}</div>
                    <div className="time font-normal text-gray-400">{feed.time}</div>
                </div>
            })}
        </div>
      </div>
    </>
  )
}

export default page

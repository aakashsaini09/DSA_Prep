"use client"
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from "@/components/ui/label"
import { FiRefreshCw } from "react-icons/fi";
import { FaCopy } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast"
import { useEffect, useState } from 'react';
import logo from '../../public/logo.png'
import { useNavigate } from 'react-router-dom';
import noMsgImg from '../assets/6763390.webp'
import { UserName } from '@/store/user';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import Loading from '@/components/Loading';
import Footer from '@/components/Footer';
const Feedbacks = () => {
    const name = useRecoilValue(UserName)
    const {toast} = useToast()
    const navigate= useNavigate()
    const [loading, setloading] = useState(false)
    const [userdata, setuserdata] = useState<any>([])
    let id = localStorage.getItem('id')
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/');
        }
    }, [navigate]);


    const getUserFeeds = async() => {
        setloading(true)
        const token = localStorage.getItem('token')
        try {    
            const res = await axios.post('https://anonymous-feedback-ewej.onrender.com/api/user/getuserfeed', { id: localStorage.getItem('id') }, 
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            if (res.data.success) {
                setuserdata(res.data.feeds)
                // console.log(res.data.feeds)
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
        getUserFeeds()
    }, [])
    


    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        navigate('/')
    }


    const copyFunction = () =>{
        navigator.clipboard.writeText(userURL);
        toast({description: "URL copied!!" })
    }


    // /api/user/deleteuserfeed
    const deleteFeed = async(id: string) => {
      setloading(true)
        const token = localStorage.getItem('token')
        try {    
            const res = await axios.delete('https://anonymous-feedback-ewej.onrender.com/api/user/deleteuserfeed',  
            {
              headers: {
                Authorization: `Bearer ${token}`,
                id: id
              },
            })
            if (res.data.success) {
              setloading(false)
              toast({ variant: 'default', description: 'Message Deleted Successfully!'})
              getUserFeeds()
            } else {
                toast({ variant: 'destructive', description: res.data.message });
                setloading(false)
              }
            } catch (err) {
              console.log(err)
              setloading(false)
        }
    }


    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.toLocaleString("en-GB", { month: "short" });
      const year = date.getFullYear();
  
      return `${day} ${month}, ${year}`;
  };
  let URL = 'https://anonymous-feedbacks.netlify.app/'
  let endpoint = 'message/'

  const userURL = `${URL}${endpoint}${id}`
  // http://localhost:5173/message/672efbcc32518b1efa8e28d5
  const [selectedFeed, setSelectedFeed] = useState<any | null>(null);

  const openFeed = (feed: any) => {
    setSelectedFeed(feed);
  };

  const closeFeed = () => {
    setSelectedFeed(null);
  };

  return (
    <>
     {loading && <div className="min-h-[100vh] min-w-[100vw] absolute z-10 bg-gray-900 text-white"><Loading/></div>}
    
      <div className="min-h-[100vh] max-w-[100vw] pb-10 bg-black overflow-hidden">
        <nav className='w-[100vw]'>
            <ul className='w-[100vw] py-5 bg-purple-800 flex justify-between items-center px-8'>
            <img src={logo} className='h-16 w-16'/>
            <li className='text-xl font-bold text-gray-200'>Welcome {!name ? 'User' : name}</li>
            <Button variant={'secondary'} onClick={logOut} className='bg-red-600 text-white hover:bg-red-700'>Logout</Button>
            </ul>
        </nav>
        <div className="link px-44 pt-10">
            <h1 className='text-5xl text-white font-extrabold py-2'>User Dashboard</h1>
            <p className='text-base text-gray-300'>Copy Your Unique URL and Share with friends</p>
            <div className="w-full flex justify-between items-center bg-gray-950 rounded-lg pr-4">
                <div className="text-white underline px-2 py-3 rounded-sm text-xl">{userURL}</div>
                <Button className='text-base bg-purple-600 hover:bg-purple-700 text-white' variant={'secondary'} onClick={copyFunction}>Copy <FaCopy /></Button>
            </div>
            <div className='flex items-center pt-5'>
                <Switch id='accept-msg'/>
                <Label className='text-gray-300 pl-3' htmlFor="accept-msg">Accept Messages: ON</Label>
            </div>
            <div className="py-10">
                <Button variant="default" size="icon" onClick={getUserFeeds}>
                    <FiRefreshCw />
                </Button>
            </div>
        </div>
        <div className="feedbacks grid grid-cols-2 px-40">
            {userdata.length === 0 ? <div className='w-[80vw] mx-auto my-0'>
              <img src={noMsgImg} className='mx-auto flex items-center' width={300} alt="" />
              <div className='text-4xl font-bold text-white text-center font-mono'>No Messages Yet!!</div>
            </div> : userdata.slice().reverse().map((feed: any) => {
                return <div key={feed._id} className="border border-gray-700 mx-4 my-5 min-h-48 rounded-md flex flex-col justify-center pl-5 min-w-80">
                    <div className='flex justify-between'>
                        <div onClick={() => openFeed(feed)} className="cursor-pointer text-white text-2xl font-semibold mb-6">{feed.title.length > 20 ? `${feed.title.slice(0, 31)}...` : feed.title}</div>
                        <Button className='text-white hover:text-red-600 mr-3 bg-transparent border border-white hover:bg-transparent ml-2 hover:border-red-600' onClick={() => deleteFeed(feed._id)}><i className="fa-solid fa-trash "></i></Button>
                    </div>
                    <div className="time font-normal text-gray-400">{formatDate(feed.createdAt)}</div>
                </div>
            })}

            {/* Exp code */}
             {/* Full-screen modal for selected card */}
      {selectedFeed && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-2xl z-50">
          <div className="bg-slate-900 rounded-lg p-8 w-[70vw] h-[70vh] text-white relative overflow-y-auto">
            <button
              onClick={closeFeed}
              className="absolute top-3 right-3 text-3xl text-white hover:text-red-600"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedFeed.title}</h2>
            <p className="text-lg mb-6">{selectedFeed.description}</p>
            <div className="text-gray-400 font-normal">
              {formatDate(selectedFeed.createdAt)}
            </div>
          </div>
        </div>
      )}
        </div>
        {/* <Link className='text-white w-full flex mx-auto justify-center items-center py-4 text-center' to={'http://localhost:5173/message/672efbcc32518b1efa8e28d5'}>FeedBack for Developer</Link> */}
      </div>
      <Footer/>
    </>
  )
}

export default Feedbacks

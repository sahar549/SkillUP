"use client"
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import Link from 'next/link';
import React, { useContext } from 'react'

const Addcourse = () => {
    const {user} =  useUser();
    const{userCourseList, setUserCourseList} = useContext(UserCourseListContext)
    
    console.log(userCourseList?.length);
  const isAdmin = user?.primaryEmailAddress?.emailAddress == 'toriisahar@gmail.com';
  const hasCourseLimit = userCourseList?.length >= 100;
  const destination = isAdmin || !hasCourseLimit ? '/create-course' : '/dashboard';
    
  return (
    <div  className='flex justify-between items-center'>
        <div>
            <h2 className='text-xl'>Hello, <span className='font-bold'> {user?.fullName} </span> </h2>
            <p className='text-sm text-gray-500'>Create new Language course with Ai.</p>
        </div>

        <Link href={destination}>
        <Button variant="startButton">+ Create course</Button>
        </Link>
        
    </div>
  )
}

export default Addcourse
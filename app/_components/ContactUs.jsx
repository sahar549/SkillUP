"use client"
import Head from 'next/head'
import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'


import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } =useForm()
  const onSubmit =  (e) => {
 
    
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
     
      toast.error(`Something went wrong, Please try Again ${name} `);
   
  }
  return (
    <>
    <Header/>
    
    </>
  )
}

export default ContactUs
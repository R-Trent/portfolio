import React, { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import emailjs from 'emailjs-com'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_70qv7cq'
      const templateId = 'template_m14750l'
      const templateParams = {
        name,
        email,
        subject,
        message,
      }

      if (templateParams.subject == '') {
        templateParams.subject = `New Message from ${name}`
      }

      emailjs
        .send(serviceId, templateId, templateParams)
        .then((response) => console.log(response))
        .then((error) => console.log(error))

      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setEmailSent(true)
      setTimeout(function () {
        setEmailSent(false)
      }, 7000)
    } else {
      alert('Please fill in all fields before you submit your message.')
    }
  }

  emailjs.init('KvdKNYv9b2kTSAIug')

  return (
    <>
      <PageSEO title={`Contact | ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact
          </h1>
        </div>
        <div className="flex w-full items-center justify-center pt-8">
          <div className="top-40 w-full max-w-2xl rounded-3xl border-2 border-gray-200 border-opacity-60 bg-white py-8 px-8 transition duration-500 dark:border-gray-700 dark:bg-gray-800">
            <p className="text-center text-2xl font-bold leading-7 text-gray-700 dark:text-white md:text-3xl">
              Let's chat!
            </p>
            <p className=" contact-form-label font-base text-md mt-4 text-center leading-7 text-gray-700 dark:text-white">
              = required
            </p>
            <div className="mt-4 items-center md:flex">
              <div className="flex flex-col md:w-72">
                <label
                  htmlFor="name"
                  className="contact-form-label-r text-base font-semibold leading-none text-gray-800 dark:text-white"
                >
                  Name
                </label>
                <input
                  arial-label="Please input your name"
                  type="name"
                  className="focus:oultine-none mt-4 rounded-lg border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-400 transition duration-500 focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400"
                  placeholder="John Doe"
                  required
                  value={name}
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mt-4 flex flex-col md:ml-6 md:mt-0 md:w-72">
                <label
                  htmlFor="email"
                  className="contact-form-label-r text-base font-semibold leading-none text-gray-800 dark:text-white"
                >
                  Email Address
                </label>
                <input
                  arial-label="Please input email address"
                  type="email"
                  className="focus:oultine-none mt-4 rounded-lg border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-400 transition duration-500 focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400"
                  placeholder="john@example.com"
                  required
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-8 flex w-full flex-col">
              <label
                htmlFor="subject"
                className="text-base font-semibold leading-none text-gray-800 dark:text-white"
              >
                Subject
              </label>
              <input
                arial-label="Enter a subject (optional)"
                type="text"
                className="focus:oultine-none mt-4 rounded-lg border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-400 transition duration-500 focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400"
                placeholder="Example Subject"
                value={subject}
                id="subject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div>
              <div className="mt-8 flex w-full flex-col">
                <label
                  htmlFor="message"
                  className="contact-form-label-r text-base font-semibold leading-none text-gray-800 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  aria-label="Enter a message"
                  placeholder="Enter your message here..."
                  className="focus:oultine-none mt-4 h-36 resize-y rounded-lg border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-400 transition duration-500 focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400"
                  required
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <button
                className="mt-9 rounded-lg bg-blue-600 py-4 px-8 text-base font-semibold leading-none text-white placeholder-gray-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 dark:hover:bg-blue-500"
                id="submit-button"
                onClick={submit}
              >
                Submit
              </button>
            </div>
            <div className={emailSent ? 'visible' : 'hidden'}>
              <div className={'flex w-full flex-col items-center justify-center pt-8'}>
                <p className="text-2xl font-bold">Thank you for your message!</p>
                <p>I will be in touch as soon as possible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

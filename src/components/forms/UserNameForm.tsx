'use client'
import grabUsername from '@/actions/grabUsername'
import React, { useState } from 'react'
import ArrowRightIcon from '../icons/ArrowRightIcon'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import SubmitButton from '../buttons/SubmitButton'

export default function UserNameForm({ desiredUsername }) {
  const [taken, setTaken] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(formData: FormData) {

    const result = await grabUsername(formData)

    setTaken(result === false)
    if (result) {
      router.push('/account/')
    } else {
      setTaken(true)
    }
  }

  return (
    <div>
      <form action={handleSubmit}>
        <h1 className='text-4xl font-bold text-center mb-2'>
          Elegi tu nombre de usuario
        </h1>
        <p className='text-center mb-6'>
          Como queres que te encuentren
        </p>
        <div className="max-w-xs mx-auto">
          <input
            name="username"
            className="block p-2 mx-auto w-full text-center outline-none mb-4"
            type="text"
            placeholder="username"
            defaultValue={desiredUsername}
          />
          {taken && (
            <div className="bg-red/50 border text-white text-center p-2 mb-2">
              Ese usuario ya existe
            </div>
          )}
          <SubmitButton>
            <span>Quiero este usuario</span>
            <ArrowRightIcon className="w-6" />
          </SubmitButton>
        </div>
      </form>
    </div>
  )
}

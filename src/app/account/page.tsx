
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import UserNameForm from '@/components/forms/UserNameForm'
import { Page } from '@/models/Page'


export default async function Accountpage({ searchParams, ...rest }) {
  // @ts-ignore
  const session = await getServerSession(authOptions)
  const desiredUsername = searchParams.desiredUsername

  if (!session) {
    return redirect('/')
  }

  const page = await Page.findOne({ owner: session?.user?.email })

  if (page) {
    return (
      <div>your page is: /{page.uri}</div>
    )
  }

  return (
    <div>
      <UserNameForm desiredUsername={desiredUsername} />
    </div>
  )
}

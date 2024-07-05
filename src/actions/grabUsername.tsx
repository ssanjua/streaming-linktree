'use server'
import mongoose from "mongoose"
import { Page } from "@/models/Page"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function grabUsername(formData: FormData) { 
  const username = formData.get('username')

  mongoose.connect(process.env.MONGODB_URI)

  const existingPageDoc = await Page.findOne({ 
    uri: username })
  
  if (existingPageDoc) {
    return false
  } else {
    // @ts-ignore
    const session = await getServerSession(authOptions)
    const newPage = await Page.create({ 
      uri: username, 
      owner: session?.user?.email 
    })
    return { exists: false, data: { uri: newPage.uri, owner: newPage.owner } }
  }
}
import { deletePost, getById, updatePost } from "@/lib/data"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
  try {
    const id = req.url.split("blogs/")[1]
    const post = getById(id)
  
    if (!post)
      return NextResponse.json({ message: 'Error' }, { status: 404 })
  
    return NextResponse.json({ message: 'OK', post }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  }
}

export const PUT = async (req: Request) => {
  try {
    const { title, desc } = await req.json()
    const id = req.url.split("blogs/")[1]

    updatePost(id, title, desc)

    return NextResponse.json({ message: 'OK' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  }
}

export const DELETE =async (req: Request) => {
  try {
    const id = req.url.split("blogs/")[1]

    deletePost(id)

    return NextResponse.json({ message: 'OK' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  }
}
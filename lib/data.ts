type Post = {
  id: string
  title: string
  desc: string
  date: Date
}

let posts: Post[] = []

//handlers

export const getPosts = () => posts

export const addPost = (post: Post) => {
  posts.push(post)
}

export const deletePost = (id: string) => {
  posts = posts.filter((post) => post.id !== id)
}

export const updatePost = (id: string, title :string, desc: string) => {
  const post = posts.find((post) => post.id === id)

  if (post) {
    post.title = title
    post.desc = desc
  } else {
    throw new Error('No post found')
  }
}

export const getById = (id: string) => {
  return posts.find((post) => post.id === id)
}
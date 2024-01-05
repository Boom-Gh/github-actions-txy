import request from '@/api/request'
import { Result, ColumnProps, PostDataProps, PostProps } from './types'

export function fetchColumn( cid:string ): Promise<Result<ColumnProps>> {
  return request.get(`/columns/${ cid }`)
}

export function fetchPosts( cid:string ): Promise<Result<PostDataProps>> {
  return request.get(`/columns/${ cid }/posts`)
}

export function fetchPost(cid:string): Promise<Result<PostProps>> {
  return request.get(`/posts/${ cid }`)
}

export function deletePost(cid:string): Promise<Result<PostProps>> {
  return request.delete(`/posts/${ cid }`)
}


export function updatePost( cid:string, data: PostProps): Promise<Result<PostProps>> {
  return request.patch('/posts', data)
}

export function createPost(data: PostProps): Promise<Result<PostProps>> {
  return request.post('/posts', data)
}

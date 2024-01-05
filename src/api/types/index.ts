// 此处data 为error时data不返回， data?是否要设为可选
export interface Result<T = Record<string, never>> {
  code: number,
  data: T
  msg: string,
  error?:string
}
export interface ColumnDataProps {
  data: ListProps<ColumnProps>
  currentPage: number
  total: number 
}
export interface ListProps<P> {
  [id: string]: P
}

export interface ColumnProps {
  _id: string
  title: string
  avatar?: ImageProps
  description: string
}
export interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string;
  fitUrl?: string;
}
export interface UserProps {
  isLogin: boolean;
  nickName?: string;
  _id?: string;
  column?: string;
  email?: string;
  avatar?: ImageProps;
  description?: string;
}

export interface PostDataProps{
  count: number
  list: PostProps[]
  pageSize: number
  currentPage: number
}

export interface PostProps {
  _id?: string;
  title: string;
  excerpt?: string;
  content?: string;
  image?: ImageProps | string;
  createdAt?: string;
  column: string;
  author?: string | UserProps;
  isHTML?: boolean;
}

export interface UserProps {
  isLogin: boolean;
  nickName?: string;
  _id?: string;
  column?: string;
  email?: string;
  avatar?: ImageProps;
  description?: string;
}

interface RuleProp {
  type: 'required' | 'email' | 'custom'
  message: string,
  validator?: ()=> boolean
}
export type RulesProp = RuleProp[]
export type TagType = 'input' | 'textarea'

export interface ResponseType<P = Record<string, never>> {
  code: number;
  msg: string;
  data: P;
}

export interface createPostParams{
  title: string
  content: string
  image: string
  column: string
  author: string
}


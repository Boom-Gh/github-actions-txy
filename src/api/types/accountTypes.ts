// export interface Result<T> {
//   code: number,
//   data?: T
//   msg?: string,
//   error?:string
// }
export interface LoginParams {
  email: string;
  password: string;
}
export interface LoginResData{
  token: string
}
export interface registerData{
  email: string
  password: string
  nickName: string
}
// export interface ImageProps {
//   _id?: string;
//   url?: string;
//   createdAt?: string;
//   fitUrl?: string;
// }
// export interface ColumnProps {
//   id: number
//   title: string
//   avatar: ImageProps
//   description: string
// }

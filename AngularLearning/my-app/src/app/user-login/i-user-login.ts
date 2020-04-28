export interface IUserLogin {
}
export interface IUser{
    username:string,
    password:string
}
export interface IUserToken{
    token:string,
    expiration:Date,
    roles:string
}
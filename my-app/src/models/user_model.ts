export type UserStatus = 'admin' | 'subscriber' | 'customer';

export interface UserListData {
    id: string,
    status?: UserStatus[],
    username: string,
    name: string,
    avatar: string,
    email: string,
    location: string,
    role: string,
    posts: string,
    jobtitle: string,
    coverImg: string,
    followers: string,
    description: string
}
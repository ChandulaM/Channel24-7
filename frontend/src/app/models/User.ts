export interface UserDTO {
    username: string,
    email: string,
    password: string,
    role: string
}

export interface User {
    id: number,
    password: string,
    username: string,
    role: string
}

export interface UserRsults {
    results: User
}
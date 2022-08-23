import instance from "./instance";

export const createUser = (data:any) => {
    const url = "/users"
    return instance.post(url, data)
}
export const signin = (data:any) => {
    const url = "/signin"
    return instance.post(url, data)
}

export const getUser = (id: number) => {
    const url = `/users/${id}`
    return instance.get(url)
}
export const getUsers = () => {
    const url = "/users"
    return instance.get(url)
}

export const deleteUser = (id: number) => {
    const url = `/users/${id}`
    return instance.delete(url)
}

export const updateUser = (data: any) => {
    return instance.put(`/users/${data.id}`,data);
}
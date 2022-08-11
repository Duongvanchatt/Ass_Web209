import instance from "./instance";

export const createUser = (data:any) => {
    const url = "/users"
    return instance.post(url, data)
}

export const getUser = () => {
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
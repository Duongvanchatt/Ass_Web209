import instance from "./instance";


export const getCategories = () => {
    const url = "/categories"
    return instance.get(url)
}

export const getCate = (id:undefined | string) => {
    const url = `/categories/${id}`
    return instance.get(url)
}

export const createCate = (data:any) => {
    const url = "/categories"
    return instance.post(url, data)
}

export const deleteCate = (id: number) => {
    const url = `/categories/${id}`
    return instance.delete(url)
}

export const updateCate = (data: any) => {
    return instance.put(`/categories/${data.id}`,data);
}
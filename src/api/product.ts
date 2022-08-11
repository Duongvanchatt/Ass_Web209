import instance from "./instance";


export const getAll = () => {
    const url = "/products"
    return instance.get(url)
}

export const getPro = (id:undefined | string) => {
    const url = `/products/${id}`
    return instance.get(url)
}

export const createProduct = (data:any) => {
    const url = "/products"
    return instance.post(url, data)
}

export const deleteProduct = (id: number) => {
    const url = `/products/${id}`
    return instance.delete(url)
}

export const updateProduct = (data: any) => {
    return instance.put(`/products/${data.id}`,data);
}
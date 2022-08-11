
interface IAction {
    type: string,
    payload: any
}

const initialValue = {
    cart: [],
    total: 0
}

const rootReducer = (state = initialValue, action: IAction) => {
    switch (action.type) {
        case "cart/add":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state
    }
}

export default rootReducer;
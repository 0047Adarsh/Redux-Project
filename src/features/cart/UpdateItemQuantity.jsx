import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice"
import { useSelector } from "react-redux"
import { getCurrentQuantityById } from "./cartSlice"

function UpdateItemQuantity({ pizzaId }) {
    const dispatch = useDispatch();
    const itemQuantity = useSelector(getCurrentQuantityById(pizzaId));
    return (
        <div className="flex gap-1 items-center md:gap-3">
            <Button type="round" onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <span className="px-2">{itemQuantity}</span>
            <Button type="round" onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity

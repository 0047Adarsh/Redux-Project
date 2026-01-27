import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import { getCurrentQuantityById } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const {id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const quantity = useSelector(getCurrentQuantityById(id));
  const dispatch = useDispatch();
  const isPresentInCart = quantity > 0;


  function handleClick() {
    const newItem = {
      pizzaId: id,
        name,
        quantity: 1,
        unitPrice,
        totalPrice: unitPrice * 1,
    }
    dispatch(addItem(newItem));    
  }

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}/>
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}

          {isPresentInCart && <div className="flex items-centre gap-3 sm:gap-8"> <UpdateItemQuantity pizzaId={id} /> <DeleteItem pizzaId={id} /></div>}
          {!soldOut && !isPresentInCart && <Button type="small" onClick={handleClick}>Add to Cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

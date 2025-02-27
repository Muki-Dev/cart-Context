import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ShoppingList = () => {
	const { updateCart } = useContext(CartContext);

	const handleAddToCart = (product) => {
		updateCart(product)
	};

	return(
			<div>
				<h2>Shopping List</h2>
				<button onClick={() => handleAddToCart("plante 1")}>Ajouter Plante 1</button>
			</div>
		)
}

export default ShoppingList;
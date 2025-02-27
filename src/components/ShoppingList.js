import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/styles.css';

const ShoppingList = () => {
	const { updateCart } = useContext(CartContext);

	const handleAddToCart = (product) => {
		updateCart(product)
	};

	return(
			<div className='container'>
				<h2>Shopping List</h2>
				<button onClick={() => handleAddToCart("Monstera")}>Ajouter Une Plante</button>
			</div>
		)
}

export default ShoppingList;
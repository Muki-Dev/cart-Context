import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
	const { cart } = useContext(CartContext);

	return(
			<div>
				<h2>Panier</h2>
				{
					cart.length === 0 
					? (<p>Le panier est vide</p>)
					: (<ul>
						{cart.map((item,index) => <li key={index}>{item}</li>)}
					</ul>)
					
				};
			</div>
		)
}

export default Cart;

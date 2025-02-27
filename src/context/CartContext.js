import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
	const [cart, setCart] = useState([]);

	const updateCart = (product) => {
		setCart((prevCart) => [...prevCart,product]);
	};

	return(
			<CartContext.Provider value={{cart,updateCart}}>
				{children}
			</CartContext.Provider>
		)
} 
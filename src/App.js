 import { CartProvider } from './context/CartContext';
 import ShoppingList from './components/ShoppingList';
 import Cart from './components/Cart';

 function App(){
  return(
      <CartProvider>
          <h1>Liste de Panier</h1>
          <ShoppingList />
          <Cart />
      </CartProvider>
    )
 }

 export default App;
 import { CartProvider } from './context/CartContext';
 import ShoppingList from './components/ShoppingList';

 function App(){
  return(
      <CartProvider>
          <h1>Liste de Panier</h1>
          <ShoppingList />
      </CartProvider>
    )
 }

 export default App;
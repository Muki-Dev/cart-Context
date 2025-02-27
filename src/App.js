 import { CartProvider } from './context/CartContext';
 import ShoppingList from './components/ShoppingList';
 import Cart from './components/Cart';
 import './styles/styles.css'

 function App(){
  return(
      <CartProvider>
          <ShoppingList />
          <Cart />
      </CartProvider>
    )
 }

 export default App;
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import MealList from "./components/mealList/MealList";
import { CartContextProvider } from "./context/cart-context";

function App() {
  return (
    <CartContextProvider>
      <Navbar></Navbar>
      <Banner></Banner>
      <MealList></MealList>
    </CartContextProvider>
  );
}

export default App;

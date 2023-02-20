import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Modal from "./Components/Modal";
import CartComponent from "./Components/CartComponent"
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./Features/Cart/CartSlice";

function App() {
  const {cartItems} = useSelector((store)=> store.cart)
  const {isOpen} = useSelector((store)=> store.modal)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <main>
      {isOpen &&
        <Modal/>}
      <Navbar />
      <CartComponent/>
    </main>);
}
export default App;

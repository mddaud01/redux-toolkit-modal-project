import Navbar from "./components/Navbar";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllProducts, setSelectedProducts } from "./store/productSlice";
import ProductList from "./components/ProductList";

export default function App() {
  const dispatch = useDispatch();
  const getApiData = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    const manipulatedData = resp.data.map((user) => {
      if (user.id == 1 || user.id == 3 || user.id == 7) {
        return { ...user, isSelected: true };
      } else {
        return { ...user, isSelected: false };
      }
    });
    dispatch(setAllProducts(manipulatedData));
    dispatch(setSelectedProducts(manipulatedData));
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <ProductList />
    </div>
  );
}

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAllProducts, setSelectedProducts } from "../store/productSlice";

const ModalList = ({ handleClose }) => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.Products.allProducts);
  const [storeData, setSotoreData] = useState(selector);

  const changeHandle = (id, isSelected) => {
    const changedProps = storeData.map((user) => {
      if (user.id === id) {
        return { ...user, isSelected: !isSelected };
      }
      return user;
    });
    setSotoreData(changedProps);
  };

  const handleSubmit = () => {
    dispatch(setAllProducts(storeData));
    dispatch(setSelectedProducts(storeData));
    handleClose();
  };

  return (
    <>
      <h3>All User List</h3>
      <ul>
        {storeData &&
          storeData.map((user) => {
            return (
              <li key={user.id}>
                <input
                  type="checkbox"
                  id={user.id}
                  checked={user.isSelected}
                  onChange={() => changeHandle(user.id, user.isSelected)}
                />
                <span> {user.name}</span>
              </li>
            );
          })}
      </ul>
      <button onClick={handleSubmit}>Submit </button>
    </>
  );
};
export default ModalList;

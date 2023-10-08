import { useSelector } from "react-redux";

const ProductList = () => {
  const selector = useSelector((store) => store.Products.isSelectedProducts);

  return (
    <>
      <h2>User Product List </h2>
      <ul style={{ listStyle: "none" }}>
        {selector &&
          selector.map((data) => {
            return (
              <li key={data.id}>
                {data.name} {data.email}
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default ProductList;

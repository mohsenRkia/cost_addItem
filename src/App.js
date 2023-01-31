import "./App.css";
import Cost from "./components/Cost";
import AddNewItem from "./components/AddNewItem";

import { useState } from "react";

function App() {
  const data = [
    { id: 1, type: "laptop apple", amount: 3000 },
    { id: 2, type: "laptop asus", amount: 2000 },
    { id: 3, type: "laptop lenovo", amount: 300 },
  ];

  const [product,setProduct] = useState(data)

  const addNewItemHandler = (newItem) => {
    setProduct(prev => [...prev,{...newItem,id: product.length + 1}])
  }

  return (
    <div className="App">

      {product.map((item) => {
        return <Cost key={item.id} arg={item} />;
      })}

      <AddNewItem addItemFunc={addNewItemHandler}/>

    </div>
  );
}

export default App;

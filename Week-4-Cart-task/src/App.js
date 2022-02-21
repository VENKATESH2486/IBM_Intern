import { useState } from "react";
import Basket from "./Components/Basket";
import Header from "./Components/Header";
import Main from "./Components/Main";
import data from "./Data";
import Product from "./Components/Product";


function App(){
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if(exist){
            setCartItems(
                cartItems.map((x) =>
                x.id === product.id ? { ...exist, qty: exist.qty +1} : x
                )
            );
        }
        else{
            setCartItems([...cartItems, { ...product, qty: 1}]);
        }
    };
    return (
        <div className="App">
            <Header></Header>
            <div className="row">
                <Main onAdd={onAdd} products={products}></Main>
                <Basket onAdd={onAdd} cartItems={cartItems}></Basket>
            </div>
        </div>
    );
}
export default App;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api";
import { Cart, FilterSection, Header, Home, HomeSLider } from "../components";
import { Orders } from "./Orders";
import { setAllProducts } from "../context/actions/productActions";

const Main = () => {
  const products = useSelector((state) => state.products);
  const isCart = useSelector((state) => state.isCart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []);

  return (
    <main className="w-screen min-h-screen flex items-center justify-start flex-col bg-homebg">
      <Header />
      <div className="w-full flex flex-col items-start justify-center gap-12">
        <Home />
      </div>

      {isCart && <Cart />}
    </main>
  );
};

export default Main;

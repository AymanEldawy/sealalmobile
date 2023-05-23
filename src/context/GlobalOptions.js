"use client";
import { cartList } from "@/data/dummyData";
import { createContext, useState, useEffect } from "react";

export const GlobalOptions = createContext();

export const GlobalOptionsProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [cart, setCart] = useState();
  const [user, setUser] = useState({
    name: "Monga",
    role: "seller"
  })
  useEffect(() => {
    setCart(cartList)
  }, []);

  const changeUserRole = () => {
    if (user?.role === 'user')
      setUser(prev => { return { ...prev, role: "seller" } })
    else
      setUser(prev => { return { ...prev, role: "user" } })
  }

  const addToCart = (item) => {
    setCart(prev => [...prev, {
      ...item
    }])
  }
  const removeFromCart = (id) => {
    setCart(prev => prev?.filter(item => item?.id !== id))
  }

  const values = { openDrawer, setOpenDrawer, user, changeUserRole, cart, addToCart, removeFromCart, cartLength: cart?.length }
  return (
    <GlobalOptions.Provider value={values}>
      {children}
    </GlobalOptions.Provider>
  );
};

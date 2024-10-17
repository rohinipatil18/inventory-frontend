import React, { useState, useContext } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";

export const Inventory = React.createContext();


export const useInventoryContext = () => useContext(Inventory);

const InventoryProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const queryClient = new QueryClient();

    return (
        <Inventory.Provider value={{items, setItems}}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </Inventory.Provider>
    )
}

export default InventoryProvider;

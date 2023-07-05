import { useState } from "react";

export function useLocalStorage<T>(key:T, intialValue:T|(()=> T)) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : intialValue;
        } catch (error) {
            console.log(error);
            return intialValue;
        }
    }
}
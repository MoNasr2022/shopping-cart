import { useState } from "react";

export function useLocalStorage<T>(key:T, intialValue:T|(()=> T)) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue == null) return JSON.parse(jsonValue)

    })
}
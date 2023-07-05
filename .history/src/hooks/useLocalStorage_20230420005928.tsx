import { useState } from "react";

export function useLocalStorage<T>(key:T, intialValue:T|(()=> T)) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        const j = localStorage.getItem(key)
        if (j == null) return JSON.parse(j)

    })
}
import { useState } from "react";

export function useLocalStorage<T>(key:T, intialValue:T|(()=> T)) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        const jasonva = localStorage.getItem(key)
        if (jasonva == null) return JSON.parse(jasonva)

    })
}
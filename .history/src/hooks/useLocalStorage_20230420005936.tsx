import { useState } from "react";

export function useLocalStorage<T>(key:T, intialValue:T|(()=> T)) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        const json = localStorage.getItem(key)
        if (json == null) return JSON.parse(json)

    })
}
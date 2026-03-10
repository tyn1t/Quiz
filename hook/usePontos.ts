import { useState } from "react";

export function usePonto () {
    
    const [ponto, setPonto] = useState(0)
    const addPonto = () => {
        setPonto(prev => prev + 1)
    }

    const restPonto = () => {
        setPonto(0)
    }

    return {
        ponto,
        restPonto,
        addPonto,
    }
}
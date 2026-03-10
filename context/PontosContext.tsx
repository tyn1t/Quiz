"use client"

import React, { createContext, useContext, useState } from "react"

interface PontoContextProps {
    ponto: number
    addPonto: () => void
}

const PontoContext = createContext<PontoContextProps | null>(null)

export function PontoProvider({ children }: { children: React.ReactNode }) {

    const [ponto, setPonto] = useState(0)

    function addPonto() {
        setPonto(prev => prev + 1)
    }

    return (
        <PontoContext.Provider value={{ ponto, addPonto }}>
        {children}
        </PontoContext.Provider>
    )
}

export function usePontos() {

    const context = useContext(PontoContext)

    if (!context) {
        throw new Error("usePontos deve ser usado dentro do PontoProvider")
    }

    return context
}
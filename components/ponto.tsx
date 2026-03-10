"use client"

import { usePontos } from "@/context/PontosContext"

export function Pontos () {

    const { ponto } = usePontos()
    return (
        <div className="w-40 border-2 border-zinc-400 px-2 py-2 bg-blue-700/30">
            <p>Pontuação: {ponto}</p>
        </div>
    )
}
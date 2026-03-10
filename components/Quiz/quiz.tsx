"use client"
import { usePontos } from "@/context/PontosContext"
import { useState } from "react"

interface Resposta {
    label: string
    alternativa: string
    }

    interface QuizProps {
    pergunta: string
    correta: string
    respostas: Resposta[]
}

export function Quiz() {

    const [indice, setIndice] = useState(0)
    
    const [selecionada, setSelecion] =useState("")
    
    const {ponto, addPonto} = usePontos()
    const [respondido, setRespondido] = useState(false)

    const quiz: QuizProps[] = [
        {
        pergunta: "Brasil foi descoberto em",
        correta: "D",
        respostas: [
            { label: "A", alternativa: "1900" },
            { label: "B", alternativa: "1800" },
            { label: "C", alternativa: "1600" },
            { label: "D", alternativa: "1500" }
        ]
        },
        {
        pergunta: "Independência dos EUA:",
        correta: "D",
        respostas: [
            { label: "A", alternativa: "1900" },
            { label: "B", alternativa: "1800" },
            { label: "C", alternativa: "1600" },
            { label: "D", alternativa: "1776" }
        ]
        }
    ]

    const perguntaAtual = quiz[indice]

    function responder(label: string) {

        if (respondido) return

        setSelecion(label)
        if (label === perguntaAtual.correta) {
            addPonto()
        }

        setRespondido(true)
    }

    function proximaPergunta() {
        setIndice(prev => prev + 1)
        setRespondido(false)
    }

    if (indice >= quiz.length) {
        return (
        <div>
            <h2>Quiz finalizado</h2>
            <p>Pontuação: {ponto} / {quiz.length}</p>
        </div>
        )
    }

    return (
        <div className="border-2 rounded-2xl border-zinc-700 py-4 px-8">

        <h2 className="text-3xl from-indigo-500 font-bold">{perguntaAtual.pergunta}</h2>
        
        <div className="text-zinc-950 font-semibold md:ml-10">
            {perguntaAtual.respostas.map((res) => (

                <button
                key={res.label}
                onClick={() => responder(res.label)}
                style={{
                    display: "block",
                    margin: "10px 0"
                }}
                className={
                    respondido
                        ? res.label === perguntaAtual.correta
                            ? "bg-green-400/30"
                            : res.label === selecionada
                            ? "bg-red-400/30"
                            : ""
                        : ""
                }
                >
                <span className="text-lg">{res.label}) </span>
                {res.alternativa}
                </button>

            ))}
        </div>

        {respondido && (
            <button onClick={proximaPergunta}>
                Próxima pergunta
            </button>
        )}
        </div>
    )
}
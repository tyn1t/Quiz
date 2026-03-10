'use client';

import { useState } from 'react';
import { sendEmail } from '../actions/sendEmail';
import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
    const [status, setStatus] = useState<string | null>(null);
    
    const formRef = React.useRef<HTMLFormElement>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const result = await sendEmail({ formData });

        if (result.success) {
        setStatus('Email enviado com sucesso!');
        event.currentTarget?.reset();
        } else {
        setStatus(result.error || 'Erro ao enviar email');
        }
    };
    
    
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">Contato</h1>
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded shadow"
        >
            <input
                type="text"
                name="name"
                placeholder="Seu nome"
                className="border p-2 rounded"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Seu email"
                className="border p-2 rounded"
                required
            />
            <textarea
                name="message"
                placeholder="Sua mensagem"
                className="border p-2 rounded h-32"
                required
            />
            <button
                type="submit"
                className="bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-600 transition"
                >
                Enviar
            </button>
            {status && <p className="mt-2 text-center">{status}</p>}
        </form>

        <div>
            <Link 
                href='/'
                aria-label='volta para pagena inicial, a home'
                className='rounded-2xl mx-2 py-3 px-16 bg-green-400 text-lg font-bold'
            >
                Volta
            </Link>
        </div>
        </main>
    );
}
'use server';
import nodemailer from 'nodemailer';

interface SendEmailProps {
    formData: FormData;
}

export async function sendEmail({ formData }: SendEmailProps) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    try {
        const name = formData.get('name')?.toString() || '';
        const email = formData.get('email')?.toString() || '';
        const message = formData.get('message')?.toString() || '';

        if (!name || !email || !message) {
        return { success: false, error: 'Todos os campos são obrigatórios' };
        }

        await transporter.sendMail({
            from: email,
            to: process.env.TO_GMAIL, 
            subject: `Mensagem de ${name} - Contato Website`,
            text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
        });

        return { success: true };
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return { success: false, error: 'Falha ao enviar o email' };
    }
}
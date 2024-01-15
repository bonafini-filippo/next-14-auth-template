import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationMail = async (email: string, token: string) => {
    const confirmLink = `${process.env.BASE_URL}/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "verification@fb-development.com",
        to: email,
        subject: "Confirm your email",
        html: `<p>Click <a href="${confirmLink}">here</a> to confierm.</p>`
    })
}
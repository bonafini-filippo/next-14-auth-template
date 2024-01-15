import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationMail = async (email: string, token: string) => {
    const confirmLink = `${process.env.BASE_URL}/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "verification@fb-development.com",
        to: email,
        subject: "Confirm your email",
        html: `<p>Click <a href="${confirmLink}">here</a> to confierm.</p>`
    });
};

export const sendPasswordResetMail = async (email: string, token: string) => {
    const resetLink = `${process.env.BASE_URL}/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: "reset@fb-development.com",
        to: email,
        subject: "Reset your password",
        html: `<p>Click <a href="${resetLink}">here</a> to reset password</p>`
    });
};

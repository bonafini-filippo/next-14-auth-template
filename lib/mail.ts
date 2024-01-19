import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;
const mailDomain = process.env.MAIL_DOMANIN;

export const sendTwoFactorTokenEmail = async (
    email: string,
    token: string
) => {
    await resend.emails.send({
        from: `verification@${mailDomain}`,
        to: email,
        subject: "2FA Code",
        html: `<p> Your 2FA code: ${token}</p>`
    });
};

export const sendVerificationMail = async (email: string, token: string) => {
    const confirmLink = `${domain}/new-verification?token=${token}`;

    await resend.emails.send({
        from: `verification@${mailDomain}`,
        to: email,
        subject: "Confirm your email",
        html: `<p>Click <a href="${confirmLink}">here</a> to confierm.</p>`
    });
};

export const sendPasswordResetMail = async (email: string, token: string) => {
    const resetLink = `${domain}/new-password?token=${token}`;

    await resend.emails.send({
        from: `reset@${mailDomain}`,
        to: email,
        subject: "Reset your password",
        html: `<p>Click <a href="${resetLink}">here</a> to reset password</p>`
    });
};

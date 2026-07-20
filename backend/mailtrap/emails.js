import { mailtrapClient, sender } from "./mailtrap.config.js";
import {
    VERIFICATION_EMAIL_TEMPLATE,
    PASSWORD_RESET_REQUEST_TEMPLATE,
} from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify Your Email - Auth System",
            html: VERIFICATION_EMAIL_TEMPLATE.replace(
                "{verificationCode}",
                verificationToken,
            ),
            category: "Email Verification",
        });
        console.log("Email sent successfully", response);
    } catch (error) {
        console.log("Email sent failed", error.message);
        throw new Error("Failed to send verification email");
    }
};

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "e4e2d5c3-a5b6-4df0-a2d3-03f12f8654ce",
            template_variables: {
                company_info_name: "Auth System",
                name: name,
            },
        });
        console.log("Email sent successfully", response);
    } catch (error) {
        console.log("Email sent failed", error.message);
        throw new Error("Failed to send welcome email");
    }
};

export const sendResetPasswordEmail = async (email, resetURL) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace(
                "{resetURL}",
                resetURL,
            ),
            category: "Forgot Password",
        });
        console.log("Email sent successfully", response);
    } catch (error) {
        console.log("Email sent failed", error.message);
        throw new Error("Failed to send forgot password email");
    }
};

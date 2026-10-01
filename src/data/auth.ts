import type { AuthField, AuthPageContent } from "@/types";

const emailField: AuthField = {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "designer@example.com",
    autoComplete: "email",
};

export const authPages = {
    login: {
        title: "Sign in with ease",
        description:
            "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
        eyebrow: "Sign In",
        heading: "Welcome Back",
        submitLabel: "Sign In",
        showSocial: true,
        fields: [
            emailField,
            {
                name: "password",
                label: "Password",
                type: "password",
                placeholder: "********",
                autoComplete: "current-password",
                minLength: 8,
            },
        ],
        footer: { text: "New user?", linkLabel: "Create an account", href: "/register" },
        cardClassName: "lg:pb-[39px]",
    },
    register: {
        title: "Sign up and come in",
        description:
            "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
        eyebrow: "Create an Account",
        heading: "Welcome to ByteSpace",
        submitLabel: "Continue",
        showSocial: false,
        fields: [
            {
                name: "name",
                label: "Full Name",
                type: "text",
                placeholder: "Jamie Davis",
                autoComplete: "name",
            },
            emailField,
            {
                name: "password",
                label: "Password",
                type: "password",
                placeholder: "********",
                autoComplete: "new-password",
                minLength: 8,
            },
        ],
        footer: { text: "Already have an account?", linkLabel: "Login", href: "/login" },
        cardClassName: "lg:pb-[51px]",
    },
} satisfies Record<string, AuthPageContent>;
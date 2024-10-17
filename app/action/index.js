'use server';

import { createUser, findUserByCredentials } from "@/db/queries";

const { redirect } = require("next/navigation");

async function registerUser(formData) {
    const user = Object.fromEntries(formData);
    const createcd = await createUser(user);
    redirect('/login')
}

async function performLogin(formData) {
    const credential = {};
    credential.email = formData.get('email');
    credential.password = formData.get('password');
    const found = await findUserByCredentials(credential);

    if (found) {
        redirect('/');
    } else {
        throw new Error(`User with email ${'email'} not found`);
    }

}

export {
    performLogin, registerUser
};


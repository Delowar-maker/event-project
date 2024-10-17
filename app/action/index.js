'use server';

import { createUser } from "@/db/queries";

const { redirect } = require("next/navigation");

async function registerUser(formData) {
    const user = Object.fromEntries(formData);
    const createcd = await createUser(user);
    redirect('/login')
}

export {
    registerUser
};


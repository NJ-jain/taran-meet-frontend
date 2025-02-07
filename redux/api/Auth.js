const url = process.env.REACT_APP_BACKEND_URL;

export async function loginUser(email, password) {
    const response = await fetch(`${url}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.status === 200) {
        return data;
    } else {
        throw data; // This will be caught in the thunk as a rejected action
    }
}

// ... existing code ...

export async function registerUser(name, email, password, interest) {
    const response = await fetch(`${url}/api/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, interest }),
    });

    const data = await response.json();
    if (response.status === 200) {
        return { ...data };
    } else {
        throw { message: data.message || "Registration failed" };
    }
}
// Enter Supabase Information
const SUPABASE_URL = 'https://iyzobpamomhqtsgqrmvm.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5em9icGFtb21ocXRzZ3FybXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyODU5MDMsImV4cCI6MTk2Nzg2MTkwM30.GdYfCjbuJD7LEkd_denWfb1xuQeGRk8sRe6SbpV-thg';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {}

export async function checkAuth() {}

export async function redirectIfLoggedIn() {}

export async function logout() {}

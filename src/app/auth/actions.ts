'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { validateRedirectPath } from '@/lib/auth/redirect'

export async function login(formData: FormData) {
    const supabase = await createClient()
    const next = validateRedirectPath(formData.get('next') as string | null, '/dashboard')

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        redirect('/login?error=' + encodeURIComponent('Invalid email or password.') + '&next=' + encodeURIComponent(next))
    }

    revalidatePath('/', 'layout')
    redirect(next)
}

export async function signup(formData: FormData) {
    const supabase = await createClient()
    const next = validateRedirectPath(formData.get('next') as string | null, '/dashboard')

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const fullName = formData.get('fullName') as string

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: fullName,
            },
        },
    })

    if (error) {
        const message = error.message.toLowerCase().includes('already registered')
            ? 'An account with this email already exists.'
            : 'Could not create account. Please try again.'
        redirect('/signup?error=' + encodeURIComponent(message) + '&next=' + encodeURIComponent(next))
    }

    redirect('/signup/confirm')
}

export async function logout() {
    const supabase = await createClient()
    await supabase.auth.signOut()
    revalidatePath('/', 'layout')
    redirect('/')
}

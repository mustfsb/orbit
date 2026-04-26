import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { validateRedirectPath, getSafeOrigin, buildSafeRedirectUrl } from '@/lib/auth/redirect'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')
    const next = validateRedirectPath(searchParams.get('next'), '/dashboard')
    const safeOrigin = getSafeOrigin(request)

    if (code) {
        const supabase = await createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {
            return NextResponse.redirect(buildSafeRedirectUrl(safeOrigin, next))
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(buildSafeRedirectUrl(safeOrigin, '/auth/auth-code-error'))
}

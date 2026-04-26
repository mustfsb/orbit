import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { validateRedirectPath, getSafeOrigin, buildSafeRedirectUrl } from '@/lib/auth/redirect'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type')
    const next = validateRedirectPath(searchParams.get('next'), '/auth/confirmed')
    const safeOrigin = getSafeOrigin(request)

    if (token_hash && type) {
        const supabase = await createClient()
        const { error } = await supabase.auth.verifyOtp({
            type: type as 'signup' | 'recovery' | 'invite' | 'email',
            token_hash,
        })

        if (!error) {
            return NextResponse.redirect(buildSafeRedirectUrl(safeOrigin, next))
        }
    }

    // Return error page
    return NextResponse.redirect(buildSafeRedirectUrl(safeOrigin, '/auth/auth-code-error'))
}

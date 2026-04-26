const DEFAULT_REDIRECT = '/dashboard'
const MAX_REDIRECT_LENGTH = 2048

/**
 * Validates a user-provided redirect path.
 * Only allows same-origin relative paths.
 */
export function validateRedirectPath(
    path: string | null | undefined,
    fallback: string = DEFAULT_REDIRECT
): string {
    if (typeof path !== 'string') {
        return fallback
    }

    const trimmed = path.trim()

    if (
        !trimmed ||
        trimmed.length > MAX_REDIRECT_LENGTH ||
        !trimmed.startsWith('/') ||
        trimmed.startsWith('//') ||
        trimmed.includes('://') ||
        trimmed.includes('\\') ||
        /[\x00-\x1f\x7f]/.test(trimmed)
    ) {
        return fallback
    }

    return trimmed
}

/**
 * Builds a safe redirect URL using a validated origin and path.
 */
export function buildSafeRedirectUrl(origin: string, path: string): string {
    const cleanOrigin = origin.replace(/\/+$/, '')
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    return `${cleanOrigin}${cleanPath}`
}

/**
 * Gets the safe origin for redirects.
 * In development, uses request origin directly.
 * In production, validates X-Forwarded-Host against allowlist.
 */
export function getSafeOrigin(request: Request): string {
    const isLocalEnv = process.env.NODE_ENV === 'development'
    const { origin } = new URL(request.url)

    if (isLocalEnv) {
        return origin
    }

    const forwardedHost = request.headers.get('x-forwarded-host')
    if (
        !forwardedHost ||
        forwardedHost.includes('/') ||
        forwardedHost.includes('?') ||
        forwardedHost.includes('#')
    ) {
        return origin
    }

    if (isTrustedHost(forwardedHost)) {
        return `https://${forwardedHost}`
    }

    console.warn(`[Auth] Rejected untrusted X-Forwarded-Host: ${forwardedHost}`)
    return origin
}

/**
 * Checks if a host is in the trusted allowlist.
 */
function isTrustedHost(host: string): boolean {
    const allowlist = getTrustedHostsAllowlist()
    const hostname = host.split(':')[0].toLowerCase()
    return allowlist.has(hostname)
}

/**
 * Returns set of trusted hostnames from environment.
 */
function getTrustedHostsAllowlist(): Set<string> {
    const hosts = new Set<string>()

    if (process.env.TRUSTED_HOSTS) {
        process.env.TRUSTED_HOSTS.split(',').forEach((h) => {
            const clean = h.trim().toLowerCase()
            if (clean) hosts.add(clean)
        })
    }

    if (process.env.NEXT_PUBLIC_APP_URL) {
        try {
            const url = new URL(process.env.NEXT_PUBLIC_APP_URL)
            hosts.add(url.hostname.toLowerCase())
        } catch {
            // ignore invalid URL
        }
    }

    return hosts
}

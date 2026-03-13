import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Die Funktion MUSS jetzt "proxy" heißen, nicht mehr "middleware"
export function proxy(request: NextRequest) {
  // Deine Logik (z.B. Auth-Check) bleibt gleich
  return NextResponse.next()
}

// Optional: Falls du einen Matcher nutzt, bleibt dieser gleich
export const config = {
  matcher: '/api/:path*',
}

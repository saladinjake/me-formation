import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || 'secret-key-12345');

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Define paths that require auth
    const isProtected = path.startsWith('/admin');
    const isLoginPage = path === '/admin/login';

    const token = request.cookies.get('admin_token')?.value;

    // 1. If trying to access login page while logged in, redirect to admin dashboard
    if (isLoginPage && token) {
        try {
            await jwtVerify(token, SECRET_KEY);
            return NextResponse.redirect(new URL('/admin', request.url));
        } catch (e) {
            // Invalid token, let them stay on login page
        }
    }

    // 2. If trying to access protected route without token, redirect to login
    if (isProtected && !isLoginPage) {
        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }

        try {
            await jwtVerify(token, SECRET_KEY);
        } catch (e) {
            // Token invalid
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};

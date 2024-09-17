'use server';

import { cookies } from 'next/headers';

export async function handleLogin(userId: string, accesToken: string, refreshToken: string){
        cookies().set('session_userid', userId, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // One week
            path: '/'
        });

        cookies().set('session_access_token', accesToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60, // 60 minutes
            path: '/'
        })

        cookies().set('session_refresh_token', accesToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // One week
            path: '/'
        });
}
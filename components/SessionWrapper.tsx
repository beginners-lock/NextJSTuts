'use client';

import { useSession, SessionProvider } from "next-auth/react";

type SessionWrapperProps = {
    children: React.ReactNode
}

export default function SessionWrapper({ children }: SessionWrapperProps){
    const session = useSession();
    
    return(
        <SessionProvider /*session={session}*/>
            {children}
        </SessionProvider>
    );
}
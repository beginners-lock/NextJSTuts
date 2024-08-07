import { handlers } from "@/auth";
export const { GET, POST } = handlers;

/*import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID!,
            clientSecret: process.env.CLIENT_SECRET!
        })
    ],
    callbacks: {
        async session({ session }) {
            /*Do something with the session 
            console.log('Session callback>>');
            console.log(session);
            return session;
        },
        async signIn({ profile }) {
            /*Do somethin 
            console.log('Signin callback>>');
            console.log(profile);
            return true;
        }
    }
});

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };*/
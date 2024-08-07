"use client";
import { useRouter } from "next/navigation";

export default function SigninPage(){
    const router = useRouter();

    return(
        <div className="w-full h-screen p-8 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-10">Signin Page</h1>
            

            <button className="bg-slate-200 py-2 w-32 text-black rounded-lg font-semibold cursor-pointer shadow-lg mb-4" onClick={()=>{ router.push('/'); }}>
                Back to auth
            </button>
        </div>
    );
}
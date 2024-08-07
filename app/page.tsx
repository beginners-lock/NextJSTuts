"use client";

import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-10">Authentication</h1>
      <button className="bg-slate-200 py-2 w-24 text-black rounded-lg font-semibold cursor-pointer shadow-lg mb-8" onClick={()=>{ router.push('/signup'); }}>
        Sign up
      </button>
      <button className="bg-slate-200 py-2 w-24 text-black rounded-lg font-semibold cursor-pointer shadow-lg mb-4" onClick={()=>{ router.push('/signin'); }}>
        Sign in
      </button>
    </main>
  );
}


/**
 * import Image from "next/image";
 * <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src="/next.svg"
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    />
 */
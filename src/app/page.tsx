"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter, redirect } from "next/navigation";
import { SyntheticEvent } from "react";

export default function Home() {
  const router = useRouter();
  async function onSubmit(event: SyntheticEvent) {
    event.preventDefault()
    router.push('/login');
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-r from-orange-400 to-orange-600">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image src="/images/logo.png" alt="Área restrita" width={400} height={225} />

        <div className="flex w-full">
        <Button className="w-full mt-8 h-12 font-bold bg-white text-orange-500" variant="secondary" onClick={onSubmit}>           
            Ir para página de login
          </Button>
        </div>
      </main>
    </div>    
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, LoaderCircleIcon, LogInIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SyntheticEvent, useState } from "react";
import { useRouter, redirect } from "next/navigation";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  async function onSubmit(event: SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false);
      router.push('/');
    }, 1000)
  }


  return (
    <div className="grid grid-cols-1 h-full sm:grid-cols-1 md:grid-cols-2" >
      <div className="relative h-full w-full bg-gradient-to-r from-orange-400 to-orange-600">
        <div className="flex flex-col h-full justify-center items-center">
          <Image src="/images/logo.png" alt="Área restrita" width={400} height={225} />
        </div>
      </div>
      <div className="relative h-full w-full bg-white">
        <div className="flex flex-col h-full justify-center items-start max-w-[550px] mx-auto p-8">
          <h1 className="mb-3 text-4xl font-bold text-orange-600">Faça Login</h1>

          <Label className="block text-sm font-medium text-gray-700 mt-4 mb-1">E-mail: </Label>
          <Input
            className="mb-2 placeholder:font-bold placeholder:text-gray-400"
            id="email"
            placeholder="Digite seu e-mail"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
          />

          <Label className="block text-sm font-medium text-gray-700 mt-4 mb-1">Senha: </Label>
          <div className="relative w-full">
            <Input
              className="mb-2 placeholder:font-bold placeholder:text-gray-400 pr-10" // Ajuste para o ícone
              id="senha"
              placeholder="Digite sua senha"
              type={showPassword ? "text" : "password"} // Altera o tipo com base no estado
              autoCapitalize="none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? <Eye className="w-5 h-8" /> : <EyeOff className="w-5 h-8" />}
            </button>
          </div>

          <div className="w-full text-right">
            <Link href="/login" className="text-orange-500 font-bold">
              Esqueceu sua senha?
            </Link>
          </div>

          <Button className="w-full mt-8 h-12 font-bold" disabled={isLoading} onClick={onSubmit}>
            {isLoading ? <LoaderCircleIcon className="mr-2 animate-spin" />: <LogInIcon className="mr-2" />}            
            Acessar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;

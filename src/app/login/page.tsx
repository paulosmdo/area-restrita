import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Page = () => {
    return ( 
    <div className="grid grid-cols-2 h-full">
        <div className="relative h-full w-full bg-gradient-to-r from-orange-400 to-orange-600">
            <div className="flex flex-col h-full justify-center items-center">
                <Image src="/images/logo.png" alt="Área restrita" width={400} height={225}></Image>
            </div>
        </div>
        <div className="relative h-full w-full bg-white">
            <div className="flex flex-col h-full justify-center items-start max-w-[550px] mx-auto p-8">
                <h1 className="mb-3 text-4xl font-bold text-orange-600">Bem-Vindo</h1>

                <Label className="block text-sm font-medium text-gray-700 mt-4 mb-1">E-mail: </Label>
                <Input className="mb-2" id="email"
                    placeholder="Digite seu e-mail"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"/>

                <Label className="block text-sm font-medium text-gray-700 mt-4 mb-1">Senha: </Label>
                <Input className="mb-2" id="senha"
                    placeholder="Digite sua senha"
                    type="password"
                    autoCapitalize="none"
                    />

                <Button className="w-full mt-6 h-12">
                    <LogInIcon className="mr-2"/>
                    Fazer login
                </Button>
            </div>
        </div>
    </div> 
    );
}
 
export default Page;
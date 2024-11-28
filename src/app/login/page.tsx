import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";

const Page = () => {
    return ( 
    <div className="grid grid-cols-2 h-full">
        <div className="relative h-full w-full bg-gradient-to-r from-orange-400 to-orange-600">
            <div className="flex flex-col h-full justify-center items-center">
                <Image src="/images/logo.png" alt="Área restrita" width={400} height={225}></Image>
            </div>
        </div>
        <div className="relative h-full w-full bg-zinc-800">
            <div className="flex flex-col h-full justify-center items-center max-w-[550px] mx-auto p-8">
                <h1 className="mb-3 text-4xl font-bold text-white">Bem-Vindo</h1>
                <Button className="w-full mt-6">
                    <LogInIcon className="mr-2"/>
                    Fazer login
                </Button>
            </div>
        </div>
    </div> 
    );
}
 
export default Page;
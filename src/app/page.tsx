"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter, redirect } from "next/navigation";
import { SyntheticEvent } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar";
import { Search } from "lucide-react";

export default function Home() {  
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="relative">
              <div className="absolute pointer-events-none select-none left-3 top-2 text-gray-400">
                  <Search className="w-5 h-8"/>
              </div>
              <Input
                className="mb-2 placeholder:font-bold placeholder:left-5 placeholder:text-gray-400 w-auto pl-9"
                id="search"
                placeholder="Pesquisar"
                type="text"
                autoCapitalize="none"
                autoComplete="none"
                autoCorrect="off"
              />
              
            </div>

            
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-gray-100" />
            <div className="aspect-video rounded-xl bg-gray-100" />
            <div className="aspect-video rounded-xl bg-gray-100" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-gray-100 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>     
  );
}

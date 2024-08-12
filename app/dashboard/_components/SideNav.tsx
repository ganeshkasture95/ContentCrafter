'use client'

import { FileClock, Home, Settings, WalletCards } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const SideNav = () => {

  const path = usePathname()


  useEffect(()=>{
    console.log(path)
  })

  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: '/dashboard'
    },
    {
      name: "History",
      icon: FileClock,
      path: '/dashboard/history'
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: '/dashboard/billing'
    },
    {
      name: "Setting",
      icon: Settings,
      path: '/dashboard/setting'
    },
  ]

  return (
    <div className="flex flex-col  h-screen p-5 shadow-sm border">
      
      <div className="flex justify-center mb-4">
        <Image src="/logo.svg" alt="logo" width={90} height={70} />
      </div>

      <hr className="border" />
      <div>
        {MenuList.map((menu, index) => (
          <div className={`flex flex-row  gap-2 mb-2 p-3  hover:bg-primary items-center hover:text-white rounded-lg cursor-pointer mt-5 transition ${path==menu.path &&'bg-primary text-white'}` } key={menu.name} onClick={()=>{}}>
            <menu.icon className=" h-7 w-7"/>
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>

        <div className=" flex-1">

        </div>
      <div className="">
        <div className="flex flex-row  gap-2 mb-2 p-3 items-center  hover:bg-primary hover:text-white rounded-lg cursor-pointer mt-5 transition" >
          <WalletCards className=" h-7 w-7" />
          <h2>Billing</h2>
        </div>
      </div>
    </div>
  )
}

export default SideNav
import { SignedIn, UserButton } from "@clerk/nextjs"
import { Search } from "lucide-react"

const Header = () => {
  return (
    <div className=" flex justify-between p-3 shadow-sm border-b-2 items-center bg-white">
      <div className=" flex gap-2 items-center p-2 border rounded-lg max-w-screen-2xl bg-white">
        <Search/>
        <input type="text" placeholder="Search" className="w-full outline-none"/>
      </div>
      <div className="flex flex-row items-center gap-2 ">
        <h2 className="bg-primary p-1 rounded-full text-white px-4 "> 🔥 Join Membership just for $9.99/Month</h2>
        <div className="p-1 border-primary border-2 rounded-full  px-4" >
          <SignedIn> 
            <UserButton showName />
          </SignedIn>
        </div>
      </div>

      

    </div>
  )
}

export default Header
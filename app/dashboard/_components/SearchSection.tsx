import { Search } from "lucide-react"

const SearchSection = ({
    onSearchInput
}:any) => {
  return (
    <div className="p-10 bg-gradient-to-br from-gray-500 to-gray-900 via-black flex justify-center items-center flex-col rounded-lg mx-4">
        <h2 className=" text-3xl font-bold text-white ">
            Browse all Templates
        </h2>
        <p className="text-white">What would you like to create today?</p>
        <div>
            <div className="flex my-4 bg-white gap p-2 gap-2 rounded-full">
                <Search />
                <input type="text" placeholder="Search" 
                onChange={(event)=>onSearchInput(event.target.value)}
                className=" w-full outline-none  border-none" />
            </div>
        </div>
    </div>
  )
}

export default SearchSection
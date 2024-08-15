import Templates from "@/app/(data)/Templates"
import { useEffect, useState } from "react"
import TemplateCard from "./TemplateCard"


export interface TEMPLATE {
  name: string,
  desc: string,
  icon: string,
  category: string,
  slug: string,
  aiPrompt: string,
  form?: FORM[]
}

export interface FORM {
  label: string,
  field: string,
  name: string,
  required?: boolean
}

const TemplateListSection = ({ userSearchInput }: any) => {

// This is a simple way to search a specific item from a template

  const [templateList, setTemplateList] = useState(Templates)

  useEffect(() => {
    if (userSearchInput) {
      const filteredList = Templates.filter(item => 
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      )
      setTemplateList(filteredList)
    }
    else {
      setTemplateList(Templates)
    }
  }, [userSearchInput])

  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {templateList.map((item: TEMPLATE, index: number) => (
        <TemplateCard {...item} key={index} />
      ))}
    </div>
  )
}

export default TemplateListSection
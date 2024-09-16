import { Popover } from 'flowbite-react'
import React from 'react'

interface IProps {
    label: string,
    src?: string,
    alt?: string,
    custom?: React.ReactNode
}

export default function PopoverComponent(Props: IProps) {
  return (
    <li>
      <Popover content={Props.label} arrow={false} trigger='hover' className='text-[#EEEEEE] bg-[#332C2B] border border-white px-3 text-xl rounded-md' >
        {Props.custom || <img className='w-16' src={Props.src} alt={Props.alt} />}
      </Popover>
    </li>
  )
}

import React, { useState } from 'react'
import { Minus, Plus } from '../icons';

const Collapse = ({title='', content=''}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mb-4 rounded-[10px] transition-all bg-white">
        <button 
            onClick={toggle}
            type="button"
            className="flex justify-between items-center p-4 w-full font-medium text-left text-lg smMax:text-sm text-primary-black font-commissioner" aria-expanded="false">
            <span>{title}</span>
            <span className={`${isOpen ? 'text-secondary' : 'text-gray-400'}`}>
                {isOpen ? <Minus /> : <Plus />}
            </span>
        </button>
        <div aria-labelledby="accordion-collapse-heading-1" className={`${isOpen ? '' : 'h-0 opacity-0 overflow-hidden'}`}>
            <div className="p-5 pt-2 text-base font-normal text-[#3F4959]">
                <p>
                    {content}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Collapse
import React from 'react'
import '@/components/ui/bgPatterns.css'
import { Container } from '@/components/layouts/Container'


function PatternCard({pattern}) {
  return(
    <div className='group'>
      <div className='text-xl'>{pattern}</div>
      <div className='card-zoom flex items-center justify-center m-3 overflow-hidden
       shadow-xl  rounded-2xl  h-[273px] w-[348px]  min-h-[273px] min-w-[348px]
        '>
       <div  className={` ${pattern} card-zoom-image  w-full h-full rounded-md border-5  
         flex items-center justify-center scale-110 ease-in-out
        transform transition-all duration-500 group-hover:scale-100 overflow-hidden
             `}>
            
            </div>
            </div>
    </div>
  )
}

export default function page() {

  var patterns = [];
for (var i = 1; i < 50; i++) {
  patterns.push( <PatternCard key={i} pattern={`pattern${i}`}  />);
}

  return (
    <Container>
    <div className='flex flex-col justify-between items-center'>
    <div className='text-6xl  text-black dark:text-white'>Patterns</div>
    <div className="">
      {/* <div className="container auto-rows-fr grid grid-cols-2 gap-10 list-none md:grid-cols-3"> */}
      <div className=" mx-auto grid grid-cols-1 gap-16  md:grid-cols-2 lg:grid-cols-3">
        { patterns }
        
       
      </div>
    
    </div>
    </div>
    </Container>
  )
}

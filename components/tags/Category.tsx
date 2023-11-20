import Link from 'next/link'
interface Props {
  text: string
}

const colors = {
  tantra: "bg-blue-800 hover:bg-blue-600 font-bold",
  body: "bg-red-800 hover:bg-red-600 font-bold ",
  mind:"bg-green-800 hover:bg-green-600 font-bold ",
  writings:"bg-yellow-700 hover:bg-yellow-500 font-bold",
  yoga:"bg-gray-700 hover:bg-gray-500 font-bold",
    // <span class="bg-yellow-500 font-bold text-white text-center py-1 px-2 text-xs rounded">Warning</span>
    // <span class="bg-purple-400 font-bold text-white text-center py-1 px-2 text-xs rounded">Info</span>
    // <span class="bg-gray-100 font-bold text-gray-800 text-center py-1 px-2 text-xs rounded">Light</span>
    // <span class="bg-gray-800 font-bold text-white text-center py-1 px-2 text-xs rounded">Dark</span>
}

const Category = ({ text }: Props) => {
  
  return (
    <Link
    href={`/category/${text}`}
    className={`
       cursor-pointer lg:text-2xl font-open_sans font-semibold
         max-w-fit no-underline hover:underline
    capitalize  text-[#FB5148]
  `}
  >
    {text}
  </Link>
    // <Link
    //   href={`/category/${text}`}
    //   className={`
    //   ${colors[text]}
    //   tracking-wider rounded-sm py-1 px-4   cursor-pointer
    //       text-xs max-w-fit no-underline
    //   uppercase  text-slate-300 
    // `}
    // >
    //   {text}
    // </Link>
  )
}

export default Category

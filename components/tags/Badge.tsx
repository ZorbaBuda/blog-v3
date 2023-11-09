import Link from 'next/link'
import { slug } from 'github-slugger'
import badges from '@/content/badges.json'

interface Props {
  text: string,
 
}

const Badge = ({ text }: Props) => {

  console.log(badges[text])
  const color = badges[text]
  return (
    <Link
      href={`/category/${slug(text)}`}
       className={`cursor-pointer uppercase py-1 px-2 leading-loose font-semibold rounded ${color} `}
  
     >
       {text}
    </Link>
  )
}

export default Badge


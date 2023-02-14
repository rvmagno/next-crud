import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`
    flex h-screen justify-center items-cente 
    bg-gradient-to-r from-purple-500 to-blue-600
    `}>
      <span className='text-4xl'>Texto</span>
    </div>
  )
}

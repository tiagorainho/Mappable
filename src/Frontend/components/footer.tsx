
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Footer = () => (
    <footer className="px-6">
      <div className = "border-t-2 w-full flex flex-1 justify-center py-4">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aveiro Tech City - {' '}
          <span className="my-auto">
            <Image src="/static/assets/images/brand.jpeg" alt="Vercel Logo" width={64} height={18} />
          </span>
        </a>
      </div>
    </footer>
)

export default Footer
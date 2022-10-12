
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Footer = () => (
    <footer className="px-6">
      <div className = "border-t-2 w-full flex flex-1 justify-center py-4">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aveiro Tech City - {' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </div>
    </footer>
)

export default Footer
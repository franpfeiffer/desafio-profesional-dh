import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'


export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground flex justify-between items-center px-4 py-2 w-full fixed bottom-0">
            <div className="flex items-center space-x-4">
                <Image src="/logo.png" alt="Company Logo" width={50} height={50} />
                <span className="text-xs md:text-base">© {new Date().getFullYear()} DevMinds. All rights reserved.</span>
            </div>
            <div className="flex space-x-4">
                <Link href="https://www.instagram.com/devminds_/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={25} className="my-4 hover:text-secondary transition" />
                </Link>
                <Link href="https://x.com/devminds_" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={25} className="my-4 hover:text-secondary transition" />
                </Link>
                <Link href="https://www.linkedin.com/company/devminds8/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={25} className="my-4 hover:text-secondary transition" />
                </Link>
            </div>
        </footer>
    )
}

import './globals.css'
import { Quicksand } from 'next/font/google'
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from 'react-toastify';

import NextTopLoader from 'nextjs-toploader';
import Cookies from 'js-cookie';
import SidebarWrapper from '@/components/SidebarWrapper';

const quicksand = Quicksand({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Admin - Mazinda',
  description: 'Admin End for Mazinda',
}


export default function RootLayout({ children }) {
  const token = Cookies.get('admin_token');
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Slide}
          theme="light"
        />
        <Navbar />
        <NextTopLoader color="#F17E13" showSpinner={false} />
        <div className="flex">
          <div className='hidden md:block'>
            <SidebarWrapper />
          </div>
          <div className="flex-1 p-4 bg-gray-50">{children}</div>
        </div>
      </body>
    </html>
  )
}
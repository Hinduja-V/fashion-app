"use client";
import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav style={{ padding: '1rem', textAlign: 'center' }}>
          <Link href="/">Home</Link> |{' '}
          <Link href="/service">Service</Link> |{' '}
          <Link href="/products">Products</Link> |{' '}
          <Link href="/contact">Contact Us</Link> |{' '}
          <Link href="/user">User</Link> |{' '}
          <Link href="/todos">Todos</Link>
        </nav>
        <Provider store={store}>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import {
  ShellProvider,
} from '@medlify/platform.shell';


export default function App({ Component, pageProps }: AppProps) {
  return (<ShellProvider>
  <Component {...pageProps} />
  </ShellProvider>
  )
}

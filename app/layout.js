import Navigation from '../components/Navigation'
import '../styles/globals.css'

import { space } from './(with-banner)/font'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Next midudev</title>
      </head>
      <body className={space.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

import Footer from './components/footer/footer'
import Header from './components/header/header'
import './globals.css'

export const metadata = {
  title: 'Tennis Ranker . MPR',
  description: 'Tennis Score Ranking Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>  
          <Header />
          {/* <main>
            {children}
          </main> */}
          <Footer />
        </div>
      </body>
    </html>
  )
}

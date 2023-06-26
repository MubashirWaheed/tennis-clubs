import './globals.css'

export const metadata = {
  title: 'Tennis Ranker',
  description: 'Tennis Score Ranking Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

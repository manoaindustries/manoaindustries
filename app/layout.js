import './globals.css'

export const metadata = {
  title: 'MĀNOA INDUSTRIES | Engineering Innovation Through Research and Design',
  description: 'Multidisciplinary engineering company operating at the intersection of Research and Development and Creative Engineering. Founded by Jonavan Kaaiwela Gonzalez.',
  keywords: 'engineering, R&D, creative engineering, product development, innovation, research',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

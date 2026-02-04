import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  fallback: ["Arial", "Helvetica", "sans-serif"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${montserrat.className} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  )
}

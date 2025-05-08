import "./globals.css"
import { Inter } from "next/font/google"
import TextAnimationScript from "@/components/TextAnimation"
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage", // optional
  weight: ["400", "500", "700"], // choose what you need
  display: "swap",
});

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gen1 - First in Creativity, First in Results",
  description: "Crafting impactful content for visionary Islamic brands",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      
          {children}
        <TextAnimationScript />
      </body>
    </html>
  )
}

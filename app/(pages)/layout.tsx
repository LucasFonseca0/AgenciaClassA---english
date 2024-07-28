import Footer from "@/components/ui/footer"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <main className="grow">

      {children}
      <Footer/>
    </main>
  )
}

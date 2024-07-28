import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src={"/images/Logo.png"} width={100} height={100} alt='Logo da agencia classA'></Image>
    </Link>
  )
}
 
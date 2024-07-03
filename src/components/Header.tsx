import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <header className="bg-white py-4">
        <div className='max-w-4xl flex justify-between mx-auto'>
          <div className="flex gap-4">
            <Link className='font-bold' href={'/'}>StreamTree</Link>
            <nav className="flex gap-4 items-center text-blue text-sm">
              <Link href={'/about'}>Acerca</Link>
              <Link href={'/contact'}>Contacto</Link>
            </nav>
          </div>
          <div>
            <nav className="flex gap-4 text-sm text-green">
              <Link href={'/login'}>Login</Link>
              <Link href={'/register'}>Crear cuenta</Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

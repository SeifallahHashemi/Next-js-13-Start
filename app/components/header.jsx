import Link from 'next/link'

function Header() {
  return (
    <header className='w-screen h-auto py-2 bg-orange-600'>
        <nav className='w-[80%] mx-auto flex flex-row justify-between items-center'>
            <div>
                <Link href={'/'}>Home</Link>
            </div>
            <ul className='flex flex-row gap-4'>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/about/team'}>Our team</Link></li>
                <li><Link href={'/code/repos'}>code</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
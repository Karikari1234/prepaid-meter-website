import Link from 'next/link';
import about from './about/page';

export default function Home() {
  return <>
  <h1 className="text-center text-6xl">BPDB Prepaid Metering System</h1>
  <Link href='/about' className='text-blue-900 underline underline-offset-2'>About</Link>
  </>
}

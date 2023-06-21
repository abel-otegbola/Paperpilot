import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <h2 className='text-3xl font-bold text-primary'>Not Found</h2>
      <p className='my-5'>Could not find requested resource</p>
      <Link className='p-3 px-6 rounded min-w-[100px] text-center bg-primary text-white' href="/">Homepage</Link>
    </div>
  )
}
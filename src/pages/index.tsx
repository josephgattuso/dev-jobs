import Head from 'next/head';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Dev Jobs</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-6xl bg-green-100'>Hello world!</h1>
      <p className=' text-2xl text-white bg-light-violet  px-2.5 py-1 m-2 rounded'>
        Accent Color Text
      </p>
      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          href='https://josephgattuso.github.io'
          className='flex items-center justify-center'
        >
          Powered by <img className='h-4 ml-2' src='/logo.svg' alt='' />
        </a>
      </footer>
    </div>
  );
}

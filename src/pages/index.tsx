import Head from 'next/head';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Dev Jobs</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-6xl bg-green-100'>Hello world!</h1>
      <p className='m-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias
        ipsa labore ducimus expedita, maxime quas maiores sint debitis placeat
        magnam et dolorem, impedit quam inventore enim ut quis perferendis!
      </p>
      <Button>Button 1</Button>
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

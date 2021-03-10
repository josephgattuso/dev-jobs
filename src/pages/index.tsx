import Head from 'next/head';
import { Button, JobView } from '../components';
import { Job } from '../types';

export default function Home({ jobs }: { jobs: Job[] }) {
  return (
    <>
      <Head>
        <title>Dev Jobs</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-6xl text-center font-bold bg-blue-100 py-2'>
        Dev Jobs
      </h1>
      <div className='px-6 pt-20'>
        {jobs.map((job: Job) => (
          <JobView key={job.id} job={job} />
        ))}
      </div>
      <div className='text-center mt-8 mb-16'>
        <Button primary={true}>View More</Button>
      </div>
      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          href='https://josephgattuso.github.io'
          className='flex items-center justify-center'
        >
          Powered by <img className='h-4 ml-2' src='/logo.svg' alt='' />
        </a>
      </footer>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://jobs.github.com/positions.json?page=2&search=code`
  );
  const data = await res.json();
  return { props: { jobs: data } };
}

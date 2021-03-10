import { Job } from '../types';

export default function JobView({ job }: { job: Job }) {
  return (
    <>
      <ul className='list-disc'>
        <li>{job.company}</li>
      </ul>
    </>
  );
}

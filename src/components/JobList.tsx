import { useState } from 'react';

import Job from './JobCard';
import JobListHeader from './JobListHeader';

import { JobInterface } from '../interfaces/jobInterfaces';

interface Props {
  onSelectedJobIdChange: (jobId: string) => any;
  jobs: JobInterface[];
  selectedJob: {
    id: string;
  };
}

const JobList = (props: Props): JSX.Element => {
  const [orderBy, setOrderBy] = useState('title');

  const handleSetOrderByChange = (newOrderBy: string): void => {
    setOrderBy(newOrderBy);
  };

  const jobComps: JSX.Element[] = [];

  var orderFunc = (a: JobInterface, b: JobInterface): number => {
    return a.title > b.title ? 1 : -1;
  };

  switch (orderBy) {
    case 'title':
      orderFunc = (a, b) => {
        return a.title > b.title ? 1 : -1;
      };
      break;
    case 'date':
      orderFunc = (a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
      };
  }

  props.jobs.sort((a: JobInterface, b: JobInterface) => orderFunc(a, b));

  var selectedBool: boolean = false;

  props.jobs.map((job: JobInterface) => {
    if (props.selectedJob) {
      selectedBool = job.id === props.selectedJob.id;
    }
    jobComps.push(
      <Job
        key={job.id}
        onSelectedJobIdChange={props.onSelectedJobIdChange}
        job={job}
        selected={selectedBool}
      />,
    );
    return job;
  });

  return (
    <div className="jobList">
      <JobListHeader
        onSetOrderByChange={handleSetOrderByChange}
        orderBy={orderBy}
        quantity={props.jobs.length}
      />
      {jobComps}
    </div>
  );
};

export default JobList;

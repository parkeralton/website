// JobDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import jobs from '../data/jobs';

const JobDetails = () => {
    const { company } = useParams();
    const job = jobs.find((job) => job.company === company);

    if (!job) return <div>Job not found</div>;

    return (
        <div>
            <h1>{job.company}</h1>
            <p>{job.position}</p>
            <p>{job.duration}</p>
            <h2>Projects</h2>
            <ul>
                {job.projects.map((project) => (
                    <li key={project}>{project}</li>
                ))}
            </ul>
        </div>
    );
};

export default JobDetails;

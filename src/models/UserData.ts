import Job from "./jobData";

export default interface UserData {
  id: string;
  appliedJobs: Job[];
  interviewedJobs: Job[];
  offeredJobs: Job[];
  rejectedJobs: Job[];
}

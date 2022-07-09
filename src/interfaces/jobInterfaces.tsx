export interface CityInterface {
  name: string;
  country: {
    name: string;
  };
}

export interface JobInterface {
  id: string;
  title: string;
  description: string;
  cities: CityInterface[];
  company: {
    name: string;
    websiteUrl: string;
  };
  createdAt: string;
}

export interface JobInfoInterface {
  jobsLoc: string;
  jobsTitle: string;
}

export interface JobInfoHandlersInterface extends JobInfoInterface {
  onJobTitleChange: (val: string) => void;
  onJobLocChange: (val: string) => void;
}

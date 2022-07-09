import { useState } from "react";
import ApolloClient, { gql, OperationVariables } from "apollo-boost";
import { ApolloProvider, Query, QueryResult } from "react-apollo";

import { SyncOutlined } from "@ant-design/icons";

import SearchBar from "./components/SearchBar";
import JobListing from "./components/JobListing";

import { JobInterface } from "./interfaces/jobInterfaces";

import Context from "./Context";

import "./App.scss";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
});

const JobsQuery = (): JSX.Element => {
  return (
    <Query
      query={gql`
        {
          countries {
            name
          }
          jobs {
            id
            title
            description
            cities {
              name
              country {
                name
              }
            }
            company {
              name
              websiteUrl
            }
            createdAt
          }
        }
      `}
    >
      {(result: QueryResult<any, OperationVariables>) => {
        const { loading, error, data } = result;
        if (loading)
          return (
            <div className="loading">
              <SyncOutlined spin />
            </div>
          );
        if (error) return <p>Error!</p>;

        const allTitles: { value: string }[] = data.jobs.map(
          (job: JobInterface) => {
            return { value: job.title };
          }
        );

        const jobsTitles = allTitles.filter(
          (title, index) =>
            allTitles.findIndex(
              (t) => t.value.toUpperCase() === title.value.toUpperCase()
            ) === index
        );

        const allCountries: { value: string }[] = data.countries.map(
          (country: { name: string }) => {
            return { value: country.name };
          }
        );
        const jobsCountries = allCountries.filter(
          (country, index) =>
            allCountries.findIndex(
              (t) => t.value.toUpperCase() === country.value.toUpperCase()
            ) === index
        );

        return (
          <>
            <SearchBar
              titleOptions={jobsTitles}
              countryOptions={jobsCountries}
            />
            <hr />
            <JobListing data={data} />
          </>
        );
      }}
    </Query>
  );
};

const App = (): JSX.Element => {
  const [jobsTitle, setJobsTitle] = useState("");
  const [jobsLoc, setJobsLoc] = useState("");

  const handleJobTitleChange = (newJobTitle: string): void => {
    setJobsTitle(newJobTitle);
  };

  const handleJobLocChange = (newJobLoc: string): void => {
    setJobsLoc(newJobLoc);
  };

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Context.Provider
          value={{
            jobsInfo: {
              jobsTitle: jobsTitle,
              jobsLoc: jobsLoc,
              onJobLocChange: handleJobLocChange,
              onJobTitleChange: handleJobTitleChange,
            },
          }}
        >
          <JobsQuery />
        </Context.Provider>
      </div>
    </ApolloProvider>
  );
};

export default App;

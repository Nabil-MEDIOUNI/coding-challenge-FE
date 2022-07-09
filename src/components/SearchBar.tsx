import { useContext } from "react";
import { AutoComplete, Button } from "antd";

import { JobInfoHandlersInterface } from "../interfaces/jobInterfaces";
import Context from "../Context";

import "antd/dist/antd.css";

interface Props {
  titleOptions: { value: string }[];
  countryOptions: { value: string }[];
}

const NewAutoComplete = (
  placeholder: string,
  jobContext: any,
  jobProp: string,
  onJobPropChange: string
): JSX.Element => {
  return (
    <AutoComplete
      value={jobContext[jobProp]}
      style={{
        width: "100%",
      }}
      placeholder={placeholder}
      onChange={(e) => jobContext[onJobPropChange](e)}
    />
  );
};

const SearchBar = (props: Props): JSX.Element => {
  const jobsInfo: JobInfoHandlersInterface = useContext(Context).jobsInfo;
  
  const AutocompleteTitles = () =>
    NewAutoComplete("Title", jobsInfo, "jobsTitle", "onJobTitleChange");

  const AutocompleteCountries = () =>
    NewAutoComplete("Country", jobsInfo, "jobsLoc", "onJobLocChange");

  return (
    <div className="SearchBar">
      {AutocompleteTitles()}
      {AutocompleteCountries()}
      <Button
        onClick={() => {
          jobsInfo.onJobLocChange("");
          jobsInfo.onJobTitleChange("");
        }}
      >
        Clear search
      </Button>
    </div>
  );
};

export default SearchBar;

import { useContext } from 'react';
import { AutoComplete, Button } from 'antd';

import { JobInfoHandlersInterface } from '../interfaces/jobInterfaces';
import Context from '../Context';

import 'antd/dist/antd.css';

interface Props {
  allJobsTitle: { value: string }[];
  allCountriesName: { value: string }[];
}

const NewAutoComplete = (
  placeholder: string,
  options: any,
  jobContext: any,
  jobProp: string,
  onJobPropChange: string,
): JSX.Element => {
  return (
    <AutoComplete
      value={jobContext[jobProp]}
      placeholder={placeholder}
      options={options}
      onChange={(e) => jobContext[onJobPropChange](e)}
      filterOption={(inputValue: string, option: any) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
};

const SearchBar = (props: Props): JSX.Element => {
  const jobsInfo: JobInfoHandlersInterface = useContext(Context).jobsInfo;

  const AutocompleteTitles = () =>
    NewAutoComplete(
      'Title',
      props.allJobsTitle,
      jobsInfo,
      'jobsTitle',
      'onJobTitleChange',
    );

  const AutocompleteCountries = () =>
    NewAutoComplete(
      'Country',
      props.allCountriesName,
      jobsInfo,
      'jobsLoc',
      'onJobLocChange',
    );

  return (
    <div className="SearchBar">
      {AutocompleteTitles()}
      {AutocompleteCountries()}
      <Button
        onClick={() => {
          jobsInfo.onJobLocChange('');
          jobsInfo.onJobTitleChange('');
        }}
      >
        Clear search
      </Button>
    </div>
  );
};

export default SearchBar;

import React from "react";

const Context: React.Context<any> = React.createContext({
  jobsInfo: {
    jobsTitle: "",
    jobsLoc: "",
    onJobLocChange: null,
    onJobTitleChange: null,
  },
});

export default Context;

import { useContext } from "react";

import { JobInfoHandlersInterface } from "../interfaces/jobInterfaces";

import Context from "../Context";

interface Props {
  onSetOrderByChange: (order: string) => void;
  orderBy: string;
  quantity: number;
}

const JobListHeader = (props: Props): JSX.Element => {
  const jobsInfo: JobInfoHandlersInterface = useContext(Context).jobsInfo;
  const jobsLoc = jobsInfo.jobsLoc;
  const jobsTitle = jobsInfo.jobsTitle;
  const resumenTexto = () => {
    let txt: string = "";
    if (jobsLoc || jobsTitle) {
      txt += "Empleos";
      if (jobsTitle) {
        txt += " de " + jobsTitle;
      }
      if (jobsLoc) {
        txt += " en " + jobsLoc;
      }
    }
    return txt;
  };
  return (
    <div className="JobListHeader">
      <p className="subtitle">{resumenTexto()}</p>
      <p className="order">
        {"Order by: "}
        <button
          className={props.orderBy === "title" ? "active" : ""}
          onClick={() => props.onSetOrderByChange("title")}
        >
          title
        </button>
        {" - "}
        <button
          className={props.orderBy === "date" ? "active" : ""}
          onClick={() => props.onSetOrderByChange("date")}
        >
          date
        </button>
      </p>
    </div>
  );
};

export default JobListHeader;

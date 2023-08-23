import * as React from "react";
import "./AttendanceSheet.scss";
import Link from "@mui/material/Link";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import AttendanceForm from "../AttendanceForm/AttendanceForm";
import SubmitButton from "../SubmitButton/SubmitButton";

const AttendanceSheet = () => {
  return (
    <div className="body">
      {/* <img src={""} alt="Hicoder Image" width="100%" /> */}
      <div className="body--coreSheet">
        <h1
          className="body--coreSheet--header"
          style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
        >
          Assignment Task
        </h1>
        <hr />
        <div className="body--coreSheet--Email">
          <div style={{display:"flex",gap:"1rem"}}>
            <strong>
              swapniltiwari9819@gmail.com
              <Link href="#" underline="none">
                {"Switch account"}
              </Link>
            </strong>
          </div>

          <br />
          <div>
            <CloudDoneOutlinedIcon />
          </div>
        </div>

        <p color="error" id="body--coreSheet--Email--reqired">
          * Indicates required question
        </p>
      </div>
      <AttendanceForm />
      <SubmitButton />
      {/* Body Ends */}
    </div>
  );
};

export default AttendanceSheet;

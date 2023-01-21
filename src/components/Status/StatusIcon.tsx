import { IssueStatus } from "../../@types/issue-status";
import StatusDone from "./StatusDone";
import StatusPending from "./StatusPending";

type StatusIconProps = {
  status: IssueStatus;
};

function StatusIcon({ status }: StatusIconProps) {
  return (
    <>
      {status === "done" ? (
        <StatusDone text={status} />
      ) : (
        <StatusPending text={status} />
      )}
    </>
  );
}

export default StatusIcon;

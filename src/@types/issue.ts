import { IssueStatus } from "./issue-status";

export type Issue = {
  id: number;
  name: string;
  message: string;
  status: IssueStatus;
};

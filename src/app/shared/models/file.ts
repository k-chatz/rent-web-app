export interface File {
  fileDownloadUri: string;
  filename: string;
  filesize: number;
  filetype: string;
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy: number;
  updatedBy: number;
}

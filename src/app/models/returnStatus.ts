export class ReturnStatus {
  isError: boolean;
  message: string;

  constructor() {
    this.isError = false;
    this.message = '';
  }
}
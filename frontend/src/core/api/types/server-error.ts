export class ServerError extends Error {
  data: Record<string, string[]>;
  statusCode?: number;

  constructor(args: {
    message?: string;
    statusCode?: number;
    data: Record<string, string[]>;
  }) {
    super(args.message || 'Something went wrong.');
    
    this.data = args.data;
    this.statusCode = args.statusCode;
  }
};
export interface DomainResponseType {
  data: {
    domain?: string;
    issuer?: {
      C?: string;
      O?: string;
      CN?: string;
    };
    valid_from?: string;
    valid_to?: string;
    valid?: boolean;
    details?: {
      subject?: {
        CN?: string;
      };
    };
  };
}

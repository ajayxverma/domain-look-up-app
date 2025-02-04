export interface Currency {
  code: string;
  name: string;
}

export interface Data {
  ipVersion: number;
  ipAddress: string;
  latitude: number;
  longitude: number;
  countryName: string;
  countryCode: string;
  timeZone: string;
  zipCode: string;
  cityName: string;
  regionName: string;
  isProxy: boolean;
  continent: string;
  continentCode: string;
  currency: Currency;
  language: string;
  timeZones: string[];
  tlds: string[];
}

export interface Response {
  data: Data;
}

export interface IPApiResponse {
  response: Response;
}

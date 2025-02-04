import axios from 'axios';
import { API_URI, SearchType } from './constants';

const host = import.meta.env.VITE_API_URL;

export const fetcDomainOrIpDetails = async (query: string, searchType: SearchType) => {
  try {
    if (searchType === SearchType.Domain) {
      const apiUrl = host + API_URI.DOMAIN_API_URL;
      const encodedQuery = encodeURIComponent(query);
      const response = await axios.get(apiUrl, { params: { domain: encodedQuery } });
      return response.data;
    } else if (searchType === SearchType.IP) {
      const apiUrl = host + API_URI.IP_API_URL;
      const response = await axios.get(apiUrl + `/${query}`);
      return response.data;
    }
  } catch (error) {
    throw new Error('Failed to fetch WHOIS data.');
  }
};

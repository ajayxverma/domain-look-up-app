import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchWhoisData = async (query: string) => {
  try {
    const encodedQuery = encodeURIComponent(query);
    console.log(encodedQuery);
    const response = await axios.get(API_URL, { params: { domain: encodedQuery } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch WHOIS data.');
  }
};

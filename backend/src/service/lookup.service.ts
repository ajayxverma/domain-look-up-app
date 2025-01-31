import axios from 'axios';

export const getDomainDetails = async (domainName: string): Promise<any> => {
  try {
    const options = {
      method: 'GET',
      url: process.env.RAPID_API_URL,
      params: { domain: domainName },
      headers: {
        'x-rapidapi-host': process.env.RAPID_API_HOST,
        'x-rapidapi-key': process.env.RAPID_API_KEY,
      },
    };
    console.log(options);
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

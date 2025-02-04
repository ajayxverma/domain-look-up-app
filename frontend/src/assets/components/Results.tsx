import { DomainResponseType } from '../../types/DomainResponseType';
import { SearchType } from '../../utils/constants';
import { IPApiResponse } from '../../types/IPAddressDataType';

const Results = ({ data, searchType }: { data: any; searchType: SearchType }) => {
  if (!data) return null;

  const formatDate = (dateString?: string) => {
    return dateString
      ? new Date(dateString).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : 'N/A';
  };

  if (searchType === SearchType.IP) {
    const ipApiResponseData = data as IPApiResponse;
    const ipDetails = ipApiResponseData.response.data;

    return (
      <div className='flex justify-start items-center p-6'>
        <div className='shadow-lg rounded-2xl p-6 max-w-lg w-full'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>IP Address Details</h2>
          <div className='space-y-3'>
            <p>
              <span className='font-semibold'>IP Address:</span> {ipDetails.ipAddress || 'N/A'}
            </p>
            <p>
              <span className='font-semibold'>Country:</span> {ipDetails.countryName || 'N/A'}
            </p>
            <p>
              <span className='font-semibold'>City:</span> {ipDetails.cityName || 'N/A'}
            </p>
            <p>
              <span className='font-semibold'>Region:</span> {ipDetails.regionName || 'N/A'}
            </p>
            <p>
              <span className='font-semibold'>Latitude:</span> {ipDetails.latitude || 'N/A'}
            </p>
            <p>
              <span className='font-semibold'>Longitude:</span> {ipDetails.longitude || 'N/A'}
            </p>
            <p>
              <span className='font-semibold'>Time Zone:</span> {ipDetails.timeZone || 'N/A'}
            </p>
            <p>
              <span className='font-semibold'>Currency:</span> {ipDetails.currency.name || 'N/A'}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    const domainDetailsData = data.response as DomainResponseType;
    const domainDetails = domainDetailsData?.data || {};

    return (
      <div className='flex justify-start items-center  p-6'>
        <div className='shadow-lg rounded-2xl p-6 max-w-lg w-full'>
          <h2 className='text-2xl font-bold text-gray-300 mb-4'>Domain Details</h2>
          <div className='space-y-3'>
            <p>
              <span className='font-semibold'>Domain:</span> {domainDetails.domain || 'N/A'}
            </p>
            <p>
              <span className='font-semibold'>Issuer:</span> {domainDetails.issuer?.CN || 'N/A'} (
              {domainDetails.issuer?.O || 'N/A'})
            </p>
            <p>
              <span className='font-semibold'>Valid From:</span>{' '}
              {formatDate(domainDetails.valid_from)}
            </p>
            <p>
              <span className='font-semibold'>Valid To:</span> {formatDate(domainDetails.valid_to)}
            </p>
            <p>
              <span className='font-semibold'>Status:</span>
              <span className={domainDetails.valid ? 'text-green-600' : 'text-red-600'}>
                {domainDetails.valid !== undefined
                  ? domainDetails.valid
                    ? 'Valid'
                    : 'Invalid'
                  : 'N/A'}
              </span>
            </p>
            <p>
              <span className='font-semibold'>Common Name (CN):</span>{' '}
              {domainDetails.details?.subject?.CN || 'N/A'}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Results;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { fetcDomainOrIpDetails } from '../../utils/externalApiCalls';
import { SearchType } from '../../utils/constants';

const LookUp = ({ onResult }: { onResult: (data: any, searchType: SearchType) => void }) => {
  const { register, handleSubmit, reset } = useForm();
  const [searchType, setSearchType] = useState<SearchType>(SearchType.Domain);

  const onSubmit = async (data: any) => {
    try {
      const result = await fetcDomainOrIpDetails(data.query, searchType);
      onResult(result, searchType);
    } catch (error) {
      toast.error('Error fetching data');
    }
    reset();
  };

  return (
    <div className='max-w-md mx-auto p-6 rounded-lg'>
      <h1 className='text-center text-2xl font-bold mb-4'>Search Details</h1>
      <div className='flex justify-center mb-4'>
        <button
          className='mr-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
          onClick={() => setSearchType(SearchType.Domain)}
        >
          Domain Search
        </button>
        <button
          className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'
          onClick={() => setSearchType(SearchType.IP)}
        >
          IP Address Search
        </button>
      </div>
      {searchType && (
        <form onSubmit={handleSubmit(onSubmit)} className=' p-6 rounded-lg'>
          <label className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
            {searchType === 'domain' ? 'Domain' : 'IP Address'}
          </label>
          <div className='flex items-center'>
            <div className='relative flex-grow'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-500 dark:text-gray-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12.9 14.32a8 8 0 111.41-1.41l4.24 4.24-1.41 1.41-4.24-4.24z'
                  />
                </svg>
              </div>
              <input
                type='text'
                className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder={searchType === 'domain' ? 'Enter domain...' : 'Enter IP address...'}
                {...register('query')}
              />
            </div>
            <button
              type='submit'
              className='ml-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800'
            >
              Search
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LookUp;

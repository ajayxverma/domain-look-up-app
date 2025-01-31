const Results = ({ data }: { data: any }) => {
  if (!data) return null;

  return (
    <div>
      <h2 className='text-2xl font-bold text-center mb-6 text-white'>Domain Details</h2>
      <div
        className='text-white-700 bg-[#242424] p-6 rounded-lg max-h-96 border p-4 max-h-[400px] overflow-y-auto
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:bg-gray-300
                dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'
      >
        {JSON.stringify(data, null, 2)}
      </div>
    </div>
  );
};

export default Results;

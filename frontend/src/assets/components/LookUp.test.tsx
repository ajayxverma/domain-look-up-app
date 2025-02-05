import { render, screen, fireEvent } from '@testing-library/react';
import LookUp from './LookUp';
import { SearchType } from '../../utils/constants';

describe('LookUp Component', () => {
  const mockOnResult = jest.fn();

  beforeEach(() => {
    mockOnResult.mockClear();
  });

  it('calls onResult with correct data and searchType when form is submitted', async () => {
    const mockFetchDomainOrIpDetails = jest.fn().mockResolvedValue({ data: 'mockData' });
    jest.mock('../../utils/externalApiCalls', () => ({
      fetcDomainOrIpDetails: mockFetchDomainOrIpDetails,
    }));

    render(<LookUp onResult={mockOnResult} />);
    fireEvent.click(screen.getByText('Domain Search'));
    fireEvent.change(screen.getByPlaceholderText('Enter domain...'), { target: { value: 'example.com' } });
    fireEvent.click(screen.getByText('Search'));
    expect(mockFetchDomainOrIpDetails).toHaveBeenCalledWith('example.com', SearchType.Domain);
    expect(mockOnResult).toHaveBeenCalledWith({ data: 'mockData' }, SearchType.Domain);
  });
});
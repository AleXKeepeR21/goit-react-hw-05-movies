import { useDebounce } from 'components/Hooks/useDebounce';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const DEBOUNCE_TIME = 500;

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState();
  const debauncedSearchQuery = useDebounce(searchQuery, DEBOUNCE_TIME);

  useEffect(() => {
    if (!debauncedSearchQuery) {
      return;
    }
    setSearchParams({ query: debauncedSearchQuery });
  }, [debauncedSearchQuery, setSearchParams]);

  return (
    <input
      placeholder="Enter your search query"
      onChange={evt => setSearchQuery(evt.target.value)}
    />
  );
};

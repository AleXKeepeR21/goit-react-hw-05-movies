import { useDebounce } from 'components/Hooks/useDebounce';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const DEBOUNCE_TIME = 500;

export const MoviesPage = ({ query }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(query);
  const debauncedSearchQuery = useDebounce(searchQuery, DEBOUNCE_TIME);

  useEffect(() => {
    if (!debauncedSearchQuery) {
      searchParams.delete('query');
      setSearchParams({});
      return;
    }
    setSearchParams({ query: debauncedSearchQuery });
  }, [searchParams, debauncedSearchQuery, setSearchParams]);

  return (
    <input
      placeholder="Enter your search query"
      onChange={evt => setSearchQuery(evt.target.value)}
      value={searchQuery}
    />
  );
};

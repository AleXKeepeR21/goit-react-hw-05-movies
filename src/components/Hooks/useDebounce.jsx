import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const useDebounce = (query, debounceTime) => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      query && setDebouncedQuery(query);
    }, debounceTime);
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [query, debounceTime]);
  return debouncedQuery;
};

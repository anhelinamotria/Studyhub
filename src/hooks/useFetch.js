import { useEffect, useState } from 'react';

// Завантажує дані з асинхронної функції сервісу (api.getDeadlines тощо)
export function useFetch(request) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    request()
      .then((result) => active && setData(result))
      .catch((err) => active && setError(err));
    return () => {
      active = false;
    };
  }, [request]);

  return { data, error, loading: data === null && error === null };
}

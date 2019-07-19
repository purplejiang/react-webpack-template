import { useState, useEffect } from 'react';

export function useListHook(getDataApi, initPageSize = 10, query = {}) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(initPageSize);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const getData = async (page, pageSize) => {
    setLoading(true);
    const { data = {} } = await getDataApi({ page, pageSize, ...query });
    const { list = [], count = 0 } = data;
    setLoading(false);
    setList(list);
    setCount(count);
  };

  const pageChangeHandle = (page, pageSize) => {
    getData(page, pageSize);
    setPage(page);
    setPageSize(pageSize);
  };

  useEffect(() => {
    getData(page, pageSize);
    // eslint-disable-next-line
  }, []);

  return {
    list,
    count,
    page,
    pageSize,
    loading,
    pageChangeHandle
  };
}

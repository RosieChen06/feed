import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PaginatorProps = {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>;
  };
  
  const Paginator: React.FC<PaginatorProps> = ({ page, setPage }) => {
    const ttl_page = Math.ceil(page / 20)
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        console.log('at page:', value);
      };
    return (
      <Stack spacing={2}>
        <Pagination count={ttl_page} color="secondary" onChange={handleChange}/>
      </Stack>
    );
  };

export default Paginator

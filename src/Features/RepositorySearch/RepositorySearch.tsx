import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchComponent from '../../components/SearchComponent';
import RepositoryList from '../../components/RepositoryList';
const useStyles = makeStyles({
  wrapper: {
    height: '100vh',
  },
  header: {
    display: 'flex',
    width: '100%',
  },
  cards: {
    width: '70%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  search: {
    width: '30%',
  },
  repositoryList:{
    marginTop:'8%'
  }
});

export const RepositorySearch = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const onSearch =()=>{

  };


  return (
    <div className={classes.wrapper}>
      
      <div className={classes.header}>
        
        <div className={classes.search}>
       
         <SearchComponent value={searchTerm} onChange={setSearchTerm} search={onSearch} />
        </div>
      </div>
      <div className={classes.repositoryList}>
      <RepositoryList searchTerm={searchTerm}/>
      </div>
    </div>
  );
};

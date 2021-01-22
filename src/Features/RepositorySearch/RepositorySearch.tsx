import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
});

export const RepositorySearch = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      
      <div className={classes.header}>
        
        <div className={classes.search}>
         Search Component
        </div>
      </div>
      <div className="body">
        Search Result
      </div>
    </div>
  );
};

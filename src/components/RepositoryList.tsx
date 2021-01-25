import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Typography, makeStyles, CircularProgress} from '@material-ui/core';
import {useDebounce} from 'use-debounce';
import {SEARCH_FOR_REPOS} from './queries';
import Repository, { Repo } from './Repository';

const useStyles = makeStyles({
  note: {
    marginTop: '1rem',
    textAlign: 'center',
  },
  noteNoSearch: {
    marginTop: '25rem',
    textAlign: 'center',
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '1rem'
  }
});

export interface Props{
  searchTerm:string;
}

const RepositoryList = ({searchTerm}: Props) => {
  const classes = useStyles();
  const [expandedRepo, setExpandedRepo] = useState(null);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);
  const {data, loading, error} = useQuery(SEARCH_FOR_REPOS,
    {variables: {search_term: debouncedSearchTerm}}
    );

  useEffect(() => {
    setExpandedRepo(null);
  }, [data]);

  if (loading) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Typography
        variant={'overline'}
        className={classes.note}
        component={'div'}
        color={'error'}
      >
        {error}
      </Typography>
    )
  }

  if (!data.search.repositoryCount) {
    return (
      <Typography
        variant={'overline'}
        className={searchTerm?classes.note: classes.noteNoSearch}
        component={'div'}
      >
        There are no such repositories!
      </Typography>
    )
  }

  return (
    <div>
      {data.search.edges.map((repo:Repo, i:any) => (
        <Repository
          repo={repo}
          expanded={expandedRepo === i}
          onToggled={() => setExpandedRepo(i)}
          key={i}
        />
      ))}
    </div>
  );
};

export default RepositoryList;

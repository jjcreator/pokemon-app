
import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import pokemon from 'pokemontcgsdk';
import PokemonCard from './components/PokemonCard';
import styles from './scss/app.module.scss'
import { Container } from '@mui/system';
import { Box, CircularProgress, Grid, Pagination } from '@mui/material';
import TopBar from './components/TopBar';
import API_KEY from './secrets.js'


pokemon.configure({apiKey: API_KEY});

const App = () => {

  useEffect(() => {
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    console.log(getCookie('darkMode'))

    setDarkMode(getCookie('darkMode'))
    

  },[])

  const [pokemonData, setPokemonData] = useState([])
  const [darkMode, setDarkMode] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesCount, setPagesCount] = useState(0)
  const [nameSearched, setNameSearched] = useState('')
  const [dataLoading, setDataLoading] = useState(false)

  const findPokemonByName = useCallback((query) => {
    if (query.length > 0) {
      setDataLoading(true)
      setNameSearched(query)
      pokemon.card.where({ q: `name:${query}`, pageSize: 20, page: currentPage })
        .then(result => {
          console.log(result)
          setPokemonData(result.data)
          setPagesCount(Math.ceil(result.totalCount / 20))
        }).then(()=> {
          setDataLoading(false)
        })
    }
  }, [currentPage])

  useEffect(()=> {
    findPokemonByName(nameSearched)
  }, [findPokemonByName, nameSearched, currentPage])

  const handlePagination = (e, value) => {
    setCurrentPage(value)
  }

  const handleDarkModeChange = () => {
    document.cookie = `darkMode=${darkMode === 'true' ? 'false' : 'true'}`
    setDarkMode(darkMode === 'true' ? 'false' : 'true')
  }
  
  return (
    <main className={`${styles.mainApp} ${darkMode === 'true' ? styles.darkMode : styles.regularMode}`}>
      <Box sx={{paddingTop: '120px'}}>
        <TopBar darkMode={darkMode} findPokemonByName={ findPokemonByName } handleDarkModeChange={ handleDarkModeChange }/>
        <Container>
          {dataLoading && 
            (<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <CircularProgress />
            </Box>)
          }
          {!dataLoading && (
            <Grid container spacing={4}>
            {pokemonData.map(item =>
              <Grid item xs={12} md={6} lg={4} key={item.id}>
                <PokemonCard item={item} darkMode={darkMode} />
              </Grid>
              )}
            </Grid>
          )}
          {pagesCount > 1 &&
            <Box sx={{display: 'flex', justifyContent:'center', padding: '25px 0'}}>
              <Pagination count={pagesCount} onChange={handlePagination} />
            </Box>
          }
        </Container>
      </Box>
    </main>
  );
}

export default App;

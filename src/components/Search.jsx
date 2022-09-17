
import React, { useState } from "react"
import Button from '@mui/material/Button';
import { Box, TextField } from "@mui/material";
import styles from '../scss/search.module.scss'

const Search = ( {findPokemonByName, darkMode} ) => {
const [name, setName] = useState('')
const changeName = (e) => {
    setName(e.target.value)
}
const searchForPokemon = () => {
    findPokemonByName(name)
}

const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        searchForPokemon()
      }
}

    return (
        <Box className={styles.searchBox}>
            <TextField size="small" label="Pokemon Name" variant="outlined" onChange={changeName} onKeyDown={handleKeyDown} className={`${styles.searchInput} ${darkMode === 'true' && styles.searchInputDark}`} />
            <Button sx={{marginLeft: '20px'}} onClick={searchForPokemon} variant="contained" className={styles.searchButton} >Find a pokemon!</Button>
        </Box>
    )
}

export default Search
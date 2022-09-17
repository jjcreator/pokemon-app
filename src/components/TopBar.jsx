
import { Box } from "@mui/system";
import DarkModeSwitch from "./DarkModeSwitch";
import Search from "./Search";
import styles from '../scss/topBar.module.scss'


const TopBar = ({darkMode, handleDarkModeChange, findPokemonByName}) => 
    
    <Box bgcolor={`${darkMode === 'true' ? '#303031' : '#fefefe'}`} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', position: 'fixed', top: '0', left: 0, alignItems: 'center'}} className={styles.topBar}>
        <Search findPokemonByName={ findPokemonByName }  darkMode={darkMode} />
        <DarkModeSwitch darkMode={darkMode} handleDarkModeChange={handleDarkModeChange} />
    </Box>

export default TopBar
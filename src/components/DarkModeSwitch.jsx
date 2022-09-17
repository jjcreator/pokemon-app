import { FormGroup, FormControlLabel, Switch } from "@mui/material";
import styles from '../scss/darkModeSwitch.module.scss'

const DarkModeSwitch = ({darkMode, handleDarkModeChange}) => 

    <FormGroup className={styles.darkModeSwitch}>
        <FormControlLabel checked={darkMode === 'true'} control={<Switch onChange={handleDarkModeChange} />} label={darkMode === 'true' ? 'Turn off dark mode' : 'Turn on dark mode'}/>
    </FormGroup>
    
export default DarkModeSwitch
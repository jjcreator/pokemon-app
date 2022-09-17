import { FormGroup, FormControlLabel, Switch } from "@mui/material";
import styles from '../scss/darkModeSwitch.module.scss'

const DarkModeSwitch = ({handleDarkModeChange}) => 

    <FormGroup className={styles.darkModeSwitch}>
        <FormControlLabel control={<Switch onChange={handleDarkModeChange} />} label="Toggle dark mode" />
    </FormGroup>
    
export default DarkModeSwitch
import { FormControl, IconButton, Input, InputLabel, InputAdornment, makeStyles } from "@material-ui/core";
import '../css/searchBox.css';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles( (theme) => ({
    fontFam: {
        fontFamily: 'Lato'
    },
    SearchBox : {
        width: '80%',
        marginLeft: '10%',
        marginTop: '5vw',
        marginBottom: '2vw'
    },
    fontColor: {
        color: '#8f8f8f'
    }
}) );

export const SearchBox = ({ notes, updateNotesList }) => {
    const classes = useStyles(); 
    const handleChange = (e) => {
        updateNotesList( { ...notes, searchKey: e.target.value } );
    }    
    return (
        <FormControl
            className = {classes.SearchBox}
        >
            <InputLabel className = {classes.fontFam}>Search Notes</InputLabel>
            <Input
                onChange = {(e)=>handleChange(e)}
                className = {classes.fontFam+" "+classes.fontColor}
                startAdornment = {
                    <InputAdornment position="start">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>    
    );
}
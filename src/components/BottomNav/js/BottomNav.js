import {AppBar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../css/BottomNav.css';

const useStyles = makeStyles( (theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));

export default function BottomNav(props) {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={()=>props.changeView({currentView:'newNote'})}>
                        <AddIcon />
                    </Fab>
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
            <Toolbar />  
        </>    
    );
}
import { ListItem, ListItemText, ListItemIcon, makeStyles, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteRounded';
import "../css/NoteItem.css";
import {useEffect} from 'react';

const useStyles = makeStyles ( () => ({
    font: {
        fontFamily: 'Lato'
    }
}));
export default function NoteItem(props) {
    const notesList = JSON.parse(localStorage.getItem('notesList'));
    const currentNote = notesList[props.noteId];
    const content = (currentNote.content) ? currentNote.content : "";
    const lastEdit = currentNote.lastEdit;
    const title = (currentNote.title) ? currentNote.title : "";
    
    const deleteNote = (e,id) => {
        e.stopPropagation();
        delete notesList[id];
        props.updateNotes(notesList);
        localStorage.setItem('notesList', JSON.stringify(notesList));
    }

    useEffect(() => {
        document.getElementById(props.noteId+"$content").innerHTML = content;
        document.getElementById(props.noteId+"$title").innerHTML = title;
    });
    const classes = useStyles();
    return (
        <ListItem 
            button 
            alignItems="center" 
            className = "NoteItem"
            onClick = { 
                ()=> {
                    props.changeView( { currentView : 'editNote', noteId: props.noteId} );
                }
            } 
        >
            <ListItemText 
                className = {classes.font}
                primary = { <span id = {props.noteId+"$title"}  className = "noteTitle"></span> } 
                secondary = { 
                    <>
                        <span id={props.noteId+"$content"} className = "noteContent"></span>
                        <i className = "lastEdit">last edit: {new Date(lastEdit).toString()}</i>
                    </> 
                }
            />
            <ListItemIcon>
                <IconButton onClick = { (e) => deleteNote(e,props.noteId) }>
                    <DeleteIcon color = "secondary" className = "deleteIcon" />
                </IconButton>           
            </ListItemIcon>
        </ListItem>
    );
}
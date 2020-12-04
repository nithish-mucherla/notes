import {useState} from 'react';
import launcherImg from '../launcherImage.svg';
import '../css/NotesContainer.css';
import Grid from '@material-ui/core/Grid';
import NoteItem from '../../NoteItem/js/NoteItem.js';
import { List } from '@material-ui/core';

export default function Notes(props) {
    const [notes, updateNotesList] = useState(JSON.parse(localStorage.getItem('notesList')) || {});
    let notesCount = Object.keys(notes).length;
    
    if(notesCount > 0)
        return (
            <List>
                {
                    Object.keys(notes).map( (id)=><NoteItem 
                        changeView = {props.changeView} 
                        noteId = {id} 
                        key = {id}
                        updateNotes = {updateNotesList}
                    /> )
                }  
            </List>   
        );
    return (
        <Grid
            container
            alignItems = "center"
            className = "notesContainer"
        >
            <Grid item xs={1}></Grid>
            <Grid item xs= {10}>
                <Grid item xs={12}>
                    <center><img src = {launcherImg} alt="launcherImg" className = "launcherImg centered"/></center>
                </Grid>
                <Grid item xs = {12}>
                    <h1 className = "headingMain">create <b>NOTES</b> with ease!</h1>
                </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    );
}
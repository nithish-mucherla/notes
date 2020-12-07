import {useState} from 'react';
import launcherImg from '../launcherImage.svg';
import '../css/NotesContainer.css';
import Grid from '@material-ui/core/Grid';
import {NotesList} from '../../NotesList/js/NotesList.js';

export default function Notes({ changeView }) {
    const [notes, updateNotesList] = useState( 
        { 
            notesList: ( JSON.parse(localStorage.getItem('notesList')) || {} ), 
            searchKey: '' 
        } || {}
    );
    let notesCount = Object.keys(notes.notesList).length;
    const searchNotes = Object.keys(notes.notesList).filter( (id) => {
        return (notes.searchKey==='') ? true :  
        ( notes.notesList[id].content && notes.notesList[id].content.includes(notes.searchKey) ) || 
        ( notes.notesList[id].title && notes.notesList[id].title.includes(notes.searchKey) )
    });

    if(notesCount > 0)
        return (
            <NotesList 
                changeView = {changeView} 
                updateNotesList = {updateNotesList} 
                notes = {notes}
                notesIds = {searchNotes}
            />
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
import NoteItem from '../../NoteItem/js/NoteItem.js';
import { List, ListItem } from '@material-ui/core';
import { SearchBox } from '../../SearchNotes/js/SearchNotes.js';

export const NotesList = ({ changeView, updateNotesList, notes, notesIds }) => {
    return (
        <List>
            <ListItem>
                <SearchBox 
                    updateNotesList = {updateNotesList}
                    notes = {notes}
                />
            </ListItem>
            {
                notesIds.sort((a,b) => {
                    let key1 = notes.notesList[a].lastEdit, key2 = notes.notesList[b].lastEdit;
                    if(key1 < key2) return 1;
                    if(key1 > key2) return -1;
                    return 0; 
                }).map( (id)=><NoteItem 
                    changeView = { changeView } 
                    noteId = {id} 
                    key = {id}
                    notes = {notes}
                    updateNotes = {updateNotesList}
                /> )
            }  
        </List>  
    );
}
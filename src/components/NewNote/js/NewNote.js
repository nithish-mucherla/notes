import Grid from '@material-ui/core/Grid';
import {Editor} from '@tinymce/tinymce-react';
import {v4 as uuidv4} from 'uuid';
import Paper from '@material-ui/core/Paper';
import "../css/NewNote.css";
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import ContactsRounded from '@material-ui/icons/ContactsRounded';
import { makeStyles } from '@material-ui/core/styles';

export default function NewNote(props) {

    const notes = JSON.parse(localStorage.getItem('notesList'));
    
    if(!notes) {
        localStorage.setItem( 'notesList' , JSON.stringify({}) );
    } 

    const generateId = ()=>{
        if(props.action === 'add') 
        return uuidv4();
        return props.noteId;
    }
    const id = generateId(); 

    const handleContentChange = (e, editor) => {
        let eid = id;
        let notesList = JSON.parse(localStorage.getItem('notesList'));
        if(!notesList[eid]) {
            notesList[eid] = { 
                lastEdit: Date.now(),
                content: editor.getContent()
            };
        }
        else {
            notesList[eid]["lastEdit"] = Date.now();
            notesList[eid]["content"] = editor.getContent();
        }       
        localStorage.setItem('notesList',JSON.stringify(notesList));
    }

    const handleTitleChange = (e, editor) => {
        let eid = id;
        let notesList = JSON.parse(localStorage.getItem('notesList'));
        if(!notesList[eid]) {
            notesList[eid] = { 
                lastEdit: Date.now(),
                title: editor.getContent()
            };
        }
        else {
            notesList[eid]["lastEdit"] = Date.now();
            notesList[eid]["title"] = editor.getContent();
        }    
        localStorage.setItem('notesList',JSON.stringify(notesList));
    }

    const getNoteTitle = () => {
        if(props.action === 'add')
            return `<b>Title</b>`;
        let noteId = props.noteId;
        return notes[noteId]["title"];
    }

    const getNoteContent = () => {
        if(props.action === 'add')
            return `<p></p>`;
        let noteId = props.noteId;
        return notes[noteId]["content"];
    }

    return (
        <>
            <Grid
                container
                className = "newNoteContainer"
            >
                <Grid item xs={12}>
                    <Paper 
                        elevation={2}
                        className = "titleEditor"
                    >
                        <Editor
                            initialValue = {getNoteTitle()}
                            apiKey = '2fo1990uwcftp3lsekv7i48ir1929y8b4xob32u307wqsqtj'
                            id = {"title$"+id}
                            init={{
                                selector: 'div',
                                height: 100,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar:
                                    `undo redo`,  
                                inline: true,
                                skin: 'material-classic',
                                icons: 'material'
                            }}
                            onEditorChange = {handleTitleChange}  
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper 
                        elevation={2}
                        className = "contentEditor"
                    >
                        <Editor
                            initialValue = {getNoteContent()}
                            apiKey = '2fo1990uwcftp3lsekv7i48ir1929y8b4xob32u307wqsqtj'
                            id = {"content$"+id}
                            init={{
                                selector: 'div',
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar:
                                    `undo redo | bold italic underline | alignleft aligncenter alignright alignjustify |
                                    bullist numlist | link`,
                                auto_focus: "content$"+id,
                                branding: false,
                                height:350,
                                resize:false,
                                content_style:
                                 `@import url('https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap'); 
                                  body { font-family: 'Lato'}`,
                                skin: 'material-classic',
                                icons: 'material'
                            }}
                            onEditorChange = {handleContentChange}
                        />
                    </Paper>
                </Grid>
                <Grid
                    container item
                    justify = "center"
                    className = "nav"
                >
                    <Grid item>
                        <Fab color="secondary" onClick={()=>props.changeView({currentView:'home'})}>
                            <HomeIcon />
                        </Fab>
                    </Grid>
                    <Grid item><span className = "tab"></span></Grid>
                    <Grid item>
                        <Fab color="secondary" onClick={()=>props.changeView({currentView:'contact'})}>
                            <ContactsRounded />
                        </Fab>
                    </Grid>
                </Grid>
            </Grid>
            
        </>
    );
}
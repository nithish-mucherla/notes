import Grid from '@material-ui/core/Grid';
import {Editor} from '@tinymce/tinymce-react';
import {v4 as uuidv4} from 'uuid';
import Paper from '@material-ui/core/Paper';
import "../css/NewNote.css";
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -10,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));

export default function NewNote(props) {

    const classes = useStyles();
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
        <Grid
            container
            direction = "column"
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
                                `undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | code
                                bullist numlist outdent indent`,
                            inline: true,
                            auto_focus: "content$"+id
                        }}
                        onEditorChange = {handleContentChange}
                    />
                </Paper>
                <Toolbar>
                    <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={()=>props.changeView({currentView:'home'})}>
                        <HomeIcon />
                    </Fab>
                    <div className={classes.grow} />
                </Toolbar>
            </Grid>
        </Grid>
    );
}
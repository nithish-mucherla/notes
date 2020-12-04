import './App.css';
import Home from './components/Home/js/Home.js';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import {useState} from 'react';
import NewNote from './components/NewNote/js/NewNote.js';

const theme = createMuiTheme({
  palette: {
      primary: {
          main: "#0586ff"
      }
  }
});

function App() {

    const [view, setView] = useState({ currentView: 'home', noteId: '' });
    if( view.currentView === 'home') 
        return (
            <ThemeProvider theme = {theme}>
                <div className = "App">
                    <Home changeView = {setView}/>
                </div>
            </ThemeProvider>     
        );
    else if (view.currentView === 'newNote')
        return <NewNote action = "add" changeView = {setView}/>;
    else 
        return <NewNote action = "edit" changeView = {setView} noteId = {view.noteId} />;

}

export default App;

import BottomNav from '../../BottomNav/js/BottomNav.js';
import Notes from '../../NotesContainer/js/NotesContainer.js';

function Home(props) {
    return (
        <>
            <Notes changeView = {props.changeView} />
            <BottomNav changeView = {props.changeView} />
        </>
    )
}

export default Home;
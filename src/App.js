import './App.css';
import Game from './sapper-the-game/Game';
import {Provider} from "react-redux";
import store from "./sapper-the-game/store";

function App() {
    return (
        <Provider store={store}>
            <Game/>
        </Provider>
    );
}

export default App;

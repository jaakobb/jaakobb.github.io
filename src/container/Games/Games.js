import './Games.css';
import data from '../../data/games.json'

import {MediaCard} from '../../components/Card/index'

export function Games(props) {
    return (
        <div className="games-panel">
            {data.games.map((aGame) => (
                <MediaCard category="G" data={aGame} />
            ))}
        </div>
    );
}
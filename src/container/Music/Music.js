import './Music.css';
import data from '../../data/music.json'

import {MediaCard} from '../../components/Card/index'

export function Music(props) {
    return (
        <div className="music-panel">
            {data.music.map((aMusic) => (
                <MediaCard category="MU" data={aMusic} />
            ))}
        </div>
    );
}
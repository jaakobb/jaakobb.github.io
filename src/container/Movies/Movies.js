import './Movies.css';
import data from '../../data/movies.json'

import {MediaCard} from '../../components/Card/index'

export function Movies(props) {
    return (
        <div className="movies-panel">
            {data.movies.map((aMovie) => (
                <MediaCard category="M" data={aMovie} height="380" />
            ))}
        </div>
    );
}
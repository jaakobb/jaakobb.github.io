import './Series.css';
import data from '../../data/series.json'

import {MediaCard} from '../../components/Card/index'

export function Series(props) {
    return (
        <div className="series-panel">
            {data.series.map((aSeries) => (
                <MediaCard category="S" data={aSeries} />
            ))}
        </div>
    );
}
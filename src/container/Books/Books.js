import './Books.css';
import data from '../../data/books.json'

import {MediaCard} from '../../components/Card/index'

export function Books(props) {
    return (
        <div className="books-panel">
            {data.books.map((aBook) => (
                <MediaCard category="B" data={aBook} height="380" />
            ))}
        </div>
    );
}
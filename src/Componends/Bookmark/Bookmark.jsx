import PropTypes from 'prop-types';

const Bookmark = ({books, readings}) => {
    console.log(readings);
    return (
        <div className="md:w-1/3">
            <div className=' bg-sky-200 border border-sky-700 p-3 rounded-lg'>
                <h3 className=' text-2xl text-sky-500 font-bold'>Spent time on read : {readings} min</h3>
            </div>
            Bookmarks
            <div className=' bg-gray-300 p-2'>
                {
                    books.map((book, idx) => <h3 
                        key={idx}
                        className=' text-xl font-semibold bg-sky-200 p-1 rounded-lg my-1'
                        >{book.Title}</h3>)
                }
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    books: PropTypes.array.isRequired,
    readings: PropTypes.func.isRequired
}

export default Bookmark;
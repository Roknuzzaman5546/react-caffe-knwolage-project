import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';


const Bloog = ({coffe, handlebookmark, handleReadingtime}) => {
        const {ID, Cover, Author, Author_Image, Posted_Date, Title, Reading_Time, Hashtags} = coffe;

    // console.log(coffe)
    //   console.log(id)
    return (
        <div className="border border-x-2 p-2 my-2">
            <img className="w-96" src={Cover} alt="" />
            <div className="flex justify-between my-2">
                <div className="flex gap-2 items-center">
                    <img className="w-10 h-10 rounded-full" src={Author_Image} alt="" />
                    <div>
                        <h3>{Author}</h3>
                        <h3>{Posted_Date}</h3>
                    </div>
                </div>
                <div className='flex gap-1 items-center'>
                    <h3>{Reading_Time} min read</h3>
                    <button onClick={() => handlebookmark(coffe)} className=' text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <div>
                <h2 className=' text-3xl font-semibold'>{Title}</h2>
            </div>
            <div className='flex gap-2 text-red-300'>
                {
                    Hashtags.map((has, idx) => <h3 key={idx}>{has}</h3>)
                }
            </div>
            <button
            className=' text-sky-400 font-bold underline' 
            onClick={() => handleReadingtime(ID, Reading_Time)}
            >Mark as read</button>
        </div>
    );
};
Bloog.propTypes = {
    coffe: PropTypes.object.isRequired,
    handlebookmark: PropTypes.func.isRequired,
    handleReadingtime :PropTypes.func.isRequired
}
export default Bloog;
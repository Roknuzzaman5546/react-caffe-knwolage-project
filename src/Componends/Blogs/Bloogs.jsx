import { useState } from "react";
import Bloog from "../Bloog/Bloog";
import { useEffect } from "react";
import PropTypes from 'prop-types';


const Bloogs = ({handlebookmark, handleReadingtime}) => {
    const [coffes, setCoffes] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setCoffes(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h3>Bloogs</h3>
            {
                coffes.map((coffe, idx) => <Bloog 
                key={idx}
                coffe={coffe} 
                handlebookmark={handlebookmark}
                handleReadingtime={handleReadingtime}
                ></Bloog>)
            }
        </div>
    );
};
Bloogs.propTypes ={
    handlebookmark: PropTypes.func.isRequired,
    handleReadingtime: PropTypes.func.isRequired
}
export default Bloogs;
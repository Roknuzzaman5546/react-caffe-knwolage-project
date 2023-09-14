import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex  justify-between border-b-2 p-2 items-center w-11/12 mx-auto'>
            <h3 className="text-3xl font-bold italic text-orange-400">Cafe Knwoladge By React</h3>
            <img src={profile} alt=""/>            
        </div>
    );
};

export default Header;
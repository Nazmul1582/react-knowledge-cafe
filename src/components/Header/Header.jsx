import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header>
            <div className='container mx-auto flex justify-between items-center py-8 border-b-2'>
                <h2 className="text-4xl font-bold">Knowledge Cafe</h2>
                <img src={profile} alt="profile photo" />
            </div>
        </header>
    );
};

export default Header;
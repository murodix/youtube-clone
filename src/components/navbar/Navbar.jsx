import './navbar.scss';
import { FaBars } from 'react-icons/fa';
import SearchBar from './search-bar/SearchBar';
import RightToolbar from './right-toolbar/RightToolbar';
import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../../redux/actions/sidebar/sidebar.action';

const Navbar = () => {

    const dispatch = useDispatch();

    const expandSideBar = () => {
        dispatch(toggleSideBar());
    }

    return (
        <div className="navbar">
            <div className="navbar__logo-container">
                <FaBars className="navbar__menuIcon" onClick={expandSideBar} />
                <img src="../images/youtube-logo.svg" alt="Youtube logo" className="navbar__logo" />
            </div>

            <SearchBar className="navbar__search"/>
            <RightToolbar/>
        </div>
    )
}

export default Navbar

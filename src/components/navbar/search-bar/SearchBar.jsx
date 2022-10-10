import React, { useRef } from 'react';
import './searchBar.scss';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../../redux/actions/search/search.action';



const SearchBar = () => {

    const dispatch = useDispatch();
    const searchRef = useRef("");
    const navigate = useNavigate();

    const onHandleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearch(searchRef?.current?.value));
        navigate('/search');
    }

    return (
        <div className="searchBar">
            <div className="searchBar__container">
                <form className="searchBar__form">
                    <input  ref= {searchRef} className="searchBar__input" type="text" name="" id="search-field" placeholder="Search" />
                    <button className="searchBar__button" onClick={onHandleSearch} >
                        <FaSearch />
                    </button>
                </form>
            </div>
            <div className="searchBar__mic-container">
                <FaMicrophone className="searchBar__mic" />
            </div>
        </div>
    )
}

export default SearchBar

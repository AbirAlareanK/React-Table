import { FiSearch } from 'react-icons/fi';

const SearchBar = () => (
    <form>
        <input
            type="text"
            placeholder="Search.."
            name="s" 
        />
        <span className='search-icon' type="submit"><FiSearch size={20} /></span>
    </form>
);

export default SearchBar;
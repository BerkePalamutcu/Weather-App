import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function SearchLocation({ handleText, text, handleClick }) {
  const buttonRef = useRef();
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={handleText}
          className="locationInput"
          type="text"
          value={text}
          placeholder="Search Location"
          required
        />

        <button ref={buttonRef} className="searchButton" onClick={handleClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          Search
        </button>
      </form>
    </div>
  );
}
export default SearchLocation;

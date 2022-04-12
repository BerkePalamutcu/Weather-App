import React, { useState } from 'react';

function SearchLocation(props) {
  const [text, textChange] = useState('kusadasi');

  const handleText = (e) => {
    textChange(e.target.value);
  };

  console.log(props);
  return (
    <div>
      <form>
        <input
          onChange={handleText}
          className="locationInput"
          type="text"
          value={text}
          required
        ></input>
      </form>
      <div> degrees</div>
    </div>
  );
}
export default SearchLocation;

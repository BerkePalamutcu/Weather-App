import React, { useState } from 'react';

function TextInput() {
  const [text, textChange] = useState('');
  const handleText = (e) => {
    textChange(e.target.value);
  };
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
        <button type="submit">search</button>
      </form>
    </div>
  );
}
export default TextInput;

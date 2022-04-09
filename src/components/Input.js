import React, { useState } from 'react';

function TextInput() {
  const [text, textChange] = useState('');
  const handleText = (e) => {
    let input = textChange(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          name={text}
          onChange={handleText}
          className="locationInput"
          type="text"
          required
        ></input>
        <button type="submit">search</button>
      </form>
    </div>
  );
}
export default TextInput;

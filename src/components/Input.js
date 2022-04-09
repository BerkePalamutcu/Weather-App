import React, { useState } from 'react';

function TextInput() {
  const [text, textChange] = useState('kusadasi');
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
      </form>
    </div>
  );
}
export default TextInput;

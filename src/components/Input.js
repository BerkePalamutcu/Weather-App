import React, { useState } from 'react';

function TextInput() {
  const [text, textChange] = useState('');
  const handleText = (e) => {
    textChange(console.log(e.target.value));
  };
  return (
    <div>
      <form>
        <input
          onChange={handleText}
          className="locationInput"
          type="text"
          required
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
export default TextInput;

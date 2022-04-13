function SearchLocation({ handleText, text }) {
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
export default SearchLocation;

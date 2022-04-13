import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
function SearchLocation({ handleText, text, onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          id="input-with-icon-textfield"
          onChange={handleText}
          className="locationInput"
          type="text"
          value={text}
          placeholder="Search Location"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          color="success"
          variant="standard"
          required
        />
      </form>
    </div>
  );
}
export default SearchLocation;

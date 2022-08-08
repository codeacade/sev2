import './App.css';

function App() {
  const CLIENT_ID = "541a6049b5a447988eadc22594862c99";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
	
  return (
    <div className="App">
      <header className="App-header">
        <h2>Spotify React</h2>
		<a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
			Login to Spotify
		</a>
      </header>
    </div>
  );
}

export default App;
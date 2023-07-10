import './Style.css';

function App() {
  return (
  <>
  <div className="container">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" />
    <label htmlFor="mobile">Mobile</label>
    <input type="text" name="mobile" id="mobile" />
    <label htmlFor="mobile">Email</label>
    <input type="text" name="email" id="email" />
    <label htmlFor="mobile">Email</label>
    <input type="button" name="send" id="send" value="SEND" />
  </div>
  </>
  );
}

export default App;

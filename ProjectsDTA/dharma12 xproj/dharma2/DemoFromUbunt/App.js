import FormContainer from './components/FormContainer';
import DisplaySavedNotes from './components/DisplaySavedNotes';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Demo Notes Task</h1>
      <div className='app-container'>
        <FormContainer/>
        <DisplaySavedNotes/>
      </div>
    </div>
  );
}

export default App;

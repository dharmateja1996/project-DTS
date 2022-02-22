import { Provider } from 'react-redux';

import TodoApp from './components/TodoApp';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h6>Demo on Todo Using Redux</h6>
      
      <TodoApp/>
    </div>
    </Provider>
  );
}

export default App;

import './App.css'
import { Provider } from 'react-redux';
import { store } from './app/store';
import Todo from './Todo'
function App() {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  )
}

export default App;


// Note that :
// The <Provider> component makes the Redux Store  available to any nested components that need to access the redux store.
// The store is passed as a prop to the Provider component.
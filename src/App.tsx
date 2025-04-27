import ToDoList from "./components/ToDoList.tsx";
import './App.css'
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

function App() {


  return (
    <Provider store={store}>
      <ToDoList/>
    </Provider>
  )
}

export default App

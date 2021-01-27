import logo from './logo.svg';
import './App.css';
import { MoodForm, MoodList } from './components/mood';


function App() {
  return (

      <div>
        <div>
          <MoodForm></MoodForm>
        </div>
        <div>
          <MoodList></MoodList>
        </div>
      </div>

    );
}

export default App;

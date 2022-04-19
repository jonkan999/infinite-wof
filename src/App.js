
import Wheel from './Wheel.js';
import './App.css'
import wofimg from './westers-wof2.png'

function App() {
  return (
    <div>
      <div className="wheel">
        <Wheel/>
      </div>
      <div>
        <img src={wofimg} className="westers-wof"/>
      </div>
    </div>
  );
}

export default App;

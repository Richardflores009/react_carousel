import logo from './logo.svg';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function App() {
  return (
    <div className="App">
      <Carousel>
                <div>
                    <img src={logo} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={logo} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={logo} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  );
}

export default App;

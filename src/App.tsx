import './styles/App.scss'
import { Navbar } from './components/Navbar'
import { StationList } from './components/StationList'
import { Footer } from './components/Footer'

const App: React.FC = () => {

  return (
    <div className="main-container">
      <div className="wrapper">
        <Navbar title={"Station"} />
        <StationList />
        <Footer />
      </div>
    </div>
  )
}

export default App

import './Home.css'
import Image from "../pics/hi.jpg"

const Home = () => {
  return (
    <div className="home-container">
      <img id="hi" src={Image} alt="Hi" />
    </div>
  )
}

export default Home
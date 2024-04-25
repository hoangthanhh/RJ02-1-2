import laptop from '../images/Laptop.png'
import img2 from '../images/Laptop2.png'
import img3 from '../images/Laptop3.png'
import img4 from '../images/Laptop4.png'

const Laptop = () => {
  return (
    <>
      <h2 className="text-center">Laptop</h2>
      <img src={laptop} className="img-fluid" alt="" />
      <img src={img2} className="img-fluid m-5" alt="" />
      <img src={img3} className="img-fluid m-5" alt="" />
      <img src={img4} className="img-fluid m-5" alt="" />
    </>
  )
}

export default Laptop
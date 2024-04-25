import desktop from '../images/Desktop.png'
import desktop2 from '../images/Desktop2.png'
import desktop3 from '../images/Desktop3.png'
import desktop4 from '../images/Desktop4.png'


const Desktop = () => {
  return (
    <>
      <h2 className="text-center">Desktop</h2>
      <img src={desktop} className="img-fluid" alt="" />
      <img src={desktop2} className="img-fluid" alt="" />
      <img src={desktop3} className="img-fluid" alt="" />
      <img src={desktop4} className="img-fluid m-5" alt="" />
    </>
  )
}

export default Desktop
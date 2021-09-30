import img1 from '../../images/img1.jpeg'
import img2 from '../../images/img2.jpeg'
import img3 from '../../images/img3.jpeg'
import img4 from '../../images/img4.jpeg'
import img5 from '../../images/img5.jpeg'
import img6 from '../../images/img6.jpeg'

import { Icons } from '../Icons'

export function Hero() {
  return (
    <>
      <div>
        <a href="/">
          <Icons
            width="32"
            name="spotify-icon"
            className="myFistSvg"
            color="orange"
          />
          <Icons
            width="32"
            name="medium-icon"
            className="myFistSvg"
            color="orange"
          />
          <Icons
            width="32"
            name="mail-icon"
            className="myFistSvg"
            color="orange"
          />
        </a>
      </div>
      <div>
        <img src={img1} alt="img" width="200" />
        <img src={img2} alt="img" width="200" />
        <img src={img3} alt="img" width="200" />
        <img src={img4} alt="img" width="200" />
        <img src={img5} alt="img" width="200" />
        <img src={img6} alt="img" width="200" />
      </div>
    </>
  )
}

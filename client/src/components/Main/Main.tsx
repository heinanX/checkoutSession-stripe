import Announcement from '../Announcement/Announcement'
import './Main.css'

const Main = () => {
  return (
    <main>
      <img src="../../../../src/assets/ad-Capture.PNG" style={{ width: '100%', display: 'block'}}/>
      <Announcement />

      <div className='productlist'>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
          <li>List item 4</li>
        </ul>
      </div>
    </main>
  )
}

export default Main
import UserProfile from './component/UserProfile/index'

import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
  {
    uniqueNo: 5,
    imageUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1669539329/javeed%20ali%20photos/IMG_20181026_153735_b98f4r.jpg',
    name: 'Javeed Ali',
    role: 'FullStack Web developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">user List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App

//  <UserProfile userDetails={userDetailsList} />

/* <UserProfile userDetails={userDetailsList[0]} />
      <UserProfile userDetails={userDetailsList[1]} />
      <UserProfile userDetails={userDetailsList[2]} />
      <UserProfile userDetails={userDetailsList[3]} /> */

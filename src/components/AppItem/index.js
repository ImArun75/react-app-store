// Write your code here
// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl, category} = appDetails
  return (
    <li className="container-app">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p className="img-heading">{appName}</p>
    </li>
  )
}

export default AppItem

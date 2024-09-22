// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickButton, isActiveId} = props
  const {tabId, displayText} = tabDetails

  const classChangeforActiveTab = isActiveId ? 'active-tab' : ''

  const onClickButtonEvent = () => {
    onClickButton(tabId)
  }
  return (
    <li className="container-tab">
      <button
        className={`button ${classChangeforActiveTab}`}
        type="button"
        onClick={onClickButtonEvent}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

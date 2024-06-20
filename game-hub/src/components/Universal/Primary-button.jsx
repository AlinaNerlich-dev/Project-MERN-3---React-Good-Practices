import "./Primary-button.css"

// eslint-disable-next-line react/prop-types
const PrimaryButton = ({buttonText, onClick}) => {
  return (
    <div>
        <button className="primary_button" onClick={onClick}>{buttonText}</button>
    </div>
  )
}

export default PrimaryButton
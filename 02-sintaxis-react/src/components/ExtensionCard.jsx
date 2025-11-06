import "../stylesheets/ExtensionCard.css";
import "../components/LoginForm"

export const ExtensionCard = ({cardTitle, cardImage, cardDescription}) => {
  return (
    <>
    <div className="tarjeta">
      <img className="imgLogo" src={cardImage} alt="" />
      <h1 className="title1">{cardTitle}</h1>
      <p className="pCard">{cardDescription}</p>
    </div>
    </>
  )
}

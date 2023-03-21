// const newMessage = {
//     message: "Hola mundom",
//     title: "Fernando"}

import { PropTypes } from "prop-types";

const FirstApp = ({ title, subTitle, name }) => {
  // console.log(props.title)

  return (
    <>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <h1> {title}</h1>
      <p> {subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  name: "fernando herera ", 
  subTitle: "no hay subtitulo",
  title: "no hay titulo",
 
 
};

export default FirstApp;

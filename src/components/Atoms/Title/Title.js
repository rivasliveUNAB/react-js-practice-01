import {createElement} from "react";

const Title = ({htmlTag = 'h2', ...restProps}) => {
  return createElement(htmlTag, restProps)
};

export default Title;
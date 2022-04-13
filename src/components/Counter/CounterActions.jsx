import React from "react";

function Button(props) {
  let { action, opt } = props;
  return (
    <button class="button-64" onClick={action}>
      <span class="text">{opt}</span>
    </button>
  );
}

export default Button;

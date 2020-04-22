import React from "react";

const MessageCard = ({ message }) => {
  const { name, comment } = message;
  return (
    <>
      <h4>{name}</h4>
      <p>{comment}</p>
    </>
  );
};

export default MessageCard;

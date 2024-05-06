import React from "react";

interface GameProps {
  value?: string | null;
  onClick?: () => void;
}

const Game: React.FC = (props) => {
  return (
    <div onClick={props.onClick} className="block">
      {props.value}
    </div>
  );
};

export default Game;

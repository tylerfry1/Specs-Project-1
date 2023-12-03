import React from "react";

const Square = (props) => {
    const handleClick = () => {
        if (!props.squareValue){
            if (props.player){
                props.squares.splice(props.index, 1, "X");
                props.setSquares(props.squares);
                props.setPlayer(!props.player);
            } else {
                props.squares.splice(props.index, 1, "0");
                props.setSquares(props.squares);
                props.setPlayer(!props.player);

            }
        }
    };
    
    }
}
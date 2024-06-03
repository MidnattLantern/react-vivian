// functional
import React from "react";
// styles
import Styles from "../../styles/NavPie.module.css";
import "../../global.css";
// SVG assets
import {ReactComponent as Piece0} from "../../assets/NavPie/NavPie0.svg";
import {ReactComponent as Piece1} from "../../assets/NavPie/NavPie1.svg";
import {ReactComponent as Piece2} from "../../assets/NavPie/NavPie2.svg";
import {ReactComponent as Piece3} from "../../assets/NavPie/NavPie3.svg";
import {ReactComponent as Piece4} from "../../assets/NavPie/NavPie4.svg";
import {ReactComponent as Piece5} from "../../assets/NavPie/NavPie5.svg";
import {ReactComponent as Piece6} from "../../assets/NavPie/NavPie6.svg";

const NavPie = () => {
    const actionPiece0 = () => {
        console.log("Pressed Piece 0")
    }
    const actionPiece1 = () => {
        console.log("Pressed Piece 1")
    }
    const actionPiece2 = () => {
        console.log("Pressed Piece 2")
    }
    const actionPiece3 = () => {
        console.log("Pressed Piece 3")
    }
    const actionPiece4 = () => {
        console.log("Pressed Piece 4")
    }
    const actionPiece5 = () => {
        console.log("Pressed Piece 5")
    }
    const actionPiece6 = () => {
        console.log("Pressed Piece 6")
    }

    return(<>
    <div className={Styles.NavPieContainer}>
        <Piece0 onClick={actionPiece0} className={`${Styles.NavPiePiece} ${Styles.NavPie0}`}/>
        <Piece1 onClick={actionPiece1} className={`${Styles.NavPiePiece} ${Styles.NavPie1}`}/>
        <Piece2 onClick={actionPiece2} className={`${Styles.NavPiePiece} ${Styles.NavPie2}`}/>
        <Piece3 onClick={actionPiece3} className={`${Styles.NavPiePiece} ${Styles.NavPie3}`}/>
        <Piece4 onClick={actionPiece4} className={`${Styles.NavPiePiece} ${Styles.NavPie4}`}/>
        <Piece5 onClick={actionPiece5} className={`${Styles.NavPiePiece} ${Styles.NavPie5}`}/>
        <Piece6 onClick={actionPiece6} className={`${Styles.NavPiePiece} ${Styles.NavPie6}`}/>
    </div>
    </>);
};

export default NavPie;

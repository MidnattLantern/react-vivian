// functional
import React, { useEffect, useState } from "react";
// styles
import Styles from "../../styles/NavPieVer2.module.css";
import "../../global.css";
// SVG assets
import {ReactComponent as Piece0} from "../../assets/NavPieVer2/NavPieOpt0.svg";
import {ReactComponent as Piece1} from "../../assets/NavPieVer2/NavPieOpt1.svg";
import {ReactComponent as Piece2} from "../../assets/NavPieVer2/NavPieOpt2.svg";
import {ReactComponent as Piece3} from "../../assets/NavPieVer2/NavPieOpt3.svg";
import {ReactComponent as Piece4} from "../../assets/NavPieVer2/NavPieOpt4.svg";
import {ReactComponent as Piece5} from "../../assets/NavPieVer2/NavPieOpt5.svg";
import {ReactComponent as Piece6} from "../../assets/NavPieVer2/NavPieOpt6.svg";

import { useButtonStates } from '../../contexts/GamepadContext';
import { useAnalogStickStates } from '../../contexts/GamepadContext';

const NavPieVer2 = () => {
    const buttonStates = useButtonStates();
    const analogStickStates = useAnalogStickStates();
    const [activeLeftPiece, setActiveLeftPiece] = useState(0);

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

    useEffect(() => {
        if (
            analogStickStates.left.x > 0.222 &&
            analogStickStates.left.y < 0.666 && analogStickStates.left.y < 0.000
        ) {setActiveLeftPiece(1)}
        else if (
            analogStickStates.left.x > 0.222 &&
            analogStickStates.left.y > -0.666 && analogStickStates.left.y > 0.000
        ) {setActiveLeftPiece(2)}
        else if (
            analogStickStates.left.x > -0.222 && analogStickStates.left.x < 0.222 &&
            analogStickStates.left.y > 0.666
        ) {setActiveLeftPiece(3)}
        else if (
            analogStickStates.left.x < -0.222 &&
            analogStickStates.left.y > -0.666 && analogStickStates.left.y > -0.000
        ) {setActiveLeftPiece(4)}
        else if (
            analogStickStates.left.x < -0.222 &&
            analogStickStates.left.y < 0.666 && analogStickStates.left.y < -0.000
        ) {setActiveLeftPiece(5)}
        else if (
            analogStickStates.left.x < 0.222 && analogStickStates.left.x > -0.222 &&
            analogStickStates.left.y < -0.666
        ) {setActiveLeftPiece(6)}
        else {
            setActiveLeftPiece(0);
        }
    }, [analogStickStates]);

    return(<>
    <div className={Styles.NavPieContainer}>
        <Piece0 onClick={actionPiece0} className={`${Styles.NavPiePiece} ${activeLeftPiece === 0 ? Styles.ActiveNavPie0 : Styles.NavPie0}`}/>
        <Piece1 onClick={actionPiece1} className={`${Styles.NavPiePiece} ${activeLeftPiece === 1 ? Styles.ActiveNavPie1 : Styles.NavPie1}`}/>
        <Piece2 onClick={actionPiece2} className={`${Styles.NavPiePiece} ${activeLeftPiece === 2 ? Styles.ActiveNavPie2 : Styles.NavPie2}`}/>
        <Piece3 onClick={actionPiece3} className={`${Styles.NavPiePiece} ${activeLeftPiece === 3 ? Styles.ActiveNavPie3 : Styles.NavPie3}`}/>
        <Piece4 onClick={actionPiece4} className={`${Styles.NavPiePiece} ${activeLeftPiece === 4 ? Styles.ActiveNavPie4 : Styles.NavPie4}`}/>
        <Piece5 onClick={actionPiece5} className={`${Styles.NavPiePiece} ${activeLeftPiece === 5 ? Styles.ActiveNavPie5 : Styles.NavPie5}`}/>
        <Piece6 onClick={actionPiece6} className={`${Styles.NavPiePiece} ${activeLeftPiece === 6 ? Styles.ActiveNavPie6 : Styles.NavPie6}`}/>
    </div>

    </>);
};

export default NavPieVer2;

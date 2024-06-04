// functional
import React, { useEffect } from 'react';
// styles
import Styles from "../../styles/GamepadTest.module.css";
import "../../global.css"
// gamepad modues
import {ReactComponent as BodySVG} from "../../assets/gamepad/Body.svg";
import {ReactComponent as FaceDownSVG} from "../../assets/gamepad/FaceDown.svg";
import {ReactComponent as FaceRightSVG} from "../../assets/gamepad/FaceRight.svg";
import {ReactComponent as FaceLeftSVG} from "../../assets/gamepad/FaceLeft.svg";
import {ReactComponent as FaceUpSVG} from "../../assets/gamepad/FaceUp.svg";
import {ReactComponent as LSVG} from "../../assets/gamepad/L.svg";
import {ReactComponent as RSVG} from "../../assets/gamepad/R.svg";
import {ReactComponent as LTSVG} from "../../assets/gamepad/LT.svg";
import {ReactComponent as RTSVG} from "../../assets/gamepad/RT.svg";
import {ReactComponent as LeftMenuSVG} from "../../assets/gamepad/LeftMenu.svg";
import {ReactComponent as RightMenuSVG} from "../../assets/gamepad/RightMenu.svg";
import {ReactComponent as DPadUpSVG} from "../../assets/gamepad/DPadUp.svg";
import {ReactComponent as DPadDownSVG} from "../../assets/gamepad/DPadDown.svg";
import {ReactComponent as DPadLeftSVG} from "../../assets/gamepad/DPadLeft.svg";
import {ReactComponent as DPadRightSVG} from "../../assets/gamepad/DPadRight.svg";
import {ReactComponent as RootMenuSVG} from "../../assets/gamepad/RootMenu.svg";

const GamepadTest = () => {
    const pollGamepad = () => {
        const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
        for (let i = 0; i < gamepads.length; i++) {
            const gp = gamepads[i];
            if (!gp) continue;
            if (gp.buttons[0].pressed) {
                console.log('[0] face down');
            }
            if (gp.buttons[1].pressed) {
                console.log('[1] face right')
            }
            if (gp.buttons[2].pressed) {
                console.log('[2] face left')
            }
            if (gp.buttons[3].pressed) {
                console.log('[3] face up')
            }
            if (gp.buttons[4].pressed) {
                console.log('[4] L')
            }
            if (gp.buttons[5].pressed) {
                console.log('[5] R')
            }
            if (gp.buttons[6].pressed) {
                console.log('[6] LT')
            }
            if (gp.buttons[7].pressed) {
                console.log('[7] RT')
            }
            if (gp.buttons[8].pressed) {
                console.log('[8] left menu')
            }
            if (gp.buttons[9].pressed) {
                console.log('[9] right menu')
            }
            if (gp.buttons[10].pressed) {
                console.log('[10] ?')
            }
            if (gp.buttons[11].pressed) {
                console.log('[11] ?')
            }
            if (gp.buttons[12].pressed) {
                console.log('[12] D-pad up')
            }
            if (gp.buttons[13].pressed) {
                console.log('[13] D-pad down')
            }
            if (gp.buttons[14].pressed) {
                console.log('[14] D-pad-left')
            }
            if (gp.buttons[15].pressed) {
                console.log('[15] D-pad-right')
            }
            if (gp.buttons[16].pressed) {
                console.log('[16] root menu')
            }
        }
    };
    useEffect(() => {
        const interval = setInterval(pollGamepad, 100);
        return () => {
              clearInterval(interval);
        };
    }, []);

    return(<>
        <div className={Styles.GamepadTestContainer}>
            <BodySVG className={Styles.BodySVG} />
            <FaceDownSVG className={Styles.FaceDownSVG} />
            <FaceRightSVG className={Styles.FaceRightSVG} />
            <FaceLeftSVG className={Styles.FaceLeftSVG}/>
            <FaceUpSVG className={Styles.FaceUpSVG} />
            <LSVG className={Styles.LSVG} />
            <RSVG className={Styles.RSVG} />
            <LTSVG className={Styles.LTSVG} />
            <RTSVG className={Styles.RTSVG} />
            <LeftMenuSVG className={Styles.LeftMenuSVG} />
            <RightMenuSVG className={Styles.RightMenuSVG} />
            <DPadUpSVG className={Styles.DPadUpSVG} />
            <DPadDownSVG className={Styles.DPadDownSVG} />
            <DPadLeftSVG className={Styles.DPadLeftSVG} />
            <DPadRightSVG className={Styles.DPadRightSVG} />
            <RootMenuSVG className={Styles.RootMenuSVG} />
        </div>
    </>);
};

export default GamepadTest;

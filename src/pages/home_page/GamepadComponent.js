// functional
import React, { useEffect, useState, useRef } from 'react';
// styles
import Styles from "../../styles/GamepadComponent.module.css";
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
import {ReactComponent as LeftAnalogSVG} from "../../assets/gamepad/LeftAnalog.svg";
import {ReactComponent as RightAnalogSVG} from "../../assets/gamepad/RightAnalog.svg";

const GamepadComponent = () => {
    const [buttonStates, setButtonStates] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
    });
    const [analogStickStates, setAnalogStickStates] = useState({
        left: { x: 0, y: 0 },
        right: { x: 0, y: 0 },
    });

    const myRef = useRef(null);
    
    const pollGamepad = () => {
        const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
        let newButtonStates = { ...buttonStates };
        let newanalogStickStates = { ...analogStickStates };

        for (let i = 0; i < gamepads.length; i++) {
            const gp = gamepads[i];
            if (!gp) continue;
            for (let j = 0; j < gp.buttons.length; j++) {
                newButtonStates[j] = gp.buttons[j].pressed;
            }
            if (gp.buttons[0].pressed) {
                console.log("press [0]")
            }
            if (gp.axes.length >= 2) {
                newanalogStickStates.left = {
                    x: gp.axes[0],
                    y: gp.axes[1],
                };
            }
            if (gp.axes.length >= 4) {
                newanalogStickStates.right = {
                    x: gp.axes[2],
                    y: gp.axes[3],
                };
            }
        }
        setButtonStates(newButtonStates);
        setAnalogStickStates(newanalogStickStates);
    };
    useEffect(() => {
        const interval = setInterval(pollGamepad, 1);
        return () => {
            clearInterval(interval);
        };
    }, [buttonStates, analogStickStates]);

    return(<>
        <div className={`${Styles.GamepadTestContainer}`}>
            <BodySVG className={`${Styles.BodySVG}`} />
            <FaceDownSVG className={`${Styles.FaceDownSVG} ${buttonStates[0] ? Styles.ButtonStateSVGTrue : Styles.ButtonStateSVGFalse}`} />
            <FaceRightSVG className={`${Styles.FaceRightSVG} ${buttonStates[1] ? Styles.ButtonStateSVGTrue : Styles.ButtonStateSVGFalse}`} />
            <FaceLeftSVG className={`${Styles.FaceLeftSVG} ${buttonStates[2] ? Styles.ButtonStateSVGTrue : Styles.ButtonStateSVGFalse}`}/>
            <FaceUpSVG className={`${Styles.FaceUpSVG} ${buttonStates[3] ? Styles.ButtonStateSVGTrue : Styles.ButtonStateSVGFalse}`} />
            <LSVG className={`${Styles.LSVG} ${buttonStates[4] ? Styles.ButtonStateSVGTrue : Styles.ButtonStateSVGFalse}`} />
            <RSVG className={`${Styles.RSVG} ${buttonStates[5] ? Styles.ButtonStateSVGTrue : Styles.ButtonStateSVGFalse}`} />
            <LTSVG className={`${Styles.LTSVG} ${buttonStates[6] ? Styles.ButtonStateSVGTrue : Styles.ButtonStateSVGFalse}`} />
            <RTSVG className={`${Styles.RTSVG} ${buttonStates[7] ? Styles.ButtonStateSVGTrue : Styles.ButtonStateSVGFalse}`} />
            <LeftMenuSVG className={`${Styles.LeftMenuSVG} ${buttonStates[8] ? Styles.ButtonStateSVGTrue : Styles.ButtonStateSVGFalse}`} />
            <RightMenuSVG className={`${Styles.RightMenuSVG} ${buttonStates[9] ? Styles.ButtonStateSVGTrue : Styles.ButtonStateSVGFalse}`} />
            <LeftAnalogSVG className={`${Styles.LeftAnalogSVG} ${buttonStates[10] ? Styles.ButtonStateSVGTrue : Styles.ButtonStateSVGFalse}`} />
            <RightAnalogSVG className={`${Styles.RightAnalogSVG} ${buttonStates[11] ? Styles.ButtonStateSVGTrue : Styles.ButtonStateSVGFalse}`} />
            <DPadUpSVG className={`${Styles.DPadUpSVG} ${buttonStates[12] ? Styles.ButtonStateSVGTrue : Styles.ButtonStateSVGFalse}`} />
            <DPadDownSVG className={`${Styles.DPadDownSVG} ${buttonStates[13] ? Styles.ButtonStateSVGTrue : Styles.ButtonStateSVGFalse}`} />
            <DPadLeftSVG className={`${Styles.DPadLeftSVG} ${buttonStates[14] ? Styles.ButtonStateSVGTrue : Styles.ButtonStateSVGFalse}`} />
            <DPadRightSVG className={`${Styles.DPadRightSVG} ${buttonStates[15] ? Styles.ButtonStateSVGTrue : Styles.ButtonStateSVGFalse}`} />
            <RootMenuSVG className={`${Styles.RootMenuSVG} ${buttonStates[16] ? Styles.ButtonStateSVGTrue : Styles.ButtonStateSVGFalse}`} />
        </div>

        <br/>
        <div className={Styles.GamepadConsoleComponent}>
            <table>
                <tr>
                    <td className={buttonStates[0] ? Styles.ButtonStateTrue : Styles.ButtonStateFalse}>Face Down</td>
                    <td className={buttonStates[1] ? Styles.ButtonStateTrue : Styles.ButtonStateFalse}>Face Right</td>
                    <td className={buttonStates[2] ? Styles.ButtonStateTrue : Styles.ButtonStateFalse}>Face Left</td>
                    <td className={buttonStates[3] ? Styles.ButtonStateTrue : Styles.ButtonStateFalse}>Face Up</td>
                </tr>
                <tr>
                    <td className={buttonStates[4] ? Styles.ButtonStateTrue : Styles.ButtonStateFalse}>L</td>
                    <td className={buttonStates[5] ? Styles.ButtonStateTrue : Styles.ButtonStateFalse}>R</td>
                    <td className={buttonStates[6] ? Styles.ButtonStateTrue : Styles.ButtonStateFalse}>LT</td>
                    <td className={buttonStates[7] ? Styles.ButtonStateTrue : Styles.ButtonStateFalse}>RT</td>
                </tr>
                <tr>
                    <td className={buttonStates[8] ? Styles.ButtonStateTrue : Styles.ButtonStateFalse}>Left Menu</td>
                    <td className={buttonStates[9] ? Styles.ButtonStateTrue : Styles.ButtonStateFalse}>Right Menu</td>
                    <td className={buttonStates[10] ? Styles.ButtonStateTrue : Styles.ButtonStateFalse}>Left Analog</td>
                    <td className={buttonStates[11] ? Styles.ButtonStateTrue : Styles.ButtonStateFalse}>Right Analog</td>
                </tr>
                <tr>
                    <td className={buttonStates[12] ? Styles.ButtonStateTrue : Styles.ButtonStateFalse}>D-Pad Up</td>
                    <td className={buttonStates[13] ? Styles.ButtonStateTrue : Styles.ButtonStateFalse}>D-Pad Down</td>
                    <td className={buttonStates[14] ? Styles.ButtonStateTrue : Styles.ButtonStateFalse}>D-Pad Left</td>
                    <td className={buttonStates[15] ? Styles.ButtonStateTrue : Styles.ButtonStateFalse}>D-Pad Right</td>
                </tr>
                <tr>
                    <td className={buttonStates[16] ? Styles.ButtonStateTrue : Styles.ButtonStateFalse}>Root Menu</td>
                    <td/>
                    <td/>
                    <td/>
                </tr>
            </table>
            <div className={Styles.AnalogSVGContainer}>
                <div ref={myRef} className={Styles.JoystickContainer}>
                    <p>Left analog stick:</p>
                    <p>x={analogStickStates.left.x}</p>
                    <p>y={analogStickStates.left.y}</p>
                    <hr/>
                    <p>Right analog stick:</p>
                    <p>x={analogStickStates.right.x}</p>
                    <p>y={analogStickStates.right.y}</p>
                </div>
                <div className={Styles.AnalogSVGBox}>
                    <svg height={200} width={200}>
                        <circle r={50} cx={100 + (analogStickStates.left.x * 50)} cy={100 + (analogStickStates.left.y * 50)} className={Styles.AnalogSVGCircle}/>
                    </svg>
                </div>
                <div className={Styles.AnalogSVGBox}>
                    <svg height={200} width={200}>
                    <circle r={50} cx={100 + (analogStickStates.right.x * 50)} cy={100 + (analogStickStates.right.y * 50)} className={Styles.AnalogSVGCircle}/>
                    </svg>
                </div>
            </div>
        </div>
    </>);
};

export default GamepadComponent;

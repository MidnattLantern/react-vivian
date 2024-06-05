// functional
import React, { useEffect, useState } from 'react';
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
    let [buttonStates, setButtonStates] = useState({
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
    
    const pollGamepad = () => {
        const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
        let newButtonStates = { ...buttonStates };

        for (let i = 0; i < gamepads.length; i++) {
            const gp = gamepads[i];
            if (!gp) continue;
            for (let j = 0; j < gp.buttons.length; j++) {
                newButtonStates[j] = gp.buttons[j].pressed;
            }
        }
        setButtonStates(newButtonStates);
    };
    useEffect(() => {
        const interval = setInterval(pollGamepad, 100);
        return () => {
              clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        // This effect logs the button states whenever they change
        for (let button in buttonStates) {
            if (buttonStates[button]) {
//                console.log(`[${button}] is pressed`);
            }
        }
    }, [buttonStates]);

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
        <table>
            <tr>
                <td><p>Face Down: </p></td>
                <td>{buttonStates[0] ? (<p>true</p>) : (<p>false</p>)}</td>
            </tr>
            <tr>
                <td><p>Face Right: </p></td>
                <td>{buttonStates[1] ? (<p>true</p>) : (<p>false</p>)}</td>
            </tr>
            <tr>
                <td><p>Face Left: </p></td>
                <td>{buttonStates[2] ? (<p>true</p>) : (<p>false</p>)}</td>
            </tr>
            <tr>
                <td><p>Face Up: </p></td>
                <td>{buttonStates[3] ? (<p>true</p>) : (<p>false</p>)}</td>
            </tr>
            <tr>
                <td><p>L: </p></td>
                <td>{buttonStates[4] ? (<p>true</p>) : (<p>false</p>)}</td>
            </tr>
            <tr>
                <td><p>R: </p></td>
                <td>{buttonStates[5] ? (<p>true</p>) : (<p>false</p>)}</td>
            </tr>
            <tr>
                <td><p>LT: </p></td>
                <td>{buttonStates[6] ? (<p>true</p>) : (<p>false</p>)}</td>
            </tr>
            <tr>
                <td><p>RT: </p></td>
                <td>{buttonStates[7] ? (<p>true</p>) : (<p>false</p>)}</td>
            </tr>
            <tr>
                <td><p>Left Menu: </p></td>
                <td>{buttonStates[8] ? (<p>true</p>) : (<p>false</p>)}</td>
            </tr>
            <tr>
                <td><p>Right Menu: </p></td>
                <td>{buttonStates[9] ? (<p>true</p>) : (<p>false</p>)}</td>
            </tr>
            <tr>
                <td><p>??: </p></td>
                <td>{buttonStates[10] ? (<p>true</p>) : (<p>false</p>)}</td>
            </tr>
            <tr>
                <td><p>??: </p></td>
                <td>{buttonStates[11] ? (<p>true</p>) : (<p>false</p>)}</td>
            </tr>
            <tr>
                <td><p>D-Pad Up: </p></td>
                <td>{buttonStates[12] ? (<p>true</p>) : (<p>false</p>)}</td>
            </tr>
            <tr>
                <td><p>D-Pad Down: </p></td>
                <td>{buttonStates[13] ? (<p>true</p>) : (<p>false</p>)}</td>
            </tr>
            <tr>
                <td><p>D-Pad Left: </p></td>
                <td>{buttonStates[14] ? (<p>true</p>) : (<p>false</p>)}</td>
            </tr>
            <tr>
                <td><p>D-Pad Right: </p></td>
                <td>{buttonStates[15] ? (<p>true</p>) : (<p>false</p>)}</td>
            </tr>
            <tr>
                <td><p>Root Menu: </p></td>
                <td>{buttonStates[16] ? (<p>true</p>) : (<p>false</p>)}</td>
            </tr>
        </table>
    </>);
};

export default GamepadTest;

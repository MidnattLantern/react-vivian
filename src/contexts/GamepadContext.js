import { createContext, useContext, useEffect, useState } from "react";

export const ButtonStatesContext = createContext();
export const SetButtonStatesContext = createContext();
export const AnalogStickStatesContext = createContext();
export const SetAnalogStickStatesContext = createContext();

export const useButtonStates = () => useContext(ButtonStatesContext);
export const useSetButtonStates = () => useContext(SetButtonStatesContext);
export const useAnalogStickStates = () => useContext(AnalogStickStatesContext);
export const useSetAnalogStickStates = () => useContext(SetAnalogStickStatesContext);

const GamepadProvider = ({children}) => {
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
/*
            // Pulse Works on Safari
            if (gp.vibrationActuator) {
                if (newButtonStates[0]) { // Example: rumble on button 0 press
                    gp.vibrationActuator.playEffect("dual-rumble", {
                        duration: 50,
                        strongMagnitude: 1.0,
                        weakMagnitude: 0.5
                    });
                }
            }
*/
        }
        setButtonStates(newButtonStates);
        setAnalogStickStates(newanalogStickStates);
    };
    useEffect(() => {
        const interval = setInterval(pollGamepad, 50);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return(<>
        <ButtonStatesContext.Provider value={buttonStates}>
            <SetButtonStatesContext.Provider value={setButtonStates}>
                <AnalogStickStatesContext.Provider value={analogStickStates}>
                    <SetAnalogStickStatesContext.Provider value={setAnalogStickStates}>
                        {children}
                    </SetAnalogStickStatesContext.Provider>
                </AnalogStickStatesContext.Provider>
            </SetButtonStatesContext.Provider>
        </ButtonStatesContext.Provider>

    </>);
};

export default GamepadProvider;

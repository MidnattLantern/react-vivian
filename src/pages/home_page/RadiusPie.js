// functional
import React from "react";

// styles
import Styles from "../../styles/RadiusPie.module.css";
import "../../global.css";

const RadiusPie = () => {

    return (<>
        <div className={Styles.RadiusPieContainer}>
            <div className={Styles.TransformBox1}>
                <p>opt 1</p>
            </div>
            <div className={Styles.TransformBox2}>
                <p>opt 2</p>
            </div>
            <div className={Styles.TransformBox3}>
                <p>opt 3</p>
            </div>
            <div className={Styles.TransformBox4}>
                <p>opt 4</p>
            </div>
            <div className={Styles.TransformBox5}>
                <p>opt 5</p>
            </div>
            <div className={Styles.TransformBox6}>
                <p>opt 6</p>
            </div>

            <svg width="300" height="300" className={Styles.MySVG}>
                <circle cx="150" cy="150" r="150" stroke-width="3px" />
            </svg>
            <svg width="100" height="100" className={Styles.MyInnerSVG}>
                <circle cx="50" cy="50" r="50" stroke-width="3px" />
            </svg>
            <svg width="300" height="300" className={Styles.Stroke1}>
                <line x1="150" y1="0" x2="150" y2="300" stroke-width="3px"/>
            </svg>
            <svg width="300" height="300" className={Styles.Stroke2}>
                <line x1="150" y1="0" x2="150" y2="300" stroke-width="3px"/>
            </svg>
            <svg width="300" height="300" className={Styles.Stroke3}>
                <line x1="150" y1="0" x2="150" y2="300" stroke-width="3px"/>
            </svg>
        </div>
    </>);
};

export default RadiusPie;

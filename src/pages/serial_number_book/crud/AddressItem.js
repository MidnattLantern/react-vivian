import React from "react";

const AddressItem = ({ setSerialNumberData, ...props }) => {
    const {
        id,
        partnering_end,
    } = props

    const handleTest = ( property, value ) => {
        setSerialNumberData(prevState => ({
            ...prevState,
            [property]: value
        }))
    }

    return (<>
    <div onClick={() => {handleTest('link_partnering_end', id)}}>
        <hr/>
        <p>{partnering_end}</p>
    </div>
    </>);
};

export default AddressItem;

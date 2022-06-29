import React, { useState, useContext } from "react";
import { Platform, Switch } from "react-native";
import { ThemeContext } from '../context/themeContext/ThemeContext'

interface Props {
    isOn: boolean;
    onChange: (value: boolean)=> void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

    const [ isEnabled, setIsEnabled ] = useState(isOn)
    const { theme: { colors } } = useContext(ThemeContext)

    const toggleSwitch = () => {
        setIsEnabled( !isEnabled )
        onChange( !isEnabled )
    };

    return(

        <Switch
                trackColor={{ false: "#d9d9db", true: colors.primary }}
                thumbColor={(Platform.OS === 'android') ? '#5856d6' : ''}
                onValueChange={ toggleSwitch }
                value={ isEnabled }
            />
    )
}
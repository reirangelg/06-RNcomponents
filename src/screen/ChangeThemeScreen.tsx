import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { HeaderTitle } from "../componentes/HeaderTitle";
import { ThemeContext } from "../context/themeContext/ThemeContext";
import { styles } from "../theme/appTheme";

export const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme, theme: { colors } } = useContext(ThemeContext)

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Theme' />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity
                    onPress={setLightTheme}
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: colors.primary,
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        justifyContent: 'center',
                    }}>
                    <Text style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontSize: 22
                    }}>
                        Light
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ setDarkTheme }
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: colors.primary,
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        justifyContent: 'center',
                    }}>
                    <Text style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontSize: 22
                    }}>
                        Dark
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
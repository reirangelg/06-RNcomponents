import React, { useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer, useNavigation, useTheme } from "@react-navigation/native";
import { Navigator } from "../navigator/Navigator";
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuiItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();
    const {theme: { colors } } = useContext( ThemeContext )

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component as any)}
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    size={23}
                    color={colors.primary}
                />
                <Text style={{
                    ...styles.itemText,
                    color:colors.text
                    }}>
                    {menuItem.name}
                </Text>
                <View style={{ flex: 1 }} />
                <Icon
                    name='chevron-forward-outline'
                    size={23}
                    color={colors.primary}
                />
            </View>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',


    },
    itemText: {
        marginLeft: 10,
        fontSize: 19
    }
});
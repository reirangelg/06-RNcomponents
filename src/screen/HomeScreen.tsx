import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../theme/appTheme";
import { FlatListMenuiItem } from "../componentes/FlatLIstMenuItem";
import { menuItems } from "../data/menuItems";
import { HeaderTitle } from "../componentes/HeaderTitle";
import { ItemSeparator } from "../componentes/ItemSeparator";

export const HomeScreen = () => {

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuiItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => <HeaderTitle title='opciones de menú' />}
                ItemSeparatorComponent={ () => <ItemSeparator /> }
            />
        </View>
    )
}
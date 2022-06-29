import React, { useContext } from "react";
import { View, SectionList, Text } from "react-native";
import { HeaderTitle } from "../componentes/HeaderTitle";
import { ItemSeparator } from "../componentes/ItemSeparator";
import { styles } from "../theme/appTheme";
import { ThemeContext } from '../context/themeContext/ThemeContext'

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin",]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman",]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama",]
    }
];

export const CustomSectionListScreen = () => {

    const { theme: { colors, dividerColor, dark } } = useContext(ThemeContext)

    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>

            <SectionList
                sections={casas}
                keyExtractor={(item, index) => item + index}
                ListHeaderComponent={() => <HeaderTitle title='SectionList' />}
                ListFooterComponent={() =>
                    <View style={{ marginBottom: 50 }}>
                        <HeaderTitle title={'Total de casas ' + casas.length} />
                    </View>
                }
                renderItem={({ item }) => <Text style= {{ color: colors.text }}>{item}</Text>}
                stickySectionHeadersEnabled
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: colors.background }}>
                        <HeaderTitle title={section.casa} />
                    </View>
                )}
                renderSectionFooter={({ section }) => (
                    <HeaderTitle title={'Total ' + section.data.length} />
                )}
                SectionSeparatorComponent={() => <ItemSeparator />}
                ItemSeparatorComponent={() => <ItemSeparator />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
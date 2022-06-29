import React, { useState, useContext } from "react";
import { TextInput, View, Text, StyleSheet, KeyboardAvoidingView, Platform, Keyboard, ScrollView, TouchableWithoutFeedback } from "react-native";
import { HeaderTitle } from "../componentes/HeaderTitle";
import { styles } from "../theme/appTheme";
import { useForm } from "../hook/useForm";
import { CustomSwitch } from "../componentes/CustomSwitch";
import { ThemeContext } from "../context/themeContext/ThemeContext";

export const TextInputScreen = () => {

    const { form, onChange, isSuscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribed: false
    })

    const { theme: { colors, dividerColor } } = useContext(ThemeContext)

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>

                        <HeaderTitle title='TextInputs' />

                        <TextInput
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            placeholder='Ingrese su nombre'
                            autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={(value) => onChange(value, 'name')}
                            placeholderTextColor= { dividerColor }
                        />

                        <TextInput
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            placeholder='ingrese su email'
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType='email-address'
                            placeholderTextColor= { dividerColor }
                        />

                        <View style={stylesScreen.switchRow}>
                            <Text style={stylesScreen.switchText}>Suscribirse</Text>
                            <CustomSwitch isOn={isSuscribed} onChange={(value) => onChange(value, 'isSuscribed')} />
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <TextInput
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            placeholder='Ingrese su telefono'
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType='phone-pad'
                            placeholderTextColor= { dividerColor }
                        />
                        <View style={{ height: 100 }} />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    switchText: {
        fontSize: 25
    }
});
import React, { useRef } from "react";
import { View, StyleSheet, Animated, PanResponder } from "react-native";

export const Animation102Screen = () => {
    
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
          null,
          {
            dx: pan.x, dy: pan.y, },       // x,y are Animated.Value
        ],{
            useNativeDriver: false

        }),
        onPanResponderRelease: () => {
          Animated.spring(
            pan, // Auto-multiplexed
            { toValue: { x: 0, y: 0 }, useNativeDriver: false }// Back to zero
          ).start();
        },
      });

    return(
        <View style= {styles.container}>
            <Animated.View 
            { ...panResponder.panHandlers }
            style={[pan.getLayout(), styles.purpleBox ]} 
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#756edb',
        width: 150,
        height: 150

    }
});
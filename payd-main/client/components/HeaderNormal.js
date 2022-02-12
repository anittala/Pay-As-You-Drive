import React from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    Image,
    StyleSheet,
    View,
    Text
} from 'react-native';


import { SIZES, COLORS, FONTS,  } from "../constants";

const HeaderNormal = () => {

    return (
        <SafeAreaView
            style={{
                height: 150,
                width: '100%',
                backgroundColor: COLORS.purple,
                flexDirection: 'row',
                paddingTop: 30
            }}
        >
            {/* Greetings */}

            <View
                style={{
                    flex: 1,
                    paddingLeft: SIZES.padding,
                    paddingTop: 5
                }}
            >
                <Text 
                    style={{color: COLORS.white, ...FONTS.h2}} 
                >
                    Welcome to
                </Text>
                <Text 
                    style={{color: COLORS.white, ...FONTS.h2}} 
                >
                    Pay as you Drive!
                </Text>
            </View>

        </SafeAreaView>
    )
}
 
const styles = StyleSheet.create({
    flex: 1
})


export default HeaderNormal;

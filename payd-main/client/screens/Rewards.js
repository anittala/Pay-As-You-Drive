import React from 'react';
import {
    View,
    Text,
    FlatList,
    ImageBackground,
    StyleSheet,
    SafeAreaView
} from 'react-native';

import { HeaderBar, CustomButton, IconButton, HeaderNormal } from "../components";
import { COLORS, FONTS, SIZES, icons, dummyData } from "../constants"

const Rewards = ({ navigation }) => {


    function renderHeaderSection() {
        return (
            <SafeAreaView
                style={{
                    height: 180,
                    backgroundColor: COLORS.primary,
                    alignItems: 'center',
                    paddingTop: 30
                }}
            >
                {/* Nav Bar */}

                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: SIZES.radius,
                        alignItems: "center"
                    }}
                >
                    <IconButton
                        icon={icons.leftArrow}
                        onPress={() => navigation.goBack()}
                    />
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h1, fontSize: 25 }}>Start Ride</Text>

                    </View>

                    <View 
                        style={{
                            width: 25
                        }}
                    />

                </View>


            </SafeAreaView>
        )
    }

    



    return (
        <View style={styles.container}>
            
            {/* Header */}
            {/* <HeaderNormal /> */}
            {renderHeaderSection()}
        <View
            style={{
                flex:1,
                backgroundColor: COLORS.secondary,
                marginTop: -100,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40
            }}
        >
            <Text style={{ padding:30, fontSize: 20, color: COLORS.white }}>Put native maps here</Text>
        </View>

            {/* Details */}
            
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default Rewards;

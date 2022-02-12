import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    ImageBackground,
    Animated,
    Image
} from 'react-native';

import * as firebase from 'firebase';
import {getProfileDetails} from "../API/getProfileDetails"

import {HeaderBar, CustomButton} from "../components"; 
import { COLORS, SIZES, constants, icons, FONTS, dummyData, images } from '../constants';


const Home = ({ navigation }) => {

    
    return (
        <View style={styles.container}>
            <HeaderBar/>

            <View
                style={{
                    flex: 1,
                    marginTop: -45,
                    borderTopLeftRadius: SIZES.radius * 2,
                    borderTopRightRadius: SIZES.radius * 2,
                    backgroundColor: COLORS.secondary
                }}
                contentContainerStyle={{
                    paddingBottom: 150
                }}
            >
                <View style={{ height: "75%",justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            width: 200,
                            height: 200,
                            borderRadius: 125,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: COLORS.white,
                            // borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => navigation.navigate("StartJourney")}
                        >
                            <Image
                                source={require('../assets/anuj.gif')}  
                                // style={{width: 170, height: 170 }}
                                // resizeMode="contain"
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 1000
                                }}
                            />
                            <Text
                            style={{
                                color: COLORS.primary,
                                ...FONTS.h2,
                                paddingTop: 10
                            }}>Start Driving</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,      
    }
})

export default Home;

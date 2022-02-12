// import React, { useEffect } from 'react';
// import {
//     View,
//     Text,
//     StyleSheet
// } from 'react-native';

// import { COLORS, FONTS } from "../constants";



// const Order = ({ navigation, route }) => {
//     const tripData = route.params
//     useEffect(() => console.log('aaaaah', tripData), [])

//     return(        
//                 <View>      
//                     <Text>uuuh</Text>
//                             <Text
//                                 style={styles.texts}
//                             >Aggresive % : {tripData.aggresive_percentage}
//                             </Text>
//                             <Text
//                                 style={styles.texts}
//                             >Speed Exceeds : {tripData.speed_exceeds}
//                             </Text>
//                             <Text
//                                 style={styles.texts}
//                             >Left Turns : {tripData.left_turns}
//                             </Text>
//                             <Text
//                                 style={styles.texts}
//                             >Right Turns : {tripData.right_turns}
//                             </Text>
//                             <Text
//                                 style={styles.texts}
//                             >Sudden Accerelations : {tripData.sudden_accelerations}
//                             </Text>
//                             <Text
//                                 style={styles.texts}
//                             >Sudden Braking : {tripData.sudden_braking}
//                             </Text>
//                             <Text
//                                 style={styles.texts}
//                             >Sudden Left Turns : {tripData.sudden_left_turns}
//                             </Text>
//                             <Text
//                                 style={styles.texts}
//                             >Sudden Right Turns : {tripData.sudden_right_turns}
//                             </Text>
//                             <Text
//                                 style={styles.texts}
//                             >Normal driving : {tripData.normal_driving}
//                             </Text>
//                             <Text
//                                 style={styles.texts}
//                             >Accelelations : {tripData.accelerations}
//                             </Text>
//                             <Text
//                                 style={styles.texts}
//                             >Timestamp : {tripData.time_stamp}
//                             </Text>
//                 </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
        
//     },
//     texts: {
//         color: COLORS.lightYellow,
//         ...FONTS.h2,
//         fontSize: 20

//     }
// })


// export default Order;












import React, { useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    ImageBackground,
    StyleSheet,
    SafeAreaView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ScrollView
} from 'react-native';

// import { HeaderBar } from "../components";
import { COLORS, FONTS, SIZES, icons, dummyData } from "../constants"
import { HeaderBar, CustomButton, IconButton, HeaderNormal } from "../components";

const Order = ({ route, navigation }) => {
    const tripData = route.params
    useEffect(() => console.log('aaaaah', tripData), [])

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
                        <Text style={{ color: COLORS.white, ...FONTS.h1, fontSize: 25 }}>Ride No.: </Text>

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

    console.log(route.params)

    return (

<View style={styles.container}>
            {/* Header */}
            {renderHeaderSection()}
            {/* <ScrollView>
                
            </ScrollView> */}
            {/* Details */}
            <View style={{
                flex:1,
                backgroundColor: COLORS.secondary,
                marginTop: -100,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40
            }}>

                <View
                    style={{
                        paddingBottom: 5
                    }}
                />

                {/*  listing */}

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}
                >

                    {/* Listing */}

                    <View 
                        style= {{
                            marginTop: SIZES.padding,
                            paddingBottom: 40
                        }}>
                        
                        <TouchableWithoutFeedback >
                            <View
                                style={{
                                    height: 400,
                                    width: 365,
                                    paddingHorizontal: SIZES.padding,
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-end' 
                                }}
                            >


                                {/* Details */}

                                <View
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        paddingLeft: "10%",
                                        paddingVertical: SIZES.base,
                                        paddingRight: SIZES.base,
                                        borderRadius: SIZES.radius,
                                        justifyContent: 'center',
                                        backgroundColor: COLORS.primary
                                    }}
                                >
  
                                    <Text
                                        style={{
                                            color: COLORS.white,
                                            ...FONTS.h2,
                                            fontSize: 16,
                                        }}
                                    >
                                        {/* space */}
                                    </Text>

                                    {/* if possible enter dest location */}
                                    <Text style={styles.texts}>Acceleration: {tripData.accelerations}</Text> 
                                    <Text style={styles.texts}>Left turns: {tripData.left_turns}</Text> 
                                    <Text style={styles.texts}>Right turns: {tripData.right_turns}</Text> 
                                    <Text style={styles.texts}>Speed exceeds: {tripData.speed_exceeds}</Text> 
                                    <Text style={styles.texts}>Sudden accelerations: {tripData.sudden_accelerations}</Text> 
                                    <Text style={styles.texts}>Sudden braking: {tripData.sudden_braking}</Text> 
                                    <Text style={styles.texts}>Sudden left turns: {tripData.sudden_left_turns}</Text> 
                                    <Text style={styles.texts}>Sudden right turns: {tripData.sudden_right_turns}</Text> 
                                    <Text style={styles.texts}>Normal driving: {tripData.normal_driving}</Text> 
                                    <Text style={styles.texts}>Aggresive percentage: {tripData.aggresive_percentage}</Text> 
                                    <Text style={styles.texts}>Timestamp : {tripData.time_stamp}</Text> 
                                        
                                    <Text
                                        style={{
                                            color: COLORS.white,
                                            ...FONTS.h2,
                                            fontSize: 16, 
                                        }}
                                    >
                                        {/* space */}
                                    </Text>


                                    
                                </View>

                            </View>
                        </TouchableWithoutFeedback>

                    </View>
                                           
                </View>
            </View>
        </View>



    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,      
    },
    texts: {
        color: COLORS.white,
        ...FONTS.h2,
        fontSize: 21
    },
})


export default Order;
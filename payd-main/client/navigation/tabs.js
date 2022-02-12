import React from "react";
import {
    Image,
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { Home, Rewards, Location, ProfileDisplay } from "../screens"
import { COLORS, SIZES, icons } from "../constants"

const Tab = createBottomTabNavigator()

const CustomTabBar = (props) => {
    return (
        <View>
            <View
                style={{
                    position:'absolute',
                    bottom: 0,
                    height: 30,
                    left: 0,
                    right: 0,
                    backgroundColor: COLORS.gray3
                }}
            />
            <BottomTabBar
                {...props.props}
            />

        </View>
    )
}

const CustomTabBarButton = ({containerStyle, isFloat, children, onPress}) => {
    if (isFloat) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: -30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                        backgroundColor: COLORS.primary
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableNativeFeedback
                onPress={onPress}
            >
                <View
                    style={{
                        flex: 1,
                        height: 60,
                        backgroundColor: COLORS.gray3,
                        ...containerStyle
                    }}
                >
                    {children}
                </View>

            </TouchableNativeFeedback>

        )
    }
}

const Tabs = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: 'transparent',
                    borderTopColor: "transparent",
                    height: (Platform.OS == 'android') ? 60 : 80
                }
            }}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.home}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? COLORS.primary : COLORS.black
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton
                            {...props}
                            containerStyle={{
                                borderTopLeftRadius: SIZES.radius * 2.5,
                            }}
                        />

                    )
                }}
            />
            {/* <Tab.Screen
                name="Rewards"
                component={Rewards}
                // Previous ride Satts
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.add}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? COLORS.primary : COLORS.black
                            }}
                        />
                    ),

                    tabBarButton: (props) => (
                        <CustomTabBarButton
                            {...props}
                           
                        />

                    )
                }}
            /> */}

           
            <Tab.Screen
                name="Favourite"
                component={Location}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.pie_chart}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? COLORS.primary : COLORS.black
                            }}
                        />
                    ),

                    tabBarButton: (props) => (
                        <CustomTabBarButton
                            {...props}
                            
                        />

                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileDisplay}
                //  After filling profile, there should be profile page here
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.profile}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? COLORS.primary : COLORS.black
                            }}
                        />
                    ),

                    tabBarButton: (props) => (
                        <CustomTabBarButton
                            {...props}
                            containerStyle={{
                                borderTopRightRadius: SIZES.radius * 2.5
                            }}
                            
                        />

                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;
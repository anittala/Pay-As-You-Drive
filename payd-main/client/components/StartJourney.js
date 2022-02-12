import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Button, TouchableOpacity,Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { COLORS, FONTS } from '../constants'


const StartJourney = ({ route, navigation }) => {
  
  const GOOGLE_MAPS_API_KEY = 'AIzaSyBJkM5hjGBEOebKjHflIXWh1Y2p6r1QEPw'
  const [coords, setCoords] = useState(route?.params? {latitude: route.params.latitude, longitude: route.params.longitude} : null)
  
  return (
        <View style={styles.container}>
          <View style={{ padding:10 }}></View>
            <GooglePlacesAutocomplete
                placeholder='Search Destination'
                onPress={(data, details = null) => {
                  setCoords({latitude: details?.geometry?.location?.lat, longitude: details?.geometry?.location?.lng})
                }}
                
                query={{  
                  key: GOOGLE_MAPS_API_KEY,
                  language: 'en',
                  components: 'country:in',
                }}
                enablePoweredByContainer={false}
                fetchDetails={true}
              />
          {/* </View> */}
            


           <TouchableOpacity
              style={{
                  width: "100%",
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.secondary,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: COLORS.white
              }}
              onPress={() =>{navigation.navigate('NativeMap', coords)}}  >
                  <Text
                  style={{
                      color: COLORS.white,
                      ...FONTS.h2,
                      fontSize: 16
                  }}>{!route?.params? "Start" : "Change"}</Text>
          </TouchableOpacity> 

                              
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#ecf0f1',
    },
  });
  
export default StartJourney
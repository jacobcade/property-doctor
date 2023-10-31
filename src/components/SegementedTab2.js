import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
    Dimensions
} from "react-native";



export default function SegTab2(params) {

    const [focused, setFocused] = useState(true);

   
    return(
        <View style={{flex: 1}}>
            <View style={{marginVertical: 10}}>
                <View style={{flexDirection:'row', borderWidth: 2.5, borderColor: '#025E85', borderRadius: 5}}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: focused ? '#025E85' : '#FFFFFF',
                            height: 50}}
                        onPress={() => setFocused(!focused)}>
                        <Text style={{fontWeight: '600', fontSize: 17, color: focused ? '#FFFFFF' : '#025E85',}}>Description</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 50,
                            backgroundColor: focused ? '#FFFFFF' : '#025E85',}}
                        onPress={() => setFocused(!focused)}>
                        <Text style={{fontWeight: '600', fontSize: 17, color: focused ? '#025E85' : '#FFFFFF',}}>How to use</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )


    // return (
    //     <View style={{ flex: 1 }}>
    //         <View
    //             style={{
    //                 width: "100%",
    //                 marginLeft: "auto",
    //                 marginRight: "auto"
    //             }}
    //         >
    //             <View
    //                 style={{
    //                     flexDirection: "row",
    //                     marginTop: 40,
    //                     marginBottom: 20,
    //                     height: 36,
    //                     position: "relative"
    //                 }}
    //             >
    //                 <TouchableOpacity
    //                     style={{
    //                         flex: 1,
    //                         justifyContent: "center",
    //                         alignItems: "center",
    //                         borderWidth: 1,
    //                         borderColor: "#007aff",
    //                         borderRadius: 4,
    //                         borderRightWidth: 0,
    //                         borderTopRightRadius: 0,
    //                         borderBottomRightRadius: 0
    //                     }}

    //                 >
    //                     <Text>
    //                         Tab One
    //                     </Text>
    //                 </TouchableOpacity>
    //                 <TouchableOpacity
    //                     style={{
    //                         flex: 1,
    //                         justifyContent: "center",
    //                         alignItems: "center",
    //                         borderWidth: 1,
    //                         borderColor: "#007aff",
    //                         borderRadius: 4,
    //                         borderLeftWidth: 0,
    //                         borderTopLeftRadius: 0,
    //                         borderBottomLeftRadius: 0
    //                     }}


    //                 >
    //                     <Text

    //                     >
    //                         Tab Two
    //                     </Text>
    //                 </TouchableOpacity>
    //             </View>

    //             <ScrollView>
    //                 <Text>Hi, I am a cute cat</Text>
    //                 <View style={{ marginTop: 20 }}>
    //                     <Image

    //                         style={{
    //                             width: 30,
    //                             height: 30,
    //                             borderRadius: 15
    //                         }}
    //                     />
    //                 </View>
    //                 <Text>Hi, I am a cute dog</Text>
    //                 <View style={{ marginTop: 20 }}>
    //                     <Image

    //                         style={{
    //                             width: 30,
    //                             height: 30,
    //                             borderRadius: 15
    //                         }}
    //                     />
    //                 </View>
    //             </ScrollView>
    //         </View>
    //     </View>
    // )
};

// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { Ionicons } from '@expo/vector-icons';

// const Headerbar = () => {
//     return (
//         <View style={styles.container}>
//             <TouchableOpacity style={{ flexDirection: 'row' }}>
//                 <View style={{ paddingHorizontal: 5 }}>

//                     <View>
//                     <Text style={{paddingRight: 3, fontSize: 16, fontWeight: '700'}}>GrillAndThrill</Text>
//                     </View>
                    
//                 </View>
//             </TouchableOpacity>


//         </View >
//     )
// }

// export default Headerbar

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginTop: 35,
//         borderBottomWidth: 1,
//         borderColor: 'grey',
//         justifyContent: "space-between",
//         height: 60,
//         backgroundColor: 'white',
//         paddingHorizontal: 20,
//         paddingVertical: 10
//     }
// })

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Headerbar = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Ionicons name="flame" size={24} color="white" style={{ marginRight: 5 }} />
                    <Text style={styles.title}>GrillAndThrill</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name="bag" size={28} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Headerbar;

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#9d0000' // Match background color
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#9d0000', // Vibrant orange background
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 1,
    },
});

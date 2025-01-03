import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Categories = () => {
    return (
        <View style={styles.container}>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={[styles.box, { backgroundColor: '#ddfbf3' }]}>
                    <Image source={require('../Images/icon1.png')} style={styles.image} />

                    <Text style={styles.text}>Chicken</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.box, { backgroundColor: '#f5e5ff' }]}>
                    <Image source={require('../Images/icon2.png')} style={styles.image} />

                    <Text style={styles.text}>Beef</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.box, { backgroundColor: '#e5f1ff' }]}>
                    <Image source={require('../Images/icon3.png')} style={styles.image} />

                    <Text style={styles.text}>Fries</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.box, { backgroundColor: '#ebfde5' }]}>
                    <Image source={require('../Images/icon4.png')} style={styles.image} />

                    <Text style={styles.text}>Deals</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.box, { backgroundColor: '#ebfde5' }]}>
                    <Image source={require('../Images/icon5.png')} style={styles.image} />

                    <Text style={styles.text}>Beverges</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.box, { backgroundColor: '#ebfde5' }]}>
                    <Image source={require('../Images/icon6.png')} style={styles.image} />

                    <Text style={styles.text}>Nuggest</Text>
                </TouchableOpacity>


            </ScrollView>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // backgroundColor: 'green',
        borderRadius: '10'
    },
    head: {
        fontSize: 20,
        fontWeight: '600',
        margin: 10,
        paddingBottom: 5,
        paddingLeft: 5
    },
    image: {
        width: 20,
        height: 20
    },
    box: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        marginLeft: 10, //horizontal
        marginBottom: 15, //10
        padding: 10,
        borderRadius: 18, //20
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },
    text: {
        marginLeft: 5,

    }
})
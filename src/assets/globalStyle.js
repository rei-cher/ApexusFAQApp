import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    //Headings
    heading: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontFamily: 'NunitoSans',
        fontWeight: '800',
        color: '#000000',
        textAlign: 'center',
        paddingBottom: 10
    },

    //Subheading
    subheading: {
        fontSize: 18,
        fontFamily: 'NunitoSans',
        fontWeight: '800',
        textTransform: 'uppercase',
        color: '#000000',
        textAlign: 'center',
        paddingBottom: 5
    },

    //Regular text
    text: {
        fontSize: 15,
        fontFamily: 'NunitoSans',
        fontWeight: '500',
        color: '#000000',
        marginBottom: 10,
        lineHeight: 20
    }
})
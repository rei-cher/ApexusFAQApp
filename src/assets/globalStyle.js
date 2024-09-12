import { StyleSheet } from "react-native";

// Colors for light mode
const lightModeColors = {
    backgroundColor: '#ffffff',
    headingColor: '#000000',
    subheadingColor: '#333333',
    textColor: '#666666'
}

// Colors for dark mode
const darkModeColors = {
    backgroundColor: '#181C14',
    headingColor: '#ECDFCC',
    subheadingColor: '#697565',
    textColor: '#3C3D37'
}

export const globalStyle = (isDarkMode) => {
    const colors = isDarkMode ? darkModeColors : lightModeColors; 

    return StyleSheet.create({
        //Headings
        heading: {
            fontSize: 30,
            textTransform: 'uppercase',
            fontFamily: 'NunitoSans',
            fontWeight: '800',
            color: colors.headingColor,
            textAlign: 'center',
            paddingBottom: 10
        },

        //Subheading
        subheading: {
            fontSize: 18,
            fontFamily: 'NunitoSans',
            fontWeight: '800',
            textTransform: 'uppercase',
            color: colors.subheadingColor,
            textAlign: 'center',
            paddingBottom: 5
        },

        //Regular text
        text: {
            fontSize: 16,
            fontFamily: 'NunitoSans',
            fontWeight: '500',
            color: colors.textColor,
            marginBottom: 10,
            lineHeight: 20,
            paddingBottom: 10
        },

        //Main screen
        container: {
            flex:1,
            backgroundColor: colors.backgroundColor,
            paddingHorizontal: 8,
            paddingTop: 20,
        }
    });
};
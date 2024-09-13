import { StyleSheet } from "react-native";

// Colors for light mode
const lightModeColors = {
    backgroundColor: '#F5F5F5',
    containerColor: '#FFFFFF',
    h1Color: '#2C3E50',
    h2Color: '#34495E',
    textColor: '#7F8C8D',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    errorColor: '#000'
};

// Color for dark mode
const darkModeColors = {
    backgroundColor: '#121212',
    containerColor: '#1E1E1E',
    h1Color: '#ECF0F1',
    h2Color: '#BDC3C7',
    textColor: '#95A5A6',
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    errorColor: '#fff'
};

export const getColors = (isDarkMode) => isDarkMode ? darkModeColors : lightModeColors;

export const globalStyle = (isDarkMode) => {
    const colors = isDarkMode ? darkModeColors : lightModeColors; 

    return StyleSheet.create({
        //Headings
        heading: {
            fontSize: 30,
            textTransform: 'uppercase',
            fontFamily: 'NunitoSans',
            fontWeight: '800',
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
    });
};
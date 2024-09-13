import { StyleSheet } from "react-native";

// Colors for light mode
const lightModeColors = {
    mainBackground: '#FFFFFF',
    categoryBackground: '#F5F5F5',
    questionBackground: '#FAFAFA',
    answerBackground: '#E3F2FD',
    heading1: 'rgba(0, 0, 0, 0.87)',
    heading2: 'rgba(0, 0, 0, 0.87)',
    question: 'rgba(0, 0, 0, 0.60)',
    answer: 'rgba(0, 0, 0, 0.60)',
    text: 'rgba(0, 0, 0, 0.38)',
    shadow: 'rgba(0, 0, 0, 0.2)',
    backError: '#B00020',   
    tintColorActive: 'black'
};

// Colors for dark mode
const darkModeColors = {
    mainBackground: '#121212',
    categoryBackground: '#1D1D1D',
    questionBackground: '#1D1D1D',
    answerBackground: '#212121',
    heading1: '#FFFFFF',
    heading2: '#FFFFFF',
    question: 'rgba(255, 255, 255, 0.87)',
    answer: 'rgba(255, 255, 255, 0.87)',
    text: 'rgba(255, 255, 255, 0.60)',
    shadow: 'rgba(0, 0, 0, 1.0)',
    backError: '#CF6679',   
    tintColorActive: 'white'
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
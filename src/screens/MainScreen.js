import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyle, getColors } from '../assets/globalStyle';
import { ThemeContext } from '../helpers/ThemeContext';

const categories = [
  { id: '1', title: '340B Eligibility/Registration', filename: '340B_Eligibility_Requirements_Registration.json' },
  { id: '2', title: '340B Recertification', filename: '340B_Recertification.json' },
  { id: '3', title: '340B OPAIS Technical Assistance', filename: '340B_OPAIS_Technical_Assistance.json' },
  { id: '4', title: '340B Pricing/Covered Outpatient Drugs', filename: '340B_Pricing_Covered_Outpatient_Drugs.json' },
  { id: '5', title: '340B Patient Definition', filename: '340B_Patient_Definition.json' },
  { id: '6', title: '340B Purchasing/Inventory/Reimbursement', filename: '340B_Purchasing_Inventory_Reimbursement.json' },
  { id: '7', title: 'Contract Pharmacy', filename: '340B_Contract_Pharmacy.json' },
  { id: '8', title: 'Medicaid/Duplicate Discounts', filename: 'Medicaid_Duplicate_Discounts.json' },
  { id: '9', title: '340B GPO Prohibition', filename: '340B_GPO_Prohibition.json' },
  { id: '10', title: '340B Compliance/Audits', filename: '340B_Compliance_Audits.json' },
  { id: '11', title: '340B Prime Vendor Program', filename: '340B_Prime_Vendor_Program.json' },
  { id: '12', title: 'Orphan Drugs', filename: '340B_Orphan_Drugs.json' },
];

const screenWidth = Dimensions.get('window').width;


export default function MainScreen() {
  const navigation = useNavigation();
  
  const { isDarkMode } = useContext(ThemeContext);
  
  const colors = getColors(isDarkMode);

  console.log('Dark Mode:', isDarkMode);

  const setGlobalStyle = globalStyle(isDarkMode);

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[styles.category, {backgroundColor: colors.categoryBackground, shadowColor: colors.shadow}]}
      onPress={() => navigation.navigate('List', { categoryId: item.id, filename: item.filename, title: item.title })} // Pass filename along with categoryId
    >
      <Text style={[setGlobalStyle.subheading, {color: colors.heading2}]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, {backgroundColor: colors.mainBackground}]}>
      <Text style={[setGlobalStyle.heading, {color: colors.heading1}]}>FAQ Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderCategory}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 20,
  },
  category: {
    padding: 20,
    borderRadius: 12,
    margin: 8,
    width: (screenWidth / 2) - 24,
    height: (screenWidth / 2) - 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  }
});

import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { SearchScreenStyles as styles } from "../styles/SearchScreenStyles";
import Header from "../components/Header";
import { moderateScale, scale, verticalScale } from '../utils/ScalingUtils';
import { IconAddress, IconBaby, IconFamily, IconBag, IconAbc } from "../assets/ic_svg";

const { width } = Dimensions.get('screen')
const SERVICE_TYPE = [
    { id: 1, name: 'Child Care Centre', icon: IconBaby },
    { id: 2, name: 'Pre-school & Kindergarten', icon: IconBaby },
    { id: 3, name: 'Family Day Care', icon: IconFamily },
    { id: 4, name: 'Before & After School Care', icon: IconBag },
]

const SearchScreen = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <Header title='Search Filters' />
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <View style={styles.viewAddress}>
                    <View style={styles.row}>
                        <IconAddress />
                        <Text style={styles.txtAddress}>6 Leigh Place, West Pennant Hills ...</Text>
                    </View>
                    <Text style={styles.txtChange}>Change</Text>
                </View>

                <Text style={styles.titlePink}>Choose Service Type</Text>

            </ScrollView>
        </View>
    )
}

export default SearchScreen;

import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Dimensions, LayoutAnimation, UIManager, Platform } from 'react-native';
import { SearchScreenStyles as styles } from "../styles/SearchScreenStyles";
import Header from "../components/Header";
import { IconAddress, IconKindi, Icon2Map, IconFloweMoney, IconCost, IconNQ, IconSort, IconDown } from "../assets/ic_svg";
import { color } from '../utils/color';
import ButtonBottom from "../components/ButtonBottom";
import { VOTE, SERVICE_TYPE, NATIONAL_RATING, SORT_RESULT } from "../data/data";
import DropdownList from "../components/DropdownList";
import CustomSlider from '../components/CustomSlider';

const { width } = Dimensions.get('screen')

const SearchScreen = ({ navigation }) => {
    const [service, setService] = useState(0)
    const [vote, setVote] = useState('')

    const refList = useRef(null)

    const onFind = () => navigation.navigate('APPLICATION_SCREEN')

    const onChooseService = id => () => setService(id)

    const renderServiceItem = (e) => {
        const { id, name, Icon } = e
        return (
            <TouchableOpacity key={name} style={styles.serviceItem} onPress={onChooseService(id)}>
                <View style={styles.iconService(service === id)}>
                    <Icon color={service === id ? color.pink : color.silver} />
                </View>
                <Text style={styles.txtServiceItem(service === id)}>{name}</Text>
            </TouchableOpacity>
        )
    }

    const renderSection = (Icon, title) => {
        return (
            <View style={styles.titleSection}>
                <Icon />
                <Text style={styles.txtSection}>{title}</Text>
            </View>
        )
    }

    const renderAddress = () => {
        return (
            <View style={styles.viewAddress}>
                <View style={styles.row}>
                    <IconAddress />
                    <Text style={styles.txtAddress}>6 Leigh Place, West Pennant Hills ...</Text>
                </View>
                <Text style={styles.txtChange}>Change</Text>
            </View>
        )
    }

    const renderVote = (e) => {
        return (
            <View>
                {renderSection(IconFloweMoney, 'Value For Money For The Area')}
                <View style={styles.voteView}>
                    {VOTE.map(e => renderVoteItem(e))}
                </View>
            </View>
        )
    }

    const renderVoteItem = (e) => {
        return (
            <TouchableOpacity key={e} style={styles.voteItem(e === vote)} onPress={onPressVote(e)}>
                <Text style={{ color: e === vote ? color.white : color.black }}>{e}</Text>
            </TouchableOpacity>
        )
    }

    const onPressVote = (e) => () => setVote(e === vote ? '' : e)

    return (
        <View style={styles.container} >
            <Header title='Search Filters' />
            <ScrollView
                ref={refList}
                style={styles.container}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >

                {renderAddress()}

                <Text style={styles.titlePink}>Choose Service Type</Text>
                <View style={styles.serviceView}>{SERVICE_TYPE.map(e => renderServiceItem(e))}</View>

                {renderSection(IconKindi, 'KindiCare Rating')}
                <CustomSlider minValue={0} maxValue={10} />

                {renderSection(Icon2Map, 'The shorted distance from home')}
                <CustomSlider minValue={0} maxValue={50} unit='km'/>

                {renderVote()}

                {renderSection(IconCost, 'Cost Per Day')}
                <CustomSlider minValue={0} maxValue={130} unit='$'/>

                {renderSection(IconNQ, 'National Quality Standard Rating')}
                <DropdownList data={NATIONAL_RATING} refList={refList} />

                {renderSection(IconSort, 'Sort Results By')}
                <DropdownList data={SORT_RESULT} refList={refList} />

                <ButtonBottom onPress={onFind} title='Find Childcare' />
            </ScrollView>
        </View>
    )
}

export default SearchScreen;

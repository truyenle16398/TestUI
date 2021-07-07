import React, { useCallback, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from "../components/Header";
import { ApplicationScreenStyles as styles } from "../styles/ApplicationScreenStyles";
import { IconGender, IconEdit, IconGirl } from "../assets/ic_svg";
import { SERVICE_TYPE } from "../data/data";
import { color } from '../utils/color';
import ButtonBottom from "../components/ButtonBottom";

const ApplicationScreen = ({ navigation }) => {

    const goBack = () => navigation.goBack()

    const [week, setWeek] = useState([
        { name: 'Mon', select: false },
        { name: 'Tue', select: false },
        { name: 'Wed', select: false },
        { name: 'Thu', select: false },
        { name: 'Fri', select: false },
        { name: 'Sat', select: false },
        { name: 'Sun', select: false }
    ])
    const [service, setService] = useState('')

    const onSelectWeek = useCallback((e) => {
        let temp = [...week]
        temp.find(item => item.name === e.name).select = !e.select
        setWeek(temp)
    }, [week])

    const onSelectService = useCallback((e) => { setService(e.name) }, [service])

    const renderData = () => {
        return (
            <View style={[styles.row, { marginVertical: 7 }]}>
                {week.map(e => {
                    return <TouchableOpacity key={e.name} style={styles.btnWeek(e.select)} onPress={() => onSelectWeek(e)}>
                        <Text style={styles.txtWeek(e.select)}>{e.name}</Text>
                    </TouchableOpacity>
                })}
            </View>
        )
    }

    const renderService = () => {
        return (
            <View>
                {SERVICE_TYPE.map(e => {
                    return (
                        <TouchableOpacity key={e.name} style={styles.itemService(e.name === service)} onPress={() => onSelectService(e)}>
                            <Text style={styles.txtService(e.name === service)}>{e.name}</Text>
                            <Text style={styles.txtService(e.name === service)}>{`${e.price}$`}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header title='Application' onPress={goBack} />
            <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={styles.titlePink}>Children Information</Text>
                <Text style={styles.txtDes}>You can choose which children want to apply by clicking on their name and editing the information by clicking on the pen icon</Text>

                <View style={[styles.box, { borderColor: color.pink }]}>
                    <View style={styles.row}>
                        <View style={styles.row}>
                            <Text style={styles.titleBox}>Wesley Perry</Text>
                            <IconGender />
                        </View>
                        <TouchableOpacity style={styles.btnEdit}>
                            <IconEdit />
                        </TouchableOpacity>
                    </View>


                    <Text style={styles.txtInBox} >04-04-2018</Text>
                    <View style={styles.row}>
                        <Text style={styles.txtInBox}>Allergies: No</Text>
                        <Text style={styles.txtInBox}>Special need: No</Text>
                    </View>

                    <Text style={styles.txtInBox}>Day care require:</Text>
                    {renderData()}

                    <Text style={styles.txtInBox}>Service:</Text>
                    {renderService()}
                </View>

                <View style={[styles.box, { borderColor: color.silver }]}>
                    <View style={styles.row}>
                        <View style={styles.row}>
                            <Text style={styles.titleBox}>Kathryn Murphy</Text>
                            <IconGirl />
                        </View>
                        <TouchableOpacity style={styles.btnEdit}>
                            <IconEdit />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.txtInBox} >04-04-2018</Text>
                    <View style={styles.row}>
                        <Text style={styles.txtInBox}>Allergies: No</Text>
                        <Text style={styles.txtInBox}>Special need: No</Text>
                    </View>
                </View>

                <TouchableOpacity style={{ marginVertical: 8 }}>
                    <Text style={styles.txtAdd}>+ Add New Child</Text>
                </TouchableOpacity>
                <ButtonBottom title='Done' />
            </ScrollView>
        </View>
    )
};

export default ApplicationScreen;
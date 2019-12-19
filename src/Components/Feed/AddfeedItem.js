import React, {useState, useEffect} from "react"
import {View, TouchableOpacity, Switch} from "react-native"
import {Text, Button, Input, CheckBox} from "react-native-elements"
import database from '@react-native-firebase/database';

import {Icon} from "native-base";
function Addfeeditem(props) {

    const [selectedEmotions, setSelectedEmotions] = useState({
        happy: false,
        sad: false,
        angry: false,
        excited: false,
        fear: false,
        bored: false
    })

    const [text, setText] = useState("")
    const postToFeed = () => {
        const key = database()
            .ref('feed')
            .push()
            .key
        const data = {
            "id": key,
            "smilies": 0,
            "text": text
        }
        const dat = {}
        dat[key] = data

        database()
            .ref('feed')
            .update(dat)
        alert('posted')
        props
            .navigation
            .navigate('HomeS')

    }
    return (
        <View>

            <Input
                multiline={true}
                placeholder="Write something good about yourself"
                onChangeText={(text) => setText(text.toString())}
                containerStyle={{
                    minHeight: "65%",
                    maxHeight: "80%"
                }}/>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginBottom: 20
                }}>
                <View
                    style={{
                        width: '16.66%',
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity
                        onPress={() => setSelectedEmotions({
                            ...selectedEmotions,
                            happy: selectedEmotions.happy
                                ? false
                                : true
                        })}>
                        <Text
                            style={{
                                fontSize: selectedEmotions.happy
                                    ? 40
                                    : 30
                            }}>🙂</Text>
                    </TouchableOpacity>

                </View>

                
                <View
                    style={{
                        width: '16.66%',
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity
                        onPress={() => setSelectedEmotions({
                            ...selectedEmotions,
                            sad: selectedEmotions.sad
                                ? false
                                : true
                        })}>
                        <Text
                            style={{
                                fontSize: selectedEmotions.sad
                                    ? 40
                                    : 30
                            }}>😔</Text>
                    </TouchableOpacity>

                </View>
                <View
                    style={{
                        width: '16.66%',
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity
                        onPress={() => setSelectedEmotions({
                            ...selectedEmotions,
                            angry: selectedEmotions.angry
                                ? false
                                : true
                        })}>
                        <Text
                            style={{
                                fontSize: selectedEmotions.angry
                                    ? 40
                                    : 30
                            }}>😠</Text>
                    </TouchableOpacity>

                </View>
                <View
                    style={{
                        width: '16.66%',
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity
                        onPress={() => setSelectedEmotions({
                            ...selectedEmotions,
                            fear: selectedEmotions.fear
                                ? false
                                : true
                        })}>
                        <Text
                            style={{
                                fontSize: selectedEmotions.fear
                                    ? 40    
                                    : 30
                            }}>😨</Text>
                    </TouchableOpacity>

                </View>
                <View
                    style={{
                        width: '16.66%',
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity
                        onPress={() => setSelectedEmotions({
                            ...selectedEmotions,
                            excited: selectedEmotions.excited
                                ? false
                                : true
                        })}>
                        <Text
                            style={{
                                fontSize: selectedEmotions.excited
                                    ? 40
                                    : 30
                            }}>🤩</Text>
                    </TouchableOpacity>

                </View>
                <View
                    style={{
                        width: '16.66%',
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity
                        onPress={() => setSelectedEmotions({
                            ...selectedEmotions,
                            bored: selectedEmotions.bored
                                ? false
                                : true
                        })}>
                        <Text
                            style={{
                                fontSize: selectedEmotions.bored
                                    ? 40
                                    : 30
                            }}>😴</Text>
                    </TouchableOpacity>

                </View>
                

            </View>

            <Button title="Post" onPress={postToFeed}/>

        </View>
    )
}

export default Addfeeditem
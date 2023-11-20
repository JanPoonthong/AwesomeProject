import React from "react";
import { View, Text, Image, ScrollView, TextInput, Button } from "react-native";
import { useState } from "react";

const App = () => {
    return (
        <>
            <Cat name="Munkustrap" first={true} />
            <Cat name="Spot" />
        </>
    );
};

const Cat = (props) => {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View
            style={{
                marginHorizontal: 15,
                marginVertical: props.first ? 40 : 0,
            }}
        >
            <Text>
                I am {props.name}, and I am {isHungry ? "hungry!" : "full"}
            </Text>
            <Button
                onPress={() => {
                    setIsHungry(false);
                }}
                disabled={!isHungry}
                title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
            />
        </View>
    );
};

export default App;

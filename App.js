import React from "react";
import { View, Text, TextInput } from "react-native";
import { useState } from "react";

const App = () => {
    const [text, setText] = useState("");

    return (
        <View
            style={{
                marginHorizontal: 15,
                marginVertical: 40,
            }}
        >
            <TextInput
                style={{ height: 40, borderWidth: 1, borderColor: "black" }}
                onChangeText={newText => setText(newText)}
                placeholder="Type here to translate!"
                defaultValue={text}
            />
            <Text style={{padding: 10, fontSize: 42}}>
                    {text.split(" ").map((word) => word && "🏝️").join(" ")}
            </Text>
        </View>
    );
};

export default App;

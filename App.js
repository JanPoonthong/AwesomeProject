import React from "react";
import { Text, FlatList, View, StyleSheet, SectionList } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
    },
    item: {
        padding: 10,
        fontSize: 14,
        height: 44,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: "bold",
        backgroundColor: "rgba(247, 247, 247, 1.0)",
    },
});

const App = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={[
                    { title: "D", data: ["Devin", "Dan"] },
                    { title: "J", data: ["Jackson", "James"] },
                ]}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item}</Text>
                )}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={(item) => `basicListEntry-${item}`}
            />
        </View>
    );
};

export default App;

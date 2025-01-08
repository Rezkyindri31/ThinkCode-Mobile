import React from 'react';
import { Text, View, ImageBackground, ActivityIndicator, ScrollView, Image, StyleSheet } from 'react-native';
import { useLoadFont } from "@/hooks/frontend/useLoadFont";
import Ionicons from "@expo/vector-icons/Ionicons";

function Task1() {
    const fontsLoaded = useLoadFont();
    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#00238e" />
                <Text style={{ marginTop: 10, fontSize: 18, color: "#00238e" }}>Memuat Font...</Text>
            </View>
        );
    }
    const tableTipePerulangan = [
        ["Jenis", "Penjelasan"],
        ["For Loop", "Mengulang kode dengan jumlah iterasi yang jelas."],
        ["While Loop", "Mengulang kode sampai kondisi tertentu terpenuhi dan bernilai true."],
        ["Nested Loop", "Perulangan di dalam perulangan lain."],
        ["Do-While Loop", "Mengulang kode sampai kondisi tertentu terpenuhi dan bernilai true."],
    ];

    return (
        <ImageBackground
            source={require("@/assets/images/BackgroundMateri.png")}
            style={{ flex: 1, paddingTop: 40, paddingHorizontal: 20 }}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={{ flexWrap: 1, paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 30, fontFamily: "Jersey-Regular", marginBottom: 20, textAlign: 'center', alignSelf: 'center', marginTop: 20 }}>
                    Perulangan
                </Text>
                <View style={{ backgroundColor: '#FFF', alignSelf: 'center', padding: 20, borderRadius: 15, marginBottom: 20 }}>
                    <Text style={{ fontFamily: "Oswald", fontSize: 18, textAlign: 'center' }}>
                        Perulangan adalah proses menjalankan blok kode secara berulang sampai kondisi tertentu tercapai. For loop digunakan ketika jumlah perulangan sudah diketahui, sedangkan while loop digunakan jika perulangan berlangsung selama kondisi tertentu terpenuhi. Nested loop adalah perulangan di dalam perulangan lain.
                    </Text>
                </View>
                <View style={styles.table}>
                    {tableTipePerulangan.map((rowData, rowIndex) => (
                        <View
                            key={rowIndex}
                            style={[
                                styles.row,
                                rowIndex === 0 ? styles.headerRow : null
                            ]}
                        >
                            {rowData.map((cellData, cellIndex) => (
                                <Text
                                    key={cellIndex}
                                    style={[
                                        styles.cell,
                                        rowIndex === 0 ? styles.headerText : null
                                    ]}
                                >
                                    {cellData}
                                </Text>
                            ))}
                        </View>
                    ))}
                </View>
                <View
                    style={{
                        backgroundColor: '#FFF',
                        alignSelf: 'center',
                        marginBottom: 20,
                    }}
                >
                    <Text style={{ fontFamily: "Oswald", fontSize: 18, textAlign: 'center', marginTop: 15, paddingHorizontal: 20 }}>
                        Contoh program perulangan adalah mencetak angka 1 hingga 10 menggunakan for loop:
                    </Text>
                    <Image
                        source={require("@/assets/images/Materi/Perulangan_1.png")}
                        style={{ width: 350, height: 150, alignSelf: 'center', marginBottom: 10 }}
                    />
                    <Image
                        source={require("@/assets/images/Materi/Perulangan_2.png")}
                        style={{ width: 350, height: 250, alignSelf: 'center', marginBottom: 10 }}
                    />
                </View>
            </ScrollView>
        </ImageBackground >
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    table: {
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 30,
    },
    row: {
        flexDirection: 'row',
    },
    headerRow: {
        backgroundColor: '#f4f4f4',
    },
    cell: {
        padding: 10,
        flex: 1,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000',
        fontFamily: "Oswald",
    },
    headerText: {
        fontFamily: "Oswald",
    },
});


export default Task1;

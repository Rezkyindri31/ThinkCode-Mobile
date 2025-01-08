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
    const tableTipePercabangan = [
        ["Jenis", "Penjelasan"],
        ["If Statement", "Menjalankan blok kode jika kondisi benar."],
        ["If-Else Statement", "Menyediakan blok alternatif jika kondisi salah."],
        ["If-Else If-Else", "Menangani banyak kondisi dengan prioritas tertentu."],
        ["Switch Case", "Membandingkan ekspresi dengan beberapa nilai tertentu."],
        ["Ternary Operator", "Percabangan singkat untuk kondisi sederhana."],
        ["Nested If", "If bersarang untuk kondisi lebih kompleks."]
    ];

    return (
        <ImageBackground
            source={require("@/assets/images/BackgroundMateri.png")}
            style={{ flex: 1, paddingTop: 40, paddingHorizontal: 20 }}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={{ flexWrap: 1, paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 30, fontFamily: "Jersey-Regular", marginBottom: 20, textAlign: 'center', alignSelf: 'center', marginTop: 20 }}>
                    Percabangan
                </Text>
                <View style={{ backgroundColor: '#FFF', alignSelf: 'center', padding: 20, borderRadius: 15, marginBottom: 20 }}>
                    <Text style={{ fontFamily: "Oswald", fontSize: 18, textAlign: 'center' }}>
                        Percabangan adalah proses pengambilan keputusan dalam program. Pernyataan if-else digunakan untuk menjalankan kode tertentu jika suatu kondisi terpenuhi, dan kode lainnya jika tidak. Jika terdapat lebih dari satu kondisi yang harus diperiksa, nested if digunakan.
                    </Text>
                </View>
                <View style={styles.table}>
                    {tableTipePercabangan.map((rowData, rowIndex) => (
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
                        Contoh program percabangan adalah menentukan apakah angka yang dimasukkan pengguna merupakan bilangan genap atau ganjil:
                    </Text>
                    <Image
                        source={require("@/assets/images/Materi/Percabangan_1.png")}
                        style={{ width: 350, height: 150, alignSelf: 'center', marginBottom: 10 }}
                    />
                    <Image
                        source={require("@/assets/images/Materi/Percabangan_2.png")}
                        style={{ width: 350, height: 150, alignSelf: 'center', marginBottom: 10 }}
                    />
                    <Image
                        source={require("@/assets/images/Materi/Percabangan_3.png")}
                        style={{ width: 350, height: 150, alignSelf: 'center', marginBottom: 10 }}
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

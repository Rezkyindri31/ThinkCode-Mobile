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
    const tableTipeData = [
        ["Kategori", "Tipe Data", "Deskripsi"],
        ["Primitif", "Integer (int)", "Bilangan bulat positif atau negatif tanpa desimal."],
        ["Primitif", "Float/Double", "Bilangan desimal, digunakan untuk nilai yang memiliki bagian pecahan."],
        ["Primitif", "Boolean (bool)", "Nilai logika, hanya dapat bernilai true atau false."],
        ["Primitif", "Character (char)", "Satu karakter, biasanya dalam tanda kutip tunggal."],
        ["Primitif", "String", "Sekumpulan karakter, biasanya dalam tanda kutip ganda."],
        ["Non-Primitif", "Array", "Kumpulan elemen dengan tipe data yang sama, diakses melalui indeks."]

    ];
    const tableTipeOperator = [
        ["Kategori", "Operasi", "Simbol", "Deskripsi"],
        ["Aritmatika", "Penjumlahan", "+", "Menjumlahkan dua angka."],
        ["Aritmatika", "Pengurangan", "-", "Mengurangi satu angka dari angka lain."],
        ["Aritmatika", "Perkalian", "*", "Mengalikan dua angka."],
        ["Aritmatika", "Pembagian", "/", "Membagi satu angka dengan angka lain."],
        ["Aritmatika", "Modulus (Sisa Bagi)", "%", "Menghasilkan sisa pembagian dua angka."],
        ["Perbandingan", "Sama Dengan", "==", "Memeriksa apakah dua nilai sama."],
        ["Perbandingan", "Tidak Sama Dengan", "!=", "Memeriksa apakah dua nilai berbeda."],
        ["Perbandingan", "Lebih Besar", ">", "Memeriksa apakah nilai pertama lebih besar dari nilai kedua."],
        ["Perbandingan", "Lebih Kecil", "<", "Memeriksa apakah nilai pertama lebih kecil dari nilai kedua."],
        ["Perbandingan", "Lebih Besar atau Sama", ">=", "Memeriksa apakah nilai pertama lebih besar atau sama dengan nilai kedua."],
        ["Perbandingan", "Lebih Kecil atau Sama", "<=", "Memeriksa apakah nilai pertama lebih kecil atau sama dengan nilai kedua."],
        ["Logika", "AND (Dan)", "&&", "Menghasilkan true jika kedua kondisi bernilai true."],
        ["Logika", "OR (Atau)", "||", "Menghasilkan true jika salah satu dari kondisi bernilai true."],
        ["Logika", "NOT (Tidak)", "!", "Membalikkan nilai logika (dari true menjadi false atau sebaliknya)."]

    ];
    return (
        <ImageBackground
            source={require("@/assets/images/BackgroundMateri.png")}
            style={{ flex: 1, paddingTop: 40, paddingHorizontal: 20 }}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={{ flexWrap: 1, paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 30, fontFamily: "Jersey-Regular", marginBottom: 20, textAlign: 'center', alignSelf: 'center', marginTop: 20 }}>
                    Dasar Pemrograman
                </Text>
                <View style={{ backgroundColor: '#FFF', alignSelf: 'center', padding: 20, borderRadius: 15, marginBottom: 20 }}>
                    <Text style={{ fontFamily: "Oswald", fontSize: 18, textAlign: 'center' }}>
                        Dasar pemrograman mencakup penyusunan struktur program sederhana yang melibatkan deklarasi variabel, input, dan output. Variabel digunakan untuk menyimpan data dengan tipe tertentu, seperti integer, float, string, dan boolean.
                    </Text>
                </View>
                <View style={styles.table}>
                    {tableTipeData.map((rowData, rowIndex) => (
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
                <View style={{ backgroundColor: '#FFF', alignSelf: 'center', padding: 20, borderRadius: 15, marginBottom: 20 }}>
                    <Text style={{ fontFamily: "Oswald", fontSize: 18, textAlign: 'center' }}>
                        Operasi dasar dalam pemrograman meliputi aritmatika (penjumlahan, pengurangan), perbandingan (lebih besar, lebih kecil), dan logika (AND, OR, NOT).
                    </Text>
                </View>
                <View style={styles.table}>
                    {tableTipeOperator.map((rowData, rowIndex) => (
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
            </ScrollView>
        </ImageBackground>
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
        fontFamily: "Oswald",
        flex: 1,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000',
    },
    headerText: {
        fontFamily: "Oswald",
    },
});


export default Task1;

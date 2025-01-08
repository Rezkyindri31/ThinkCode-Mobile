import React from 'react';
import { Text, View, ImageBackground, ActivityIndicator, ScrollView, Image } from 'react-native';
import { useLoadFont } from "@/hooks/frontend/useLoadFont";

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
    return (
        <ImageBackground
            source={require("@/assets/images/BackgroundMateri.png")}
            style={{ flex: 1, paddingTop: 40, paddingHorizontal: 20 }}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={{ flexWrap: 1, paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 30, fontFamily: "Jersey-Regular", marginBottom: 20, textAlign: 'center', alignSelf: 'center', marginTop: 20 }}>
                    Fungsi
                </Text>
                <View style={{ backgroundColor: '#FFF', alignSelf: 'center', padding: 20, borderRadius: 15, marginBottom: 20 }}>
                    <Text style={{ fontFamily: "Oswald", fontSize: 18, textAlign: 'center' }}>
                        Fungsi adalah blok kode terorganisir yang dirancang untuk menjalankan tugas tertentu dan dapat digunakan berulang kali dalam program. Fungsi memudahkan pengelolaan kode, meningkatkan keterbacaan, dan memungkinkan penggunaan kembali kode tanpa harus menuliskan ulang logika yang sama. Fungsi dapat menerima parameter sebagai input tambahan yang memungkinkan fleksibilitas dalam cara fungsi tersebut bekerja. Selain itu, fungsi dapat mengembalikan nilai sebagai hasil eksekusi.
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor: '#FFF',
                        alignSelf: 'center',
                        marginBottom: 20,
                    }}
                >
                    <Text style={{ fontFamily: "Oswald", fontSize: 18, textAlign: 'center', marginTop: 15, paddingHorizontal: 20 }}>
                        Contoh program fungsi adalah menghitung luas lingkaran:
                    </Text>
                    <Image
                        source={require("@/assets/images/Materi/Fungsi_1.png")}
                        style={{ width: 350, height: 150, alignSelf: 'center', marginBottom: 10 }}
                    />
                    <Image
                        source={require("@/assets/images/Materi/Fungsi_2.png")}
                        style={{ width: 350, height: 250, alignSelf: 'center', marginBottom: 10 }}
                    />
                </View>
            </ScrollView>
        </ImageBackground >
    );
}


export default Task1;

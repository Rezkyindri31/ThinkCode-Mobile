import React from 'react';
import { Text, View, ImageBackground, ActivityIndicator, ScrollView, Image } from 'react-native';
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

    return (
        <ImageBackground
            source={require("@/assets/images/BackgroundMateri.png")}
            style={{ flex: 1, paddingTop: 40, paddingHorizontal: 20 }}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={{ flexWrap: 1, paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 30, fontFamily: "Jersey-Regular", marginBottom: 20, textAlign: 'center', alignSelf: 'center' }}>
                        Struktur Algoritma
                    </Text>
                    <View style={{ backgroundColor: '#FFF', alignSelf: 'center', padding: 20, borderRadius: 15, marginBottom: 20 }}>
                        <Text style={{ fontFamily: "Oswald", fontSize: 18, textAlign: 'center' }}>
                            Struktur dasar dalam algoritma terdiri dari tiga bagian, yaitu urutan (sequence), percabangan (selection), dan perulangan (iteration).
                        </Text>
                    </View>
                    <View style={{ backgroundColor: '#FFF', alignSelf: 'center', padding: 20, borderRadius: 15, marginBottom: 20 }}>
                        <Text style={{ fontFamily: "Oswald", fontSize: 18, textAlign: 'center' }}>
                            Sequence adalah serangkaian instruksi yang dijalankan secara berurutan, misalnya memasak nasi: cuci beras, masukkan ke dalam rice cooker, dan tekan tombol start.
                        </Text>
                    </View>
                    <View style={{ backgroundColor: '#FFF', alignSelf: 'center', padding: 20, borderRadius: 15, marginBottom: 20 }}>
                        <Text style={{ fontFamily: "Oswald", fontSize: 18, textAlign: 'center' }}>
                            Selection digunakan untuk membuat keputusan, misalnya jika suhu air lebih dari 100 derajat maka matikan kompor.
                        </Text>
                    </View>
                    <View style={{ backgroundColor: '#FFF', alignSelf: 'center', padding: 20, borderRadius: 15, marginBottom: 20 }}>
                        <Text style={{ fontFamily: "Oswald", fontSize: 18, textAlign: 'center' }}>
                            Iteration memungkinkan perulangan instruksi, misalnya menghitung mundur dari 10 hingga 1.
                        </Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#FFF', padding: 10, borderRadius: 15, alignSelf: 'center', marginBottom: 20 }}>
                    <Image
                        source={require("@/assets/images/Materi/flwchart.png")}
                        style={{ width: 300, height: 500, alignSelf: 'center', marginBottom: 10 }}
                    />
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

export default Task1;

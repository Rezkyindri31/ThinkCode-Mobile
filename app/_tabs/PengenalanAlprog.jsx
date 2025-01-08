import React from 'react';
import { Text, View, ImageBackground, ActivityIndicator, ScrollView } from 'react-native';
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
                        Pengenalan Algoritma dan Pemrograman
                    </Text>
                    <View style={{ backgroundColor: '#FFF', alignSelf: 'center', padding: 20, borderRadius: 15, marginBottom: 20 }}>
                        <Text style={{ fontFamily: "Oswald", fontSize: 18, textAlign: 'center' }}>
                            Algoritma adalah serangkaian langkah-langkah logis dan sistematis yang digunakan untuk menyelesaikan suatu masalah. Algoritma menjadi dasar utama dalam pemrograman karena membantu programmer memahami dan memecahkan masalah sebelum diimplementasikan ke dalam kode.
                        </Text>
                    </View>
                    <Text style={{ fontFamily: "Oswald", fontSize: 18, textAlign: 'center', marginBottom: 10 }}>
                        Karakteristik Algoritma Yang Baik:
                    </Text>
                    <View style={{ width: '90%', marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Ionicons name="send" size={16} style={{ marginRight: 10 }} color="#000" />
                            <Text style={{ fontFamily: "Oswald", fontSize: 16 }}>Finite (Terbatas): Algoritma harus memiliki jumlah langkah yang terbatas dan berakhir.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Ionicons name="send" size={16} style={{ marginRight: 10 }} color="#000" />
                            <Text style={{ fontFamily: "Oswald", fontSize: 16 }}>Unambiguous (Jelas): Setiap langkah harus jelas, tidak ambigu, dan dapat dimengerti.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Ionicons name="send" size={16} style={{ marginRight: 10 }} color="#000" />
                            <Text style={{ fontFamily: "Oswald", fontSize: 16 }}>Output: Algoritma menghasilkan setidaknya satu output sebagai solusi dari masalah.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Ionicons name="send" size={16} style={{ marginRight: 10 }} color="#000" />
                            <Text style={{ fontFamily: "Oswald", fontSize: 16 }}>Feasibility (Dapat Dilaksanakan): Algoritma harus dapat dijalankan dengan sumber daya yang ada.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Ionicons name="send" size={16} style={{ marginRight: 10 }} color="#000" />
                            <Text style={{ fontFamily: "Oswald", fontSize: 16 }}>Independen: Algoritma tidak terikat pada bahasa pemrograman tertentu.</Text>
                        </View>
                    </View>
                    <Text style={{ fontFamily: "Oswald", fontSize: 18, textAlign: 'center', marginBottom: 10 }}>
                        Cara Menuliskan Algoritma:
                    </Text>
                    <View style={{ width: '90%', marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Ionicons name="play" size={16} style={{ marginRight: 10 }} color="#000" />
                            <Text style={{ fontFamily: "Oswald", fontSize: 16, textAlign: 'left' }}>Bahasa Natural (Deskripsi): Langkah- langkah dijelaskan menggunakan bahasa sehari-hari.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Ionicons name="play" size={16} style={{ marginRight: 10 }} color="#000" />
                            <Text style={{ fontFamily: "Oswald", fontSize: 16 }}>Pseudocode: Ditulis menggunakan bahasa formal semi-programming.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Ionicons name="play" size={16} style={{ marginRight: 10 }} color="#000" />
                            <Text style={{ fontFamily: "Oswald", fontSize: 16 }}>Flowchart: Representasi visual menggunakan simbol diagram.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

export default Task1;

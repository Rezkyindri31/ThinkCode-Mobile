import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useLoadFont } from "@/hooks/frontend/useLoadFont";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ThinkCodeMenu() {
    const router = useRouter();
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
        >
            <View style={{ marginTop: 50 }}>
                <View style={{ alignItems: 'center', marginBottom: 50 }}>
                    <Text style={{ fontFamily: "Jersey-Regular", fontSize: 50, color: '#000' }}>Think Code</Text>
                    <Text style={{ fontFamily: "Jersey-Regular", fontSize: 25, color: '#000' }}>Algoritma dan Pemrograman</Text>
                </View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 10,
                        backgroundColor: '#FFF',
                        borderRadius: 8,
                        marginBottom: 20,
                        elevation: 3,
                    }}
                    onPress={() => router.push("/_tabs/PengenalanAlprog")}
                >
                    <Ionicons name="book" size={24} style={{ marginRight: 20 }} color="#000" />
                    <Text style={{ fontFamily: "Jersey-Regular", fontSize: 22, color: '#000' }}>Pengenalan Algoritma dan Pemrograman</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 10,
                        backgroundColor: '#FFF',
                        borderRadius: 8,
                        marginBottom: 20,
                        elevation: 3,
                    }}
                    onPress={() => router.push("/_tabs/StrukturAlgoritma")}
                >
                    <Ionicons name="book" size={24} style={{ marginRight: 20 }} color="#000" />
                    <Text style={{ fontFamily: "Jersey-Regular", fontSize: 22, color: '#000' }}>Struktur Algoritma</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 10,
                        backgroundColor: '#FFF',
                        borderRadius: 8,
                        marginBottom: 20,
                        elevation: 3,
                    }}
                    onPress={() => router.push("/_tabs/DasarPemrograman")}
                >
                    <Ionicons name="book" size={24} style={{ marginRight: 20 }} color="#000" />
                    <Text style={{ fontFamily: "Jersey-Regular", fontSize: 22, color: '#000' }}>Dasar Pemrograman</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 10,
                        backgroundColor: '#FFF',
                        borderRadius: 8,
                        marginBottom: 20,
                        elevation: 3,
                    }}
                    onPress={() => router.push("/_tabs/Percabangan")}
                >
                    <Ionicons name="book" size={24} style={{ marginRight: 20 }} color="#000" />
                    <Text style={{ fontFamily: "Jersey-Regular", fontSize: 22, color: '#000' }}>Percabangan (Selection)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 10,
                        backgroundColor: '#FFF',
                        borderRadius: 8,
                        marginBottom: 20,
                        elevation: 3,
                    }}
                    onPress={() => router.push("/_tabs/Perulangan")}
                >
                    <Ionicons name="book" size={24} style={{ marginRight: 20 }} color="#000" />
                    <Text style={{ fontFamily: "Jersey-Regular", fontSize: 22, color: '#000' }}>Perulangan (Iteration)</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 10,
                        backgroundColor: '#FFF',
                        borderRadius: 8,
                        marginBottom: 20,
                        elevation: 3,
                    }}
                    onPress={() => router.push("/_tabs/Fungsi")}
                >
                    <Ionicons name="book" size={24} style={{ marginRight: 20 }} color="#000" />
                    <Text style={{ fontFamily: "Jersey-Regular", fontSize: 22, color: '#000' }}>Fungsi</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

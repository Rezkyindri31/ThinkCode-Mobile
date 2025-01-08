import React, { useState } from "react";
import { View, Text, ImageBackground, ScrollView, Image, TouchableOpacity, Dimensions, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { useLoadFont } from "@/hooks/frontend/useLoadFont";

const { width } = Dimensions.get("window");

export default function OnboardingScreen() {
    const [currentPage, setCurrentPage] = useState(0);
    const router = useRouter();

    const pages = [
        {
            image: require("@/assets/images/Book.png"),
            title: "Think Code",
            subtitle: "Mobile",
        },
        {
            image: require("@/assets/images/Ideas.png"),
            title: "Think Code",
            subtitle: "Membantu Anda belajar Algoritma dan Pemrograman",
        },
        {
            image: require("@/assets/images/Logo.png"),
            title: "Penasaran?",
            subtitle: "Anda ingin belajar Algoritma dan Pemrograman?",
            buttonText: "Mulai Belajar",
            targetScreen: "/_tabs/materi",
        },
    ];

    const fontsLoaded = useLoadFont();

    const handleScroll = (event) => {
        const pageIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentPage(pageIndex);
    };

    const handleNavigateToMateri = () => {
        router.push("/_tabs/materi");
    };

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#00238e" />
                <Text style={{ marginTop: 10, fontSize: 18, color: "#00238e" }}>Memuat Font...</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require("@/assets/images/Background.png")}
                style={{ flex: 1 }}
                resizeMode="cover"
            >
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                >
                    {pages.map((page, index) => (
                        <View key={index} style={{ width, alignItems: "center", justifyContent: "center" }}>
                            <Image source={page.image} style={{ width: 150, height: 150 }} resizeMode="contain" />
                            <Text style={{ fontFamily: "Jersey-Regular", fontSize: 60, color: "#00238e" }}>
                                {page.title}
                            </Text>
                            <Text style={{ fontFamily: "Jersey-Regular", fontSize: 25, color: "black", textAlign: "center" }}>
                                {page.subtitle}
                            </Text>
                            {page.buttonText && (
                                <TouchableOpacity onPress={handleNavigateToMateri} style={{ marginTop: 20, backgroundColor: "#00238e", paddingVertical: 12, paddingHorizontal: 24, borderRadius: 25 }}>
                                    <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>{page.buttonText}</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    ))}
                </ScrollView>

                <View style={{ position: "absolute", bottom: 20, flexDirection: "row", alignSelf: "center" }}>
                    {pages.map((_, index) => (
                        <View
                            key={index}
                            style={{
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                marginHorizontal: 4,
                                backgroundColor: currentPage === index ? "black" : "gray",
                            }}
                        />
                    ))}
                </View>
            </ImageBackground>
        </View>
    );
}

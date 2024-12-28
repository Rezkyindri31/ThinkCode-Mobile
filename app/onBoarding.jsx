import React, { useState } from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import '@/global.css';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
    const [currentPage, setCurrentPage] = useState(0);
    const router = useRouter();

    const pages = [
        {
            image: require('@/assets/Book.png'),
            title: 'Think Code',
            subtitle: 'Mobile',
        },
        {
            image: require('@/assets/Ideas.png'),
            title: 'Think Code',
            subtitle: 'Membantu Anda belajar Algoritma dan Pemrograman',
        },
        {
            image: require('@/assets/Book.png'),
            title: 'Penasaran?',
            subtitle: 'Anda ingin belajar Algoritma dan Pemrograman?',
            buttonText: 'Mulai Belajar',
            targetScreen: '/_tabs/materi',
        },
    ];

    const handleScroll = (event) => {
        const pageIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentPage(pageIndex);
    };

    const handleNavigateToMateri = () => {
        router.push('/_tabs/materi');
    };

    return (
        <View className="flex-1 bg-[#e6f4f1]">
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {pages.map((page, index) => (
                    <View key={index} style={{ width, alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={page.image}
                            className="w-72 h-72"
                            resizeMode="contain"
                        />
                        <Text className="text-5xl font-semibold text-[#00238e]">{page.title}</Text>
                        <Text className="text-2xl text-center font-semibold text-black">{page.subtitle}</Text>
                        {page.buttonText && (
                            <TouchableOpacity
                                onPress={handleNavigateToMateri} // Trigger navigation when button is pressed
                                className="mt-6 bg-[#00238e] px-6 py-2 rounded-full"
                            >
                                <Text className="text-white text-xl">{page.buttonText}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
            </ScrollView>

            <View className="absolute bottom-10 flex-row gap-2 self-center">
                {pages.map((_, index) => (
                    <View
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentPage === index ? 'bg-black' : 'bg-gray-400'}`}
                    ></View>
                ))}
            </View>
        </View>
    );
}

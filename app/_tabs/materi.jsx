import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const ThinkCodeMenu = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Think Code</Text>
            </View>

            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => router.push({ pathname: '/_tabs/page1', query: { title: 'Algoritma : Pengertian, Karakteristik, dan Contoh Sederhana' } })}
                >
                    <Image
                        source={require('@/assets/Book.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.menuText}>Algoritma : Pengertian, Karakteristik, dan Contoh Sederhana</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => router.push({ pathname: '/materi', query: { title: 'Struktur Algoritma' } })}
                >
                    <Image
                        source={require('@/assets/Book.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.menuText}>Struktur Algoritma</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => router.push({ pathname: '/materi', query: { title: 'Pseudo Code' } })}
                >
                    <Image
                        source={require('@/assets/Book.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.menuText}>Pseudo Code</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.menuItem, styles.selectedItem]}
                    onPress={() => router.push({ pathname: '/materi', query: { title: 'Dasar bahasa C' } })}
                >
                    <Image
                        source={require('@/assets/Book.png')}
                        style={styles.icon}
                    />
                    <Text style={[styles.menuText, styles.selectedText]}>Dasar bahasa C</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7F9FF',
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    menuContainer: {
        marginTop: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginBottom: 15,
        elevation: 3,
    },
    selectedItem: {
        backgroundColor: '#D9EEFF',
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    menuText: {
        fontSize: 16,
        color: '#000',
    },
    selectedText: {
        fontWeight: 'bold',
    },
});

export default ThinkCodeMenu;

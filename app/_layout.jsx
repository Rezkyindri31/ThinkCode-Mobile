import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="_tabs/materi" options={{ headerShown: false }} />
            <Stack.Screen name="_tabs/PengenalanAlprog" options={{ headerShown: false }} />
            <Stack.Screen name="_tabs/StrukturAlgoritma" options={{ headerShown: false }} />
            <Stack.Screen name="_tabs/DasarPemrograman" options={{ headerShown: false }} />
            <Stack.Screen name="_tabs/Percabangan" options={{ headerShown: false }} />
            <Stack.Screen name="_tabs/Perulangan" options={{ headerShown: false }} />
            <Stack.Screen name="_tabs/Fungsi" options={{ headerShown: false }} />
        </Stack>
    );
}

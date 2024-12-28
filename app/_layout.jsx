import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="_tabs/materi" options={{ headerShown: false }} />
            <Stack.Screen name="_tabs/page1" options={{ headerShown: false }} />
        </Stack>
    );
}

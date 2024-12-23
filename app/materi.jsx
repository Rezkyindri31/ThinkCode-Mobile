import { Text, View } from 'react-native';

export default function LearningScreen() {
    return (
        <View className="flex-1 bg-[#e6f4f1]">
            <View className="bg-white p-6 rounded-xl shadow-lg mx-2 mt-4">
                <Text className="text-center text-xl font-semibold">Welcome to the Learning Screen!</Text>
            </View>
            <View className="bg-white p-6 rounded-xl shadow-lg mx-2 mt-2">
                <Text className="text-center text-xl font-semibold">Welcome to the Learning Screen!</Text>
            </View>
        </View>
    );
}

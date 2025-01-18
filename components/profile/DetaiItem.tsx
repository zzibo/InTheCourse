import { View, Text } from "react-native";

const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <View className="flex flex-row flex-wrap items-start space-x-2">
    <Text className="text-lg font-semibold text-gray-700 dark:text-gray-300">
      {label}
    </Text>
    <Text className="p-2 text-gray-600 dark:text-gray-400 flex flex-wrap">
      {value}
    </Text>
  </View>
);
export default DetailItem;

import { View, Text } from "react-native";

const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <View className="flex flex-row items-center flex-wrap">
    <Text className="text-lg font-semibold text-gray-700 dark:text-gray-300">
      {label}
    </Text>
    <Text className=" px-2 text-gray-600 dark:text-gray-400">{value}</Text>
  </View>
);
export default DetailItem;

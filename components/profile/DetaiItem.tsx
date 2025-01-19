import { View, Text } from "react-native";

const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <View className="flex flex-row items-center flex-wrap my-1">
    <Text className="text-lg font-semibold text-black dark:text-white">
      {label}
    </Text>
    <Text className=" px-2 text-black dark:text-white">{value}</Text>
  </View>
);
export default DetailItem;

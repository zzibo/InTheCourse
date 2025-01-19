import { View, Text } from "react-native";

const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <View className="flex flex-row items-center flex-wrap my-1">
    <Text className="text-lg font-semibold text-black">
      {label}
    </Text>
    <Text className=" px-2 text-black">{value}</Text>
  </View>
);
export default DetailItem;

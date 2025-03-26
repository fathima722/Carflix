import { getAsset } from "@/utils/getAsset";
import { Image, Text, View } from "react-native";

type RatingProps = {
    rating: string;
    customClassName?: string;
}

export const Rating = ({rating, customClassName}: RatingProps) => {
    return (
        <View className={`flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2 ${customClassName}`}>
        <Image source={{uri:getAsset('icons/star.png')}} className="size-4" />
        <Text className="text-white font-bold text-sm">{rating}</Text>
      </View>
    );
};
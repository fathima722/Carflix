import { Link } from "expo-router";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { type Car } from "@/types/Car";
import { getCarName } from "@/utils/getCarName";
import { Rating } from "./shared/Rating";

const CarCard = ({
id,
make,
model,
year,
price,
image
}: Car) => {

  return (
    <Link href={`/cars/${id}`} asChild>
      <TouchableOpacity className="w-[50%]">
        <Image
          source={{
            uri: image ? image : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />

        <Text className="text-lg font-bold text-white mt-2 pr-4" numberOfLines={2}>
          {getCarName(year, make, model)}
        </Text>

        <View className="flex-row items-center justify-between">
          <Rating rating="4.5" />
          <View className="flex-row items-center justify-between">
            <Text className="text-xs text-light-300 font-medium mt-1">
              ${price}
            </Text>
        </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default CarCard;

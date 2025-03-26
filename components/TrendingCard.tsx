import { Link } from "expo-router";
import MaskedView from "@react-native-masked-view/masked-view";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { type TrendingCar } from "@/types/TrendingCar";
import { getAsset } from "@/utils/getAsset";

interface TrendingCardProps {
  car: TrendingCar;
  index: number;
}

const TrendingCard = ({
  car: { item_id, title, image },
  index,
}: TrendingCardProps) => {
  return (
    <Link href={`/cars/${item_id}`} asChild>
      <TouchableOpacity className="w-40 relative pl-5">
        <Image
          source={{ uri: image }}
          className="w-40 h-48 rounded-lg"
          resizeMode="cover"
        />

        <View className="absolute bottom-9 -left-3.5 px-2 py-1 rounded-full">
          <MaskedView
            maskElement={
              <Text className="font-bold text-white text-6xl">{index + 1}</Text>
            }
          >
            <Image
              source={{uri:getAsset('images/rankingGradient.png')}}
              className="size-14"
              resizeMode="cover"
            />
          </MaskedView>
        </View>

        <Text
          className="text-sm font-bold mt-2 text-light-200"
          numberOfLines={2}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;

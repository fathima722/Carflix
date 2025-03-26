import { View, Image, ScrollView } from "react-native";
import TrendingCars from "@/components/TrendingCars";
import RecommendedCars from "@/components/RecommendedCars";
import { getAsset } from "@/utils/getAsset";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image 
        source={{uri:getAsset('images/bg.png')}} 
        className="absolute w-full h-full z-0" 
      />
      {/* ScrollView is not very performant in real scenario for a similar usecase, but just using for demo */}
      <ScrollView 
        className="flex-1 px-5" 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{minHeight: "100%", paddingBottom: 10}}
      >
        <Image 
          source={{uri:getAsset("icons/logo.png")}}
          className="w-[50%] h-10 mt-20 mb-5 mx-auto"
        />
        <View className="flex-1 mt-5">
          <TrendingCars/>
          <RecommendedCars/>
        </View>
      </ScrollView>
    </View>
  );
}

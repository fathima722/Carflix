
import { FlatList, Text, View } from "react-native";
import useFetch from "@/services/useFetch";
import { getTrendingCars } from "@/services/appwrite";
import TrendingCard from "./TrendingCard";
import Loading from "./shared/Loading";
import Error from "./shared/Error";

// exported constants can be used in unit testing
export const TRENDING_CARS_HEADING = 'Trending Cars';

const TrendingCars = () => {
    const {
        data: trendingCars,
        loading,
        error
      } = useFetch(getTrendingCars);
    
    if(loading) {
        return <Loading/>
    }

    if(error) {
        return <Error errorMsg={error.message}/>
    }

    if(!trendingCars || trendingCars.length <= 0) return null;

    return (
        <>
            <View className="mt-10">
              <Text className="text-2xl text-white font-bold mb-3">{TRENDING_CARS_HEADING}</Text>
            </View>
            <FlatList 
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className="w-4" />}
              className="mb-4 mt-3" 
              data={trendingCars}
              renderItem={({item, index}) => <TrendingCard car={item} index={index}/>}
              />
        </>
    );
};
export default TrendingCars;
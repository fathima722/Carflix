
import { FlatList, Text } from "react-native";
import { fetchCars } from "@/services/fetchCars";
import useFetch from "@/services/useFetch";
import CarCard from "./CarCard";
import Loading from "./shared/Loading";
import Error from "./shared/Error";

// exported constants can be used in unit testing
export const RECOMMENDED_CARS_HEADING = 'Recommended Cars';

const RecommendedCars = () => {
    const {
        data: recommendedCars,
        loading,
        error
      } = useFetch(() => fetchCars());

    if(loading) {
        return <Loading/>
    }

    if(error) {
        return <Error errorMsg={error.message}/>
    }

    if(!recommendedCars || recommendedCars.length <= 0) return null;

    return (
        <>
            <Text className="text-2xl text-white font-bold mt-5 mb-3">{RECOMMENDED_CARS_HEADING}</Text>
            <FlatList
              data={recommendedCars}
              renderItem={({item}) => (
                <CarCard {...item} />
              )}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'flex-start',
                gap:20,
                paddingRight: 5,
                marginBottom: 10
              }}
              className="mt-2 pb-32"
              scrollEnabled={false}
            />
        </>
    );
};
export default RecommendedCars;
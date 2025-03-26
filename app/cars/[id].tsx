import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import Loading from "@/components/shared/Loading";
import Error from "@/components/shared/Error";
import { Rating } from "@/components/shared/Rating";
import useFetch from "@/services/useFetch";
import { fetchCarDetails } from "@/services/fetchCars";
import { getAsset } from "@/utils/getAsset";
import { getCarName } from "@/utils/getCarName";

  
  type CarInfoProps = {
    label: string;
    value?: string | number | null;
  }
  
  const CarInfo = ({ label, value }: CarInfoProps) => (
    <View className="flex-col items-start justify-center mt-5">
      <Text className="text-light-200 font-normal text-sm">{label}</Text>
      <Text className="text-light-100 font-bold text-sm mt-2">
        {value || "N/A"}
      </Text>
    </View>
  );
  
  const Details = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();
  
    const { data: car, loading, error } = useFetch(() =>
      fetchCarDetails(id as string)
    );
  
    if (loading) return <Loading/>;
    if (error) return <Error />;
    if(!car) return <Text> Car is not found </Text>;
    return (
      <View className="bg-primary flex-1">
        <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
          <View>
            <Image
              source={{
                uri: car?.image
              }}
              className="w-full h-[550px]"
              resizeMode="stretch"
            />
          </View>
  
          <View className="flex-col items-start justify-center mt-5 px-5">
            <Text className="text-white font-bold text-xl">{getCarName(car.year, car.make, car.model)}</Text>  
            <Rating rating="4.5"/>
            <CarInfo label="Price" value={`$${car.price}`} />
            <CarInfo label="Mileage" value={`${car.mileage}mi`} />
            <CarInfo label="Fuel Type" value={car.fuelType} />
            <CarInfo label="Horse Power" value={car.horsepower} />
            <CarInfo label="Transmission" value={car.transmission} />
            <CarInfo label="Features" value={car.features.join(" , ") || "N/A"}/>
          </View>
        </ScrollView>
  
        <TouchableOpacity
          className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50"
          onPress={router.back}
        >
          <Image
            source={{uri:getAsset('icons/arrow.png')}}
            className="size-5 mr-1 mt-0.5 rotate-180"
            tintColor="#fff"
          />
          <Text className="text-white font-semibold text-base">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Details;
  
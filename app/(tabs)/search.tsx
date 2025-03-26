import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, FlatList, Image } from "react-native";
import SearchBar from "@/components/SearchBar";
import CarCard from "@/components/CarCard";
import useFetch from "@/services/useFetch";
import { updateSearchCount } from "@/services/appwrite";
import { fetchCars } from "@/services/fetchCars";
import { getAsset } from "@/utils/getAsset";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: cars = [],
    loading,
    error,
    refetch: loadCars,
    reset,
  } = useFetch(() => fetchCars(searchTerm), false);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchTerm.trim()) {
        await loadCars();

        // Call updateSearchCount only if there are results
        if (cars?.length! > 0 && cars?.[0]) {
          await updateSearchCount(searchTerm, cars[0]);
        }
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={{uri: getAsset('images/bg.png')}}
        className="flex-1 absolute w-full h-full z-0"
        resizeMode="cover"
      />

      <FlatList
        className="px-5"
        data={cars}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CarCard {...item} />}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="my-5 mt-20">
              <SearchBar
                placeholder="Search for a car model"
                value={searchTerm}
                onChangeText={handleSearch}
              />
            </View>

            {loading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}

            {error && (
              <Text className="text-red-500 px-5 my-3">
                Error: {error.message}
              </Text>
            )}

            {!loading &&
              !error &&
              searchTerm.trim() &&
              cars?.length! > 0 && (
                <Text className="text-xl text-white font-bold">
                  Search Results for{" "}
                  <Text className="text-accent">{searchTerm}</Text>
                </Text>
              )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-gray-500 text-xl">
                {searchTerm.trim()
                  ? "No cars found"
                  : "Start typing to search for cars"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;

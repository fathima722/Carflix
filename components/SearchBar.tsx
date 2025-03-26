
import { View, Image, TextInput } from "react-native";
import { getAsset } from "@/utils/getAsset";

type SearchBarProps = {
    placeholder: string;
    onPress?: () => void;
    value?:string;
    onChangeText?: (text: string) => void;
}

const SearchBar = ({placeholder, onPress, value, onChangeText}: SearchBarProps) => {
    return (
        <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
            <Image source={{uri:getAsset('icons/search.png')}} className="size-5" resizeMode="contain" tintColor="#ab8bff"/>
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#a8b5db"
                className="flex-1 ml-2 text-white text-xl"/>
        </View>
    );
};
export default SearchBar;
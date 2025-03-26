import { getAsset } from "@/utils/getAsset";
import { Tabs } from "expo-router";
import { Image, ImageBackground, ImageSourcePropType, Text, View } from "react-native";

type TabIconProps = {
    focused: boolean;
    icon: ImageSourcePropType;
    title:string
}

const TabIcon = ({focused, icon, title}: TabIconProps) => {
    if(focused) {
        return (
            <ImageBackground
                source={{uri:getAsset('images/rankingGradient.png')}}
                className="flex flex-row w-full flex-1 min-w-[150px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden">
                    <Image source={icon} tintColor="#151312" className="size-5"/>
                    <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
            </ImageBackground>
        );
    }

    return (
        <View className="size-full justify-center items-center mt-4 rounded-full">
          <Image source={icon} tintColor="#A8B5DB" className="size-5" />
        </View>
    );
}

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel:false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                tabBarStyle: {
                    backgroundColor: '#0f0D23',
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 52,
                    position: 'absolute',
                    overflow:'hidden',
                    borderWidth: 1,
                    borderColor: '#0f0d23'
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={{uri:getAsset('icons/home.png')}}
                            title='Home'
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={{uri:getAsset('icons/search.png')}}
                            title='Search'
                        />
                    )
                }}
            />
        </Tabs>
    );
};
export default _Layout;
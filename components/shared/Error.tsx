
import { View, Text } from "react-native"

type ErrorProps = {
    errorMsg?: string;
}

const Error = ({errorMsg}: ErrorProps) => {
    return (
        <View>
            {errorMsg ? <Text>Error: {errorMsg}</Text> : <Text>Failureeee!!</Text>}
        </View>
    );
};
export default Error;
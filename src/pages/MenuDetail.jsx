import { View, Text, Image } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

export default function MenuItemDetail({ route }) {
    const { item } = route.params || {};

    if (!item) {

        return (
            <View style={GlobalStyles.menuDetailCard}>
                <Text style={GlobalStyles.menuDetailError}>No menu items selected.</Text>
            </View>
        );
    }

    return (
        <View style={GlobalStyles.menuDetailCard}>
            {item.image && (
                <Image
                    source={typeof item.image === 'string' ? { uri: item.image } : item.image}
                    style={GlobalStyles.menuDetailImage}
                    resizeMode="cover"
                />
            )}

            <Text style={GlobalStyles.menuDetailTitle}>{item.name}</Text>
            <Text style={GlobalStyles.menuDetailPrice}>Price: {item.price}</Text>
            {item.description && (
                <Text style={GlobalStyles.menuDetailDescription}>{item.description}</Text>
            )}
        </View>
    );
}

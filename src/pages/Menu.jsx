import { useContext } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeContext } from '../theme/ThemeContext';
import { menuItemsToDisplay } from '../data/menuData';


export default function MenuScreen() {
    const navigation = useNavigation();
    const { theme } = useContext(ThemeContext);
    const { colors } = theme;


    const renderItem = ({ item, index, section }) => {
        const isLast = index === section.data.length - 1;

        return (
            <Pressable
                onPress={() => navigation.navigate('MenuItemDetail', { item })}
                style={({ pressed }) => [
                    GlobalStyles.itemWrapper,
                    pressed && { opacity: 0.6 }
                ]}
            >
                <View style={GlobalStyles.itemContainer}>
                    <Text style={GlobalStyles.itemText}>{item.name}</Text>
                    <Text style={GlobalStyles.itemText}>{item.price}</Text>
                </View>
                {!isLast && <View style={GlobalStyles.separator} />}
            </Pressable>
        );
    };

    const renderSectionHeader = ({ section: { title } }) => (
        <Text style={GlobalStyles.sectionHeader}>{title}</Text>
    );

    return (
        <View
            style={{ 
                flex: 1,
                alignItems: 'center',
                backgroundColor: colors.background,
                paddingVertical: 20
            }}>
            <View
                style={[
                    GlobalStyles.menuContainer,
                    {
                        backgroundColor: colors.background,
                        width: '100%',
                        maxWidth: 600,
                        flex: 1,
                    },
                ]}
            >
                <SectionList
                    sections={menuItemsToDisplay}
                    keyExtractor={(item, idx) => item.name + idx}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
                    contentContainerStyle={{
                        paddingTop: 0,
                        paddingBottom: 40,
                    }}
                    style={{ flex: 1}}
                />
            </View>
        </View>
    );
}



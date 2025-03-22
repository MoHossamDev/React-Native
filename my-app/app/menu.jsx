import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { Colors } from '@/constants/Colors';
import { MENU_ITEMS } from '@/constants/Menuitems';
import MENU_IMAGES from '@/constants/MenuImages';
import { useState } from "react";
import ice from "@/assets/images/english-countryside-1.webp";

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
    
    // استخدام useState لحفظ القائمة الأصلية والمعدلة
    const [menuData, setMenuData] = useState(MENU_ITEMS);

    // دالة لحذف عنصر معين من القائمة
    const removeItem = (id) => {
        setMenuData((prevData) => prevData.filter((item) => item.id !== id));
    };

    // دالة لإعادة تعيين القائمة إلى الأصلية
    const resetList = () => {
        setMenuData(MENU_ITEMS);
    };

    const separatorComp = <View style={styles.separator} />;
    
    const footerComp =  <TouchableOpacity style={styles.resetButton} onPress={resetList}>
    <Text style={styles.resetButtonText}>Reset</Text>
</TouchableOpacity>

    return (
        <View style={styles.container}>
        <ImageBackground source={ice}
        resizeMode='cover'
        style={styles.image}
        >
        <Container>
            

            <FlatList
                data={menuData}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={separatorComp}
                ListFooterComponent={footerComp}
                ListFooterComponentStyle={styles.footerComp}
                ListEmptyComponent={<Text>Sorry, not available</Text>}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
                            <Text style={styles.menuItemText}>{item.description}</Text>
                        </View>
                        <Image 
                            source={MENU_IMAGES[item.id -1]}
                            style={styles.menuImage}
                        />
                        <TouchableOpacity style={styles.deleteButton} onPress={() => removeItem(item.id)}>
                            <Text style={styles.deleteButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>

                    
                )}
                
            />
                  
           
        </Container>
        </ImageBackground>
                     
                    </View>
    );
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        container: {
            backgroundColor: 'red',
            flex: 3,
            flexDirection: 'column',
          },
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background,
        },
        separator: {
            height: 1,
            backgroundColor: colorScheme === 'dark' ? 'papayawhip' : "#000",
            width: '50%',
            maxWidth: 300,
            marginHorizontal: 'auto',
            marginBottom: 10,
        },
        footerComp: {
            marginHorizontal: 'auto',
        },
        row: {
            flexDirection: 'row',
            width: '100%',
            maxWidth: 600,
            height: 100,
            marginBottom: 10,
            borderStyle: 'solid',
            borderColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden',
            marginHorizontal: 'auto',
            alignItems: 'center',
            position: 'relative',
        },
        menuTextRow: {
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,
        },
        menuItemTitle: {
            fontSize: 18,
            textDecorationLine: 'underline',
        },
        menuItemText: {
            color: theme.text,
        },
        menuImage: {
            width: 100,
            height: 100,
        },
        deleteButton: {
            position: 'absolute',
            right: 10,
            top: 10,
            backgroundColor: 'red',
            borderRadius: 15,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
        },
        deleteButtonText: {
            color: 'white',
            fontWeight: 'bold',
        },
        resetButton: {
            marginTop: 20,
            padding: 15,
            backgroundColor: "red",
            borderRadius: 20,
            alignItems: "center",
            alignSelf: 'center',
            width: 150,
        },
        image: {
            height: '100%',
             width: '100%',
             flex: 1,
             justifyContent: 'center',
             alignItems: 'center',
             resizeMode: 'cover', 
           },
        resetButtonText: {
            color: "white",
            fontWeight: "bold",
        },
    });
}

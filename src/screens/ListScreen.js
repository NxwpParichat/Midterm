import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import ImageSet from '../component/ImageSet';
import data from '../data/data.json';


const ListScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
          <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                <TouchableOpacity onPress={()=> navigation.navigate("Item",{item : item})}>
                  
                  <ImageSet
                    source={{uri: item.photo_url}}
                    title={item.name}
                  />
                </TouchableOpacity>
              }
            />
          
      </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2EBBF",
      },
      imageContainer: {
        alignItems: "center",
        marginVertical: 10,
      },
      image: {
        width: 150,
        height: 150,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: "#000",
      },
      btnView: {
        width: 200,
        backgroundColor: "#F3B562",
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#fff",
        margin: 10,
        alignItems: "center",
      },
      btnTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#5C4B51",
      },
});

export default ListScreen;
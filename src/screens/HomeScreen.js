import { View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ImageSet from '../component/ImageSet';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
            <View >
                <ImageSet
                    source={require('../img/2.jpg')}
                    title='ปาริฉัทท์ ปรีดีวงศ์'
                    subTitle='6421600140'
                />
            </View>

            
            <View>
              <ImageSet
                source={{ uri: 'https://i.pinimg.com/564x/b8/8f/b8/b88fb8129e46a0be0f92c70048a501c9.jpg' }}
                title='วิน เมธวิน'
                subTitle='i love you'
              />
            </View>
            
            <TouchableOpacity  
            style={styles.btnView} onPress={()=> navigation.navigate("List")}> 
            <Text style={styles.imgSubTitle}>Let's get started</Text>    
        </TouchableOpacity>
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
      imgTitle: {
        fontSize: 18,
        fontWeight: "bold",
      },
      imgSubTitle: {
        color: "#666",
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

export default HomeScreen;
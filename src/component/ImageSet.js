import { View, StyleSheet, Text, Image} from "react-native";
const ImageSet = ({ source, title, subTitle, size=150 })=> {
    return (
        <View style={styles.imageContainer}>
            <Image source={source} style={styles.image}/>
            <Text style={styles.imgTitle}>{title}</Text>
            <Text style={styles.imgSubTitle}>{subTitle}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default ImageSet;
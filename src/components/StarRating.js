import React, {useState } from 'react';
import { 
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import starFilled from '../images/star_filled.png';
import starCorner from '../images/star_corner.png';

const StartRating = () =>{

    const [defaultRating, setdefaultRating] = useState(2);
    const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

    const starImgFilled = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    const starImgCorner = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

    const RatingBar = () =>{
        return(
            <View style={styles.ratingBar}>
                {
                    maxRating.map((item, key) => {
                        return(
                            <View
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setdefaultRating(item)}
                            >
                                <Image
                                style={styles.starImg}
                                source={
                                    item <= defaultRating
                                        ? {uri: starImgFilled}
                                        : {uri: starImgCorner}
                                }
                                />
                            </View>
                        )
                    })
                }
            </View>
        )
    }



    return(
        <SafeAreaView style={styles.container}>
            <RatingBar/>
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    container:{
        justifyContent: 'center'
    },
    ratingBar:{
        justifyContent: 'center',
        flexDirection: 'row',
    },
    starImg: {
        width: 15,
        height: 15,
        resizeMode: 'cover'
    }
})

export default StartRating;
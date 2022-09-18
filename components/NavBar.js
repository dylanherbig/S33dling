// styling
import {
    StyleSheet,
    View,
    Pressable,
} from 'react-native';

// icon
import Icon from 'react-native-ico-material-design';

const NavBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                <Pressable onPress={() => console.log("Profile")} style={styles.iconBehave}
                android_ripple={{borderless: true, radius: 50}}>
                    <Icon name="user-shape" height={30} width={30} color="#fff" backgroundColor="#c1f0b7"/>
                </Pressable>

                <Pressable onPress={() => console.log("Home")} style={styles.iconBehave}
                android_ripple={{borderless: true, radius: 50}}>
                    <Icon name="home-button" height={30} width={30} color="#fff"/>
                </Pressable>

                <Pressable onPress={() => console.log("Camera")} style={styles.iconBehave}
                android_ripple={{borderless: true, radius: 50}}>
                    <Icon name="camera" height={30} width={30} color="#fff"/>
                </Pressable>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20,
    },
    bar: {
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#2a7e19',
        width: '90%',
        justifyContent: 'space-evenly',
        borderRadius: 40,
    },
    iconBehave: {
        padding: 16,
    }
});

export default NavBar;

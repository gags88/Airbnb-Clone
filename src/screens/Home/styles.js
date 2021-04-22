import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: 'white',
    width: 200,
    marginLeft: 25,
    marginTop: 25,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    zIndex: 100,
    width: Dimensions.get('screen').width - 20,
    marginLeft: 10,
    marginTop: 0,
    borderRadius: 30,
    minHeight: 50,
  },
});

export default styles;

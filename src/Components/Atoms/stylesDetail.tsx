import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  ctn: {
    flex: 1,
  },
  backIcon: {
    marginBottom: 16,
    marginHorizontal: 24,
  },
  header: {
    flex: 1,
    padding: 30,
    paddingTop: 50,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  img: {
    resizeMode: 'contain',
    width: 300,
    height: 300,
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: '900',
  },
  desc: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'regular',
  },
  cat: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleDesc: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  ctnPrice: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  ctnTxtPrice: {
    shadowColor: '#aba4a4',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  pricetxt: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  ctnNumberReviews: {
    marginTop: 10,
    flexDirection: 'row',
  },
  iconReview: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});

export default styles;

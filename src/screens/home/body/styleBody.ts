import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1f5c4d',
    borderRadius: 16,
    overflow: 'hidden',
    padding: 24,
    margin: 16,
  },
  left: {
    flex: 1,
    paddingRight: 12,
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  suiteTitle: {
    color: '#CDEBDA',
    fontSize: 14,
    marginBottom: 8,
  },
  mainTitle: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 16,
    lineHeight: 36,
  },
  highlight: {
    color: '#76E0AD',
  },
  description: {
    color: '#E0F2EA',
    fontSize: 14,
    marginBottom: 20,
  },
  benefit: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  benefitText: {
    color: '#D8F2E4',
    marginLeft: 8,
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#1f5c4d',
    fontWeight: 'bold',
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 12,
  },
});

export default styles;
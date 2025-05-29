import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 12,
    // paddingHorizontal: 16,
    backgroundColor: '#fbfbfe',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f1f1f',
  },
  menu: {
    flexDirection: 'row',
    gap: 12,
  },
  menuItem: {
    fontSize: 14,
    color: '#000',
    marginHorizontal: 8,
  },

  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: 10,
  },
  searchInput: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    width: 300,
    fontSize: 14,
  },
  auth: {
    fontSize: 14,
    color: '#333',
    marginRight: 10,
  },
  signupButton: {
    backgroundColor: '#0070ff',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  signupText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default styles;
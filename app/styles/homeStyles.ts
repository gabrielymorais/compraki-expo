import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF9900',
  },
  greeting: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  banner: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#FF9900',
  },
  cardList: {
    paddingVertical: 10,
  },
  card: {
    width: 120,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
});

export default styles;

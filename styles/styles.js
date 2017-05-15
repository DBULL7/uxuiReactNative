import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 20,
    backgroundColor: '#7A9E9F'
  },
  button: {
    width: 75
  },
  navbarSeperator: {
    height: 10,
    backgroundColor: '#B8D8D8'
  },
  welcome: {
    flexDirection: 'row',
    backgroundColor: '#4F6367',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcomeText: {
    color: '#B8D8D8',
    fontSize: 26,
    justifyContent: 'center',
    alignItems: 'center'
  },
  seperator: {
    height: 10,
    flex: 1,
    backgroundColor: '#7A9E9F',
  },
  data: {
    backgroundColor: '#4F6367',
    alignItems: 'center'
  },
  goals: {
    color: '#B8D8D8',
    fontSize: 26
  },
  date: {
    color: '#B8D8D8',
    fontSize: 14
  },
  steps: {
    color: '#B8D8D8',
    fontSize: 24
  },
  stepsLarge: {
    fontSize: 48,
    color: '#B8D8D8'
  },
  miniSeperator: {
    backgroundColor: '#7A9E9F',
    height: 3,
    width: 200
  },
  graph: {
    marginBottom: 10
  },
  today: {
    backgroundColor: '#4F6367',
    color: '#B8D8D8',
    fontSize: 26,
    paddingBottom: 20,
    paddingTop: 10,
    textAlign: 'center'
  },
  red: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 20,
    color: '#FFF',
    backgroundColor: '#FE5F55'
  },
  tan: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 20,
    color: '#000',
    backgroundColor: '#EEF5DB'
  },
  exercise: {
    flex: 1,
    width: null
  },
  exerciseNumber: {
    backgroundColor: 'transparent',
    fontSize: 22,
    color: '#EEF5DB',
    marginTop: 30,
    marginLeft: 40,
  },
  exerciseTitle: {
    backgroundColor: 'transparent',
    fontSize: 45,
    color: '#EEF5DB',
    marginLeft: 40
  },
  steps: {
    backgroundColor: 'transparent',
    fontSize: 22,
    color: '#EEF5DB'
  },
  stepRows: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 40
  },
})

export default styles

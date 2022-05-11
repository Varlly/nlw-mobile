import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      alignContent: 'flex-end',

  },
  image: {
      width: 36,
      height: 36,
      marginTop: 25,
      marginBottom: 10
  },
  title: {
      fontSize: 20,
      marginTop: 25,
      marginBottom: 12,
      fontFamily: theme.fonts.medium,
      color: theme.colors.text_primary
  },
  button: {
      height: 40,
      backgroundColor: theme.colors.surface_secondary,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 25,
      marginBottom: 50
  },
  buttonTitle: {
      fontSize: 14,
      fontFamily: theme.fonts.medium,
      color: theme.colors.text_primary
  }
});
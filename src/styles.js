const styles = {
  primaryColor: '#14AE5C',
  secondaryColor: '#0c6938',
  primaryTextColor: '#1E1E1E',
  secondaryTextColor: '#fff',
  gray: '#D9D9D9',
}

export const theme = {
  token: {
    colorPrimaryHover: styles.primaryColor,
    colorPrimaryActive: styles.secondaryColor,
    fontFamily: 'Inter',
    fontSize: 20,
    fontSizeHeading1: 48,
    fontSizeHeading2: 20,
    colorLink: styles.primaryTextColor,
  },
  components: {
    Button: {
      defaultBg: styles.primaryColor,
      defaultBorderColor: styles.primaryColor,
    },
    Divider: {
      textPaddingInline: 0,
    },
    Card: {
      headerBg: styles.gray,
      headerFontSize: 16,
    },
  }
}

export default styles
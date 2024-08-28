const styles = {
  primaryColor: '#14AE5C',
  secondaryColor: '#0c6938',
  primaryTextColor: '#1E1E1E',
  secondaryTextColor: '#fff',
  gray: '#D9D9D9',
}

export const theme = {
  token: {
    colorPrimary: styles.primaryColor,
    fontFamily: 'Inter',
    fontSize: 16,
    fontSizeHeading1: 48,
    fontSizeHeading2: 20,
    colorLink: styles.primaryTextColor,
  },
  components: {
    Button: {
      contentFontSize: 16,
    },
    Divider: {
      textPaddingInline: 0,
    },
    Card: {
      headerBg: styles.gray,
      headerFontSize: 16,
    },
    Form: {
      labelRequiredFontSize: 12,
    },
  }
}

export default styles
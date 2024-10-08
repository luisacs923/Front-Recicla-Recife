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
    Form: {
      labelRequiredFontSize: 12,
    },
    Input: {
      activeBorderColor: styles.secondaryColor,
      activeShadow: '0 0 0 2px rgba(12,	105,	56, 0.1)'
    }
  }
}

export default styles
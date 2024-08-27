import React from "react";
import { StyledBannerText, StyledBannerTitle, StyledH1, StyledH2, StyledMenuItem, StyledParagraph, StyledText } from "./style";
import { ConfigProvider, Typography } from "antd";

function MenuItem(props) {
  return (
    <StyledMenuItem {...props}>
      {props.children}
    </StyledMenuItem>
  )
}

function BannerTitle(props) {
  return (
    <ConfigProvider theme={{token: {fontSizeHeading1: 32}}}>
      <StyledBannerTitle {...props}>
        {props.children}
      </StyledBannerTitle>
    </ConfigProvider>
  )
}

function BannerText(props) {
  return (
    <ConfigProvider theme={{token: {fontSize: 20}}}>
      <StyledBannerText {...props}>
        {props.children}
      </StyledBannerText>
    </ConfigProvider>
  )
}

function Paragraph(props) {
  return (
    <StyledParagraph {...props}>
      {props.children}
    </StyledParagraph>
  )
}

function H1(props) {
  return(
    <StyledH1 {...props}>
      {props.children}
    </StyledH1>
  )
}

function H2(props) {
  return (
    <StyledH2 {...props} level={2}>
      {props.children}
    </StyledH2>
  )
}

function Text(props) {
  return (
    <StyledText {...props}>
      {props.children}
    </StyledText>
  )
}

Text.MenuItem = MenuItem;
Text.BannerTitle = BannerTitle;
Text.BannerText = BannerText;
Text.Paragraph = Paragraph
Text.H1 = H1;
Text.H2 = H2;

export default Text
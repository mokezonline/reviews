/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StylesDefault = {
  // Component and paging
  ReviewComponentMain: {
    ComponentRows: styled.section`
      width: 100%;
      height: 599px;
      background-color: #000000;
      display: flex;
      align-items: center;
    `,
    ComponentColumns: styled.section`
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-left: 100px;
    `,
    ContentContainer: styled.div`
      width: 100%;
      height: 152px;
      display: flex;
      text-align: left;
    `,
  },
  // Primary display and content
  ContentComponents: {
    ContentTitle: styled.b`
      color: #ffffff;
      display: inline;
      font-family: 'Roboto', sans-serif;
      font-size: 32px;
      font-weight: 700;
      text-align: left;
    `,
    ContentBody: styled.div`
      width: 267px;
      height: 60px;
      color: #ffffff;
      font-family: 'Roboto', Sans Serif;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.2px;
      display: flex;
      align-items: center;
  `,
    ContentStats: styled.div`
      width: 267px;
      height: 24px;
      align-items: center;
      color: #999999;
      display: flex;
      font-size: 12px;
      font-weight: 700;
      text-align: left;
  `,
    QuestionIcon: styled.button`
      background-color: #999999;
      border: none;
      border-radius: 100%;
      display: inline;
      margin: 10px;
      font-size: 12px;
      text-align: left;
      outline: none;
  `,
  },
};

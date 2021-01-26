/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StylesModal = {
  ReviewContainers: {
    ModalContainer: styled.div`
      position: absolute;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      z-index: 2;
      cursor: pointer;
      align-items: center;
    `,
    Overlay: styled.div`
      background-color: rgba(0,0,0,0.45);
      display: flex;
      position: absolute;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 3;
    `,
    SeeReviewsContainer: styled.div`
      display: flex;
      flex-direction: column;
      width: 1339px;
      height: 95%;
      background-color: rgba(255,255,255,1);
      border-radius: .5%;
      border: solid rgba(255,255,255,.8);
      overflow-y: auto;
      overflow-x: hidden;
      box-shadow:5px 5px 2.5px rgba(0,0,0,.4);
      z-index: 4;
    `,
    WriteReviewsContainer: styled.div`
      display: flex;
      width: 1339px;
      height: 678px;
      background-color: rgba(255,255,255,1);
      border-radius: .5%;
      border: solid rgba(255,255,255,.8);
      overflow-y: auto;
      overflow-x: hidden;
      box-shadow:5px 5px 2.5px rgba(0,0,0,.4);
      z-index: 4;
      font-family: 'Roboto', Sans Serif;
      color: #000000;
    `,
    ReviewsContainer: styled.div`
      margin-top: 75px;
    `,
    ExitButtonContainer: styled.div`
      width: 100%;
      display: flex;
      justify-content: flex-end;
    `,
    PaginationContainer: styled.div`
      width: 1321px;
      background-color: #ffffff;
      z-index: 5;
      display: flex;
      justify-content: space-between;
      position: absolute;
      .pagination {
        display: flex;
        font-family: 'Roboto', Sans Serif;
        font-size: 14px;
        font-weight: 700;
        list-style-type: none;
      }
      .page-link{
        padding: 0px 3px 0px 3px;
        color: #999999;
      }
      .break-me {
        cursor: pointer;
        letter-spacing: 2px;
      }
      .active {
        border-color: transparent;
        outline: none;
        color: #000000;
        font-size: 14px;
      }
    `,
    ReviewContainer: styled.div`
      color: #212529;
      display: flex;
      justify-content: space-between;
      width: 1321px;
      height: 300px;
     `,
    ReviewHeaderContainer: styled.div`
        display: flex;
        justify-content: space-between;
        height: 21px;
      `,
    ReviewAuthorContainer: styled.aside`
      width: 426px;
      height: 225px;
      background-color: #f5f5f5;
      border-radius: 3%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: 'Roboto', Sans Serif;
      padding-left: 20px;
    `,
    ProductInfoContainer: styled.div`
      display: flex;
      flex-direction: column;
      align-text: center;
      width: 678px;
      height: 448px;
    `,
    Form: styled.form`
      display: flex;
      width: 360px;
      flex-direction: column;
    `,
    Div: styled.div`
      display: flex;
    `,
  },
  ReviewContent: {
    ExitButton: styled.button`
      font-family: 'Roboto', Sans Serif;
      font-weight: 500;
      font-size: 24px;
      color: #ffffff;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      z-index: 4;
    `,
    ReviewsContent: styled.div`
      display: flex;
      padding: 10px;
      flex-direction: column;
      width: 829px;
      height: 263px;
      border-top: 2px solid #f5f5f5;
      font-family: 'Roboto', Sans Serif;
      font-size: 15px;
    `,
    H1: styled.h1`
      height: 25px;
      font-family: 'Roboto', Sans Serif;
      font-size: 21.5px;
      font-weight: 700;
    `,
    H2: styled.h2`
      font-size: 12px;
      font-family: 'Roboto', Sans Serif;
      font-weight: 700;
    `,
    H3: styled.h3`
      font-size: 18px;
      margin: 0px;
    `,
    B: styled.b`
      font-weight: 700;
    `,
    H4: styled.h4`
      margin: 0px;
      font-weight: 500;
      font-size: 10px;
      color: #999999;
    `,
    Img: styled.img`
      height: 360px;
      width: 360px;
    `,
    Ul: styled.ul`
      list-style-type: none;
      padding: 0px;
    `,
    Stars: styled.b`
      cursor: point;
      font-family: 'Roboto', Sans Serif;
      font-size: 24px;
    `,
    CenteredSpan: styled.span`
      display: flex;
      width: 100%;
      justify-content: center;
    `,
    Input: styled.input`
      font-weight: 500;
      width: 100%;
      font-family: 'Roboto', Sans Serif;
      padding: 10px;
      border: solid #000000;
      border-width: 0px 0px 2px 0px;
      &:focus {
        outline: none;
      }
    `,
  },
};

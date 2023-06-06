import styled from 'styled-components';

export const Card = styled.article`
  background: #15263F;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.0952917);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
  max-width: 350px;
  max-height: 596px;
  padding-inline: 24px;
  padding-block: 24px 32px;
`;

export const ViewImage = styled.img`
  position: absolute;
  z-index: 50;
  display: none;
`;

export const ImageHolder = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #00FFF8;
    mix-blend-mode: normal;
    opacity: 0.5;
    display: none;
  }

  &:hover:after {
    display: flex;
  }

  &:hover ${ViewImage} {
    display: flex;
  }
`;

export const Image = styled.img`
  max-width: 302px;
  max-height: 302px;
`;

export const Heading = styled.h1`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #D9D9D9;
  margin-bottom: 16px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #00FFF8;
  }
`;

export const Paragraph = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  color: #8BACD9;
  margin-bottom: 24px;
`;

export const PriceTimeHolder = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const PriceHolder = styled.div`
  display: flex;
  column-gap: 6.46px;
`;

export const TimeHolder = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7.79px;
`;

export const CurrencyIcon = styled.img``;

export const Price = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #00FFF8;
`;

export const TimeIcon = styled.img``;

export const Time = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #8BACD9;
`;

export const Footer = styled.footer`
  border-top: 1px solid #2E405A;
`;

export const CreatorHolder = styled.div`
  padding-top: 16px;
  display: flex;
  column-gap: 16px; 
  align-items: center;
`;

export const CreatorAvator = styled.img`
  max-width: 33px;
  max-height: 33px;
  border: 1px solid #FFFFFF;
  border-radius: 50%;
`;

export const AttributionHolder = styled.div`
  display: flex;
  column-gap: 5px;
`;

export const Creation = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #8BACD9;
`;

export const CreatorName = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #00FFF8;
  }
`;

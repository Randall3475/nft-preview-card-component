import * as S from './style';
import ClockIcon from '../../assets/images/icon-clock.svg';
import ViewIcon from '../../assets/images/icon-view.svg';

type NFTPreviewCardProps = {
  image: string;
  name: string;
  number: number;
  description: string;
  price: number;
  currencyIcon: string;
  currency: string;
  timeLeft: string;
  creatorAvatar: string;
  creatorName: string;
};

const NFTPreviewCard = ({
  image,
  name,
  number,
  description,
  price,
  currencyIcon,
  currency,
  timeLeft,
  creatorAvatar,
  creatorName,
}: NFTPreviewCardProps) => {
  return (
    <>
      <S.Card>
        <S.ImageHolder>
          <S.Image src={image} alt={`Image of ${name}`} />
          <S.ViewImage src={ViewIcon} alt="Eye icon" />
        </S.ImageHolder>
        <S.Heading>
          {name} #{number}
        </S.Heading>
        <S.Paragraph>{description}</S.Paragraph>
        <S.PriceTimeHolder>
          <S.PriceHolder>
            <S.CurrencyIcon src={currencyIcon} alt={`${currency} icon`} />
            <S.Price>
              {price} {currency}
            </S.Price>
          </S.PriceHolder>
          <S.TimeHolder>
            <S.TimeIcon src={ClockIcon} alt="Clock icon" />
            <S.Time>{timeLeft}</S.Time>
          </S.TimeHolder>
        </S.PriceTimeHolder>
        <S.Footer>
          <S.CreatorHolder>
            <S.CreatorAvator
              src={creatorAvatar}
              alt={`Avatar of ${creatorName}`}
            />
            <S.AttributionHolder>
              <S.Creation>Creation of</S.Creation>
              <S.CreatorName>{creatorName}</S.CreatorName>
            </S.AttributionHolder>
          </S.CreatorHolder>
        </S.Footer>
      </S.Card>
    </>
  );
};

export default NFTPreviewCard;

import Global, { Main } from './styles/Global';
import Equilibrium from './assets/images/image-equilibrium.jpg';
import AvatarImage from './assets/images/image-avatar.png';
import EthereumIcon from './assets/images/icon-ethereum.svg';
import NFTPreviewCard from './components/NFTPreviewCard';

const App = () => {
  return (
    <>
      <Global />
      <Main>
        <NFTPreviewCard
          image={Equilibrium}
          name="Equilibrium"
          number={3429}
          description="Our Equilibrium collection promotes balance and calm."
          currencyIcon={EthereumIcon}
          price={0.041}
          currency="ETH"
          timeLeft="3 days left"
          creatorAvatar={AvatarImage}
          creatorName="Jules Wyvern"
        />
      </Main>
    </>
  );
};

export default App;

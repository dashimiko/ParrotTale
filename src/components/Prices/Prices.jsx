import './Prices.scss';

import PriceCard from './PriceCard/PriceCard';

function Prices() {
  return (
    <section className="prices">
      <div className="prices__box">
        <h2 className="prices__title">Affordable pricing</h2>
        <p className="prices__subtitle">
          Bill me <span className="prices__accent-word">monthly</span> • yearly
        </p>
        <div className="prices__card-box">
          <PriceCard
            title="just for free"
            price="Free"
            priceDescription=" / forever"
            ButtonText="Try for free"
            typeOfCard="non-priority"
          />
          <PriceCard
            title="👤 Individual"
            price="$24"
            priceDescription=" / month"
            ButtonText="Regular license"
            typeOfCard="priority"
          />
          <PriceCard
            title="👥 Corporate"
            price="$12"
            priceDescription=" / editor"
            ButtonText="Extended license"
            typeOfCard="standart"
          />
        </div>
      </div>
    </section>
  );
}

export default Prices;

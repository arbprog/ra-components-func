import PropTypes from 'prop-types';

function ShopItemFunc ({item}) {
    const cost = Math.round((item.price * 100) / 100).toFixed(2);
    return (
        <div class="main-content">
            <h2>{item.brand}</h2>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <div class="description">{item.descriptionFull}</div>
            <div class="highlight-window mobile">
                <div class="highlight-overlay"></div>
            </div>
            <div class="divider"></div>
            <div class="purchase-info">
                <div class="price">{item.currency}{cost}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    );
};

ShopItemFunc.propTypes = {
    item: PropTypes.shape({
      brand: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      descriptionFull: PropTypes.string,
      currency: PropTypes.string,
      price: PropTypes.number
    })
  }

export default ShopItemFunc;
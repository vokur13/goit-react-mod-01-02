import PropTypes from 'prop-types';
import defaultImage from '../img/default.jpg';

export default function Painting(props) {
  const {
    imageUrl = defaultImage,
    title,
    authorName = 'Unknown',
    authorTag,
    price,
    quantity,
  } = props;
  return (
    <div>
      <img src={imageUrl ?? defaultImage} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorName}>{authorTag}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      {/* <p>Доступность: заканчивается или есть в наличии {quantity}</p> */}
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorTag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

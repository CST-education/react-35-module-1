import PropTypes from 'prop-types'
import { GalleryItem } from '../GalleryItem/GalleryItem'
import styles from './Gallery.module.css'
import styled from 'styled-components'

const Styles = styled.div`
  .selector1 {
    font-size: 50px;
  }
  .selector2 {
    border: 2px solid grey;
  }
`

export function Gallery({ d, i: arrayOfImages, children }) {
  return (
    <section className={styles.gallerySection}>
      {children}
      <p>{d}</p>
      <ul className={styles.galleryList}>
        {arrayOfImages.map(({ url, id }) => (
          <GalleryItem
            className={styles.galleryItem}
            key={id}
            source={url}
            id={id}
          />
        ))}
      </ul>
      <Styles>
        <p className="selector1">Lorem, ipsum dolor.</p>
        <p className="selector2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
          necessitatibus at, quis animi suscipit cum neque illum quo rem
          nostrum, et fuga consectetur quos provident minima totam quasi velit?
          Sunt ducimus dolorum nesciunt ipsa amet enim esse, explicabo
          dignissimos alias, dolorem optio asperiores atque quasi aliquid.
          Doloribus excepturi dignissimos vitae.
        </p>
      </Styles>
    </section>
  )
}

Gallery.defaultProps = {
  d: 'Default text for description',
}

Gallery.propTypes = {
  d: PropTypes.string,
  arrayOfImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      source: PropTypes.string,
    }),
  ),
  children: PropTypes.arrayOf(PropTypes.element),
}

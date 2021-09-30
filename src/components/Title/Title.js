import PropTypes from 'prop-types'
import s from './Title.module.css'

// создадим объект инлайн стилей
const stylesForTitle = {
  color: 'green',
  textTransform: 'uppercase',
}

const Title = ({ value }) => {
  return (
    <div className="titleWrapper">
      <h2 className={s.title} style={stylesForTitle}>
        {value}
      </h2>
    </div>
  )
}

export default Title

Title.defaultProps = {
  value: 'title',
}

Title.propTypes = {
  value: PropTypes.string,
}

import { connect } from 'react-redux'
import Header from '../../components/Header/Header'

const mapStateToProps = state => ({
  count: state.counter.count
})

export default connect(mapStateToProps, null)(Header)

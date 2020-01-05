import { connect } from 'react-redux';
import translate from '../../services/translate';

const Component = ({languageCode, labelKey, params = {}}) => translate(languageCode, labelKey, params);
const mapStateToProps = state => ({
    languageCode: state.config.languageCode
});
export default connect(mapStateToProps)(Component);

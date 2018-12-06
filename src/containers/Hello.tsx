import { Hello, Props, DispatchProps } from '../components/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

function mapStateToProps({ enthusiasmLevel, languageName }: StoreState): Props {
  return {
    enthusiasmLevel,
    name: languageName,
  };
}

function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>): DispatchProps {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props){
    super(props);

    this.state = {};

    this.rebuildEverything = this.rebuildEverything.bind(this);
    this.rebuildEverything(props);
  }

  componentWillReceiveProps(newProps){
    this.rebuildEverything(newProps);
  }

  rebuildEverything(props){
    // eslint-disable-next-line prefer-const
    let newState = {};

    const formValues = React.Children.map(props.children, child=>{
      if(child.props.name)
        return {
          name: child.props.name,
          value: child.props.initialValue || ''
        };
      return null;
    }).filter(v=>v);

    for(const prop of formValues)
      newState[prop.name] = this.state[prop.name] || prop.value;

    this.state = newState;

    const submitCallbacks = React.Children.map(props.children, child=>{
      if(child.props.onSubmit)
        return child.props.onSubmit;
      return null;
    }).filter(v=>v);

    this.submit = ()=>{
      for(const callback of submitCallbacks){
        if(callback && typeof callback === 'function')
          callback(this.state);
      }
    };
  }

  render(){
    const modElem = element=>{
      if(!element) return element;
      if(typeof element === 'string') return element;

      const newChildren = element.props?element.props.children:[];

      const newProps = {};

      if(element.props && element.props.name){
        newProps.onChange = value=>{
          const newState = {};
          newState[element.props.name] = value;
          this.setState(newState);
        };
        newProps.error =  this.props.errors?this.props.errors[element.props.name]:null;
        newProps.value = this.state[element.props.name];
      }

      if(element.props && element.props.onSubmit)
        newProps.onSubmit = this.submit;

      return React.cloneElement(element, newProps, React.Children.map(newChildren, modElem));
    };

    return (
      <div className="Form">
        {React.Children.map(this.props.children, modElem)}
      </div>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node,
  setProp: PropTypes.func,
  errors: PropTypes.array,
  initialValues: PropTypes.array
};

export default Form;

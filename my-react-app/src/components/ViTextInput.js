const ViTextInput = (props) => {
 return (
    <div>
          <input 
            type="text"
            onChange={props.handleInputChange}
            name={props.name}
            value={props.value}
            {...props} />
            { props.isSubmitted &&  props.value === '' && 
            <span class="danger"> Username is required</span>
            }
        </div>
 );
}
export default ViTextInput;
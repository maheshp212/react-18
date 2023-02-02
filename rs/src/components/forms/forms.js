import Alert from 'react-bootstrap/Alert';

const Form = () =>{
return (<div> Im Form

{[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
</div>)
}
export default Form;
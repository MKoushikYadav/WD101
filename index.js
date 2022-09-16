const email = document.getElementById ('email' ) ;
email.addEventListener( 'input' , () => validate(email) ) ;
function validate(element) {

if(element.validity.typeMismatch) {
element.setCustomValidity("The Email is not in the right format!!!") ;
element.reportValidity() ;
} else{
element.setCustomValidity('');
} }



const dob = document.getElementById ('dob') ;
dob.addEventListener( 'input' , () => validatedob(dob) ) ;
function validatedob(element) {
let age= Math.abs(new Date() - Date(dob));
if(element.validity.rangeUnderflow || element.validity.rangeOverflow) {
element.setCustomValidity("Age<18 or age>51") ;
element.reportValidity() ;
return false;
} else{
element.setCustomValidity('');
return true;
} }

function validate() {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  // console.log('TODO - validate the longitude, latitude values before submitting');

  let form = document.querySelector('#observation-form')
  let lat = document.querySelector('#lat').value;
  let lng = document.querySelector('#lng').value;
  let errMessageLat = document.querySelector('#lat-error');
  let errMessageLng = document.querySelector('#lng-error');

  if(!form.checkValidity()){
    return false;
  }

  if(isNaN(lat) || !(lat >= -90 && lat <= 90)){
    errMessageLat.innerText = " must be a valid Latitude (-90 to 90)";
    return false;
  } else {
    errMessageLat.innerText = "";
  }

  if(isNaN(lat) || !(lng >= -180 && lng <= 180)){
    errMessageLng.innerText = " must be a valid Longitude (-180 to 180)";
    return false;
  } else {
    errMessageLng.innerText = "";
  }

  return true;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};

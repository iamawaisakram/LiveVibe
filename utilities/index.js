import moment from 'moment';

//   name,
//   firstName,
//   lastName,
//   email,
//   password,
//   gender,
//   phone,
//   dob,
//   city_id,
//   state_id,
//   country_id,
//   device_type,
//   user_interests,
//   profile_photo,
//   cover_photo;

export default function appendDataIntoForm(data) {
  let form = new FormData();
  form.append('first_name', data.name);
  form.append('last_name', data.name);
  form.append('email', data.email);
  form.append('password', data.password);
  form.append('gender', data.gender);
  form.append('phone', data.phone);
  form.append('dob', moment(data.dob).format('YYYY-MM-DD'));
  form.append('city_id', data.city_id._id);
  form.append('state_id', data.state_id._id);
  form.append('country_id', data.country_id._id);
  form.append('device_type', data.device_type);
  form.append('user_interests', JSON.stringify(data.user_interests));
  form.append('profile_photo', data.profile_photo);
  form.append('cover_photo', data.cover_photo);

  return form;
}

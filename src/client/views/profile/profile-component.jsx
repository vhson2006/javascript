import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import FullnameComponent from '../../components/forms/fullname-component';
import EmailComponent from '../../components/forms/email-component';
import PhoneComponent from '../../components/forms/phone-component';
import AddressComponent from '../../components/forms/address-component';
import HolidayComponent from '../../components/forms/holiday-component';
import StrictSettingComponent from '../../components/forms/strict-setting-component';
import ShiftListComponent from '../../components/forms/shift-list-component';
import ButtonComponent from '../../components/buttons/button-component';
import actions from '../../actions';
import constants from '../../constants';

const mapStateToProps = (state) => ({
  fullname: state.account.name,
  email: state.account.email,
  phone: state.account.phone,
  address: state.account.address,
});

const mapDispatchToProps = (dispatch) => ({
  getDetail: () => dispatch({ type: actions.SAGA_GET_ACCOUNT, value: '' }),
  updateProfile: (e) => dispatch({ type: actions.SAGA_UPDATE_ACCOUNT, value: e }),
  loading: () => dispatch({
    type: actions.REQUEST_STATUS,
    value: constants.LOADING_REQUEST_STATUS,
  }),
});

const ProfileComponent = (props) => {
  const {
    fullname, email, phone, address,
  } = props;
  const {
    register, handleSubmit, errors,
  } = useForm();
  const updateProfile = (e) => {
    props.loading();
    props.updateProfile({ ...e });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { props.getDetail(); }, []);

  return (
    <Form className="mt-5" onSubmit={handleSubmit(updateProfile)}>
      <FullnameComponent controlId="profileName" register={register} errors={errors} defaultValue={fullname} />
      <EmailComponent controlId="profileEmail" register={register} errors={errors} defaultValue={email} />
      <PhoneComponent controlId="profilePhone" register={register} errors={errors} defaultValue={phone} />
      <AddressComponent controlId="profileAddress" register={register} errors={errors} defaultValue={address} />

      <ShiftListComponent controlId="profileShift" register={register} errors={errors} defaultValue={2} />
      <StrictSettingComponent controlId="profileStrictSetting" register={register} errors={errors} defaultValue={2} />
      <HolidayComponent controlId="profileHoliday" register={register} errors={errors} defaultValue={1} />

      <ButtonComponent controlId="profileButton" label="profileButtonLabel" />
    </Form>
  );
};
ProfileComponent.propTypes = {
  fullname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  getDetail: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);

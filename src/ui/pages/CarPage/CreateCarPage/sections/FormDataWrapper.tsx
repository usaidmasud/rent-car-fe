'use client';
import { RequestDataCar } from '@/libs/models/car.model';
import { AppDispatch } from '@/libs/redux/store';
import { storeCarService } from '@/libs/services/restAPI/car.service';
import { MESSAGE_STATE } from '@/libs/utils/messageState';
import { openNotificationWithIcon } from '@/libs/utils/notification';
import ButtonFill from '@/ui/components/Button/ButtonFill';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { initialFormState } from '../libs/initialState';
import { validation } from '../schema/validation';
import FormData from './FormData';
import { getListCar } from '@/libs/redux/features/car.slice';
function FormDataWrapper() {
  const {
    handleSubmit,
    control,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<RequestDataCar>({
    defaultValues: initialFormState(),
    resolver: yupResolver(validation),
  });
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const onSubmit: SubmitHandler<RequestDataCar> = async (data) => {
    await storeCarService(data)
      .then(() => {
        dispatch(getListCar());
        openNotificationWithIcon({
          type: 'success',
          message: MESSAGE_STATE.STORE_SUCCESS,
        });
        router.back();
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log('error', err));
  };

  useEffect(() => {
    setTimeout(() => {
      setFocus('merk');
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className='px-6'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormData control={control} errors={errors} />
        <ButtonFill block loading={isSubmitting} color='primary'>
          {MESSAGE_STATE.BUTTON_STORE}
        </ButtonFill>
      </form>
    </div>
  );
}

export default FormDataWrapper;

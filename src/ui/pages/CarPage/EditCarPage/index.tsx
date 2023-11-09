import { MENU_STATE } from '@/libs/utils/menuState';
import CustomCard from '@/ui/components/CustomCard';
import PageHeader from '@/ui/components/PageHeader';
import FormDataWrapper from './sections/FormDataWrapper';

function EditCarPage() {
  // const params = useParams();
  // const dispatch: AppDispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getDetailCar(params?.id as string));
  // }, [params, dispatch]);

  return (
    <CustomCard className=''>
      <div className='p-6'>
        <PageHeader showBackButton title={MENU_STATE.CAR.PAGE_TITLE_EDIT} />
      </div>
      <FormDataWrapper />
    </CustomCard>
  );
}

export default EditCarPage;

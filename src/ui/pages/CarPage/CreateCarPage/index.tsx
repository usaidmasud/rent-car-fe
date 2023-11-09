import { MENU_STATE } from '@/libs/utils/menuState';
import CustomCard from '@/ui/components/CustomCard';
import PageHeader from '@/ui/components/PageHeader';
import FormDataWrapper from './sections/FormDataWrapper';

function CreateCarPage() {
  return (
    <CustomCard className=''>
      <div className='p-6'>
        <PageHeader
          showBackButton
          title={MENU_STATE.CAR.PAGE_TITLE_CREATE}
        />
      </div>
      <FormDataWrapper />
    </CustomCard>
  );
}

export default CreateCarPage;

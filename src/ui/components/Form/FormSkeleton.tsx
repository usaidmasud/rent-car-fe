import { Skeleton } from 'antd';
import clsx from 'clsx';

function FormSkeleton({ length = 3, padding = false }) {
  return (
    <div className={clsx('flex flex-col gap-4', padding ? 'p-6' : 'p-0')}>
      {Array(length)
        .fill(0)
        .map((_, index) => (
          <Skeleton.Input
            key={index}
            size='large'
            style={{
              width: '100%',
            }}
            active
          />
        ))}

      <Skeleton.Button
        size='large'
        active
        style={{
          marginTop: 8,
          width: '100%',
        }}
      />
    </div>
  );
}

export default FormSkeleton;

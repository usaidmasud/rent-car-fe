'use client';
import { useEffect } from 'react';

import {
  setCollapsed,
  setOpenKeys,
  setSelectedKeys,
} from '@/libs/redux/features/root.slice';
import { useAppSelector } from '@/libs/redux/hooks';
import { AppDispatch } from '@/libs/redux/store';
import formatMenu from '@/libs/utils/formatMenu';
import { Layout, Menu } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useDispatch } from 'react-redux';
import items from './items';

const { Sider } = Layout;

function SideMenu() {
  const { collapsed, selectedKeys, openKeys } = useAppSelector(
    (state) => state.rootSlice
  );
  const pathname = usePathname();

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(setSelectedKeys(formatMenu(pathname)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, pathname]);

  return (
    <Sider
      theme='light'
      width={280}
      style={{
        minHeight: '100vh',
        backgroundColor: '#663600',
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={() => dispatch(setCollapsed())}
    >
      <div className='my-4 mt-20'>
        <div className='flex flex-col  items-center justify-center'>
          <div
            className={clsx(
              ' flex items-center justify-center rounded-full bg-white',
              !collapsed ? 'h-20 w-20' : 'h-[50px] w-[50px]'
            )}
          >
            <Image
              src='/assets/images/profile.png'
              alt='logo'
              width={collapsed ? 50 : 80}
              height={collapsed ? 50 : 80}
            />
          </div>
          <span
            className={clsx(
              'mt-3  text-center font-semibold text-white',
              collapsed ? 'text-sm' : 'text-lg'
            )}
          >
            Panel Admin
          </span>
        </div>
      </div>
      <div className='mt-10 px-4'>
        <Menu
          theme='light'
          className='bg-sidebar-main text-white'
          onOpenChange={(val) => {
            dispatch(setOpenKeys(val));
          }}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          defaultSelectedKeys={selectedKeys}
          defaultOpenKeys={openKeys}
          mode='inline'
          items={items}
        />
      </div>
    </Sider>
  );
}

export default SideMenu;

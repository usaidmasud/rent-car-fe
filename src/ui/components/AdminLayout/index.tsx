"use client";
import { Layout } from "antd";
import React from "react";
import CustomFooter from "./CustomFooter";
import CustomHeader from "./CustomHeader";
import SideMenu from "./SideMenu";

const { Content } = Layout;

interface AdminLayoutProps {
  children: React.ReactNode;
}

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <SideMenu />
      <Layout>
        <CustomHeader />
        <Content className="bg-gray-100">
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
        <CustomFooter />
      </Layout>
    </Layout>
  );
}

export default AdminLayout;

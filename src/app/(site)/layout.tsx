import AdminLayout from "@/ui/components/AdminLayout";
import { ProtectedLayout } from "@/ui/components/ProtectedLayout";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function Layout({ children }: Props) {
  return (
    <ProtectedLayout>
      <AdminLayout>{children}</AdminLayout>
    </ProtectedLayout>
  )
}

export default Layout;

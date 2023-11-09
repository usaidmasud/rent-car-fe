"use client";

import { RequestDataRegister } from "@/libs/models/auth.model";
import AuthWrapper from "@/ui/components/AuthWrapper";
import ButtonFill from "@/ui/components/Button/ButtonFill";
import InputField from "@/ui/components/Form/InputField";
import InputFieldPassword from "@/ui/components/Form/InputFieldPassword";
import InputTextField from "@/ui/components/Form/InputTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { validation } from "./schema/validation";
import { registerService } from "@/libs/services/restAPI/login.service";
import { openNotificationWithIcon } from "@/libs/utils/notification";
import { MESSAGE_STATE } from "@/libs/utils/messageState";
import { useRouter } from "next/navigation";

interface RegisterPageProps {}

function RegisterPage({}: RegisterPageProps) {
  const {
    handleSubmit,
    control,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<RequestDataRegister>({
    resolver: yupResolver(validation),
  });

  const router = useRouter();

  const handleRegister = async (data: RequestDataRegister) => {
    await registerService(data)
      .then(() => {
        openNotificationWithIcon({
          type: "success",
          message: MESSAGE_STATE.REGISTER_SUCCESS,
        });
        router.back();
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log("error", err));
  };
  return (
    <AuthWrapper
      title="Register"
      icon={<PersonIcon className="h-10 w-10 text-white " />}
    >
      <form onSubmit={handleSubmit(handleRegister)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <InputField
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              inputRef={field.ref}
              isDanger={errors?.name && true}
              helpText={errors?.name?.message}
              name="name"
              label="Nama Lengkap"
            />
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
          <Controller
            control={control}
            name="sim_number"
            render={({ field }) => (
              <InputField
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                inputRef={field.ref}
                isDanger={errors?.sim_number && true}
                helpText={errors?.sim_number?.message}
                name="sim_number"
                label="Nomor SIM"
              />
            )}
          />
          <Controller
            control={control}
            name="phone_number"
            render={({ field }) => (
              <InputField
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                inputRef={field.ref}
                isDanger={errors?.phone_number && true}
                helpText={errors?.phone_number?.message}
                name="phone_number"
                label="No Telpon"
              />
            )}
          />
        </div>
        <Controller
          control={control}
          name="address"
          render={({ field }) => (
            <InputTextField
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              inputRef={field.ref}
              isDanger={errors?.address && true}
              helpText={errors?.address?.message}
              label="Alamat"
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <InputFieldPassword
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              inputRef={field.ref}
              isDanger={errors?.password && true}
              helpText={errors?.password?.message}
              label="Password"
            />
          )}
        />

        <div className="mt-6">
          <ButtonFill
            type="submit"
            loading={isSubmitting}
            block
            color="primary"
          >
            Register
          </ButtonFill>
          <div className="text-sm">
            <span className="mr-2 text-gray-600">Sudah punya akun ?</span>
            <Link
              className="text-gray-700 transition-colors duration-200 hover:text-primary-main"
              href={"/login"}
            >
              Login
            </Link>
          </div>
        </div>
      </form>
    </AuthWrapper>
  );
}

export default RegisterPage;

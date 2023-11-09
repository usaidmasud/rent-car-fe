"use client";
import { RequestDataLogin } from "@/libs/models/auth.model";
import AuthWrapper from "@/ui/components/AuthWrapper";
import { yupResolver } from "@hookform/resolvers/yup";
import { PersonIcon } from "@radix-ui/react-icons";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { validation } from "./schema/validation";
import InputField from "@/ui/components/Form/InputField";
import InputFieldPassword from "@/ui/components/Form/InputFieldPassword";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { MESSAGE_STATE } from "@/libs/utils/messageState";
import ButtonFill from "@/ui/components/Button/ButtonFill";
import Link from "next/link";

function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<RequestDataLogin>({
    resolver: yupResolver(validation),
    defaultValues: { sim_number: "admin", password: "admin" },
  });
  const handleLogin = async (data: RequestDataLogin) => {
    const response = await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      ...data,
    });

    if (response?.error) {
      setError(true);
      setFocus("sim_number", {
        shouldSelect: false,
      });
    }

    if (response?.url) {
      router.replace(response.url);
    }
  };
  return (
    <AuthWrapper
      title="Login"
      icon={<PersonIcon className="h-10 w-10 text-white " />}
    >
      <form onSubmit={handleSubmit(handleLogin)}>
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
              label="SIM Number"
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
          {error && (
            <div className="-mt-4 mb-4">
              <p className="inline-flex w-full items-center gap-2 rounded-md bg-red-50 px-4 py-2 text-sm font-semibold tracking-tighter text-red-600">
                <XCircleIcon className="h-6 w-6 fill-red-500" />
                {MESSAGE_STATE.LOGIN_FAIL}
              </p>
            </div>
          )}
          <ButtonFill
            type="submit"
            loading={isSubmitting}
            block
            color="primary"
          >
            Login
          </ButtonFill>
          <div className='text-sm'>
            <span className='mr-2 text-gray-600'>Tidak punya akun ?</span>
            <Link
              className='text-gray-700 transition-colors duration-200 hover:text-primary-main'
              href={'/register'}
            >
              Daftar disini
            </Link>
          </div>
        </div>
      </form>
    </AuthWrapper>
  );
}

export default LoginPage;

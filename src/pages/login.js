import { InputField } from "@/components/Forms/InputField";
import { Button } from "@/components/Global/Button/Button";
import EyeSlashIcon from "@/components/Icons/EyeSlashIcon";
import { SignInWith } from "@/components/SignInWith/SignInWith";
import { fetchWord } from "@/lang/fetchWord";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

import { LanguageContext } from "./../context/LangContext";
import { ChevronIcon } from "@/components/Icons";
import { useRouter } from "next/router";
import { LoginWithSocialAccount } from "@/components/LoginWithSocialAccount";

export default function Signup() {
  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showPassword = () => {
    setPasswordType(prev => prev === 'password' ? 'text' : 'password')
  }
  const submit = () => {

  };
  return (
    <>
      <Head>
        <title>{fetchWord("login", lang)}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mobile-container-full !bg-white'>
        <button onClick={() =>router?.back()} className="fixed top-4 ltr:left-4 rtl:right-4">
          <ChevronIcon />
        </button>
        <div className='flex flex-col justify-center items-center min-h-screen max-w-[375px] mx-auto'>
          <div className="flex flex-col flex-1 items-center mb-8 overflow-auto">
            <div className="flex flex-col flex-1 mt-24 items-center w-full max-w-[500px]">
              <div className="flex flex-col w-full max-w-[500px]">
                <Image
                  className="object-contain mx-auto"
                  src="/images/logo.png"
                  alt="register"
                  height={70}
                  width={130}
                />
                <h3 className="text-primary mt-8 mb-3 text-lg font-semibold">{fetchWord("Welcome_Back", lang)}</h3>
                <p className="text-ptext mb-6">{fetchWord('login_msg', lang)}</p>
                <div>
                  <InputField
                    classes="bg-[#FAFAFA]"
                    name="email"
                    value={email}
                    // label={fetchWord("email_phone_label", lang)}
                    placeholder={fetchWord("enter_email", lang)}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputField
                    type={passwordType}
                    name="password"
                    value={password}
                    // label={fetchWord("password_label", lang)}
                    placeholder={fetchWord("enter_password", lang)}
                    onChange={(e) => setPassword(e.target.value)}
                    iconEnd={<button type="button" onClick={showPassword} className="mt-1 ltr:mr-1 rtl:ml-1">
                      <EyeSlashIcon slash={passwordType !== 'text'} className={passwordType === 'text' ? 'text-primary' : ''} />
                    </button>}
                  />
                  <Link href="/forgot-password" className=" mt-4 text-xs underline text-[#667080]">{fetchWord('forgot_password', lang)}</Link>
                </div>
                <Button classes="!p-3 mt-6 block w-full" onClick={submit} >{fetchWord("login", lang)}</Button>
                <div className="flex gap-2 items-center font-medium my-8">
                  <span className="flex-1 border-b border-[#9A949A4D]" />
                  {fetchWord('Or_Continue_With', lang)}
                  <span className="flex-1 border-b border-[#9A949A4D]" />
                </div>
                <LoginWithSocialAccount hideText />
                <p className="text-sm flex text-[#667080] mt-6 justify-center">
                  {fetchWord('dont_have_account', lang)}
                  <Link href="/signup" className=" text-[#A5106D] underline">{fetchWord('signup', lang)}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

import { InputField } from "@/components/Forms/InputField";
import { Button } from "@/components/Global/Button/Button";
import EyeSlashIcon from "@/components/Icons/EyeSlashIcon";
import { SignInWith } from "@/components/SignInWith/SignInWith";
import { fetchWord } from "@/lang/fetchWord";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import OtpInput from 'react-otp-input';

import { LanguageContext } from "./../context/LangContext";
import { ChevronIcon } from "@/components/Icons";
import { useRouter } from "next/router";

const stages = [
  { title: "with_Email", msg: "signup_msg" },
  { title: "create_password", msg: "signup_msg" },
  { title: "enter_otp", msg: "signup_msg" },
]

export default function Signup() {
  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [stage, setStage] = useState(0)

  const showPassword = () => {
    setPasswordType(prev => prev === 'password' ? 'text' : 'password')
  }


  const handleClick = () => {
    if (stage < 2)
      setStage(prev => prev + 1);
    else submit()
  }
  const handleBack = () => {
    if (stage > 0)
      setStage(prev => prev - 1);
    else router?.back()
  }
  const submit = () => {

  };
  return (
    <>
      <Head>
        <title>{fetchWord("signup", lang)}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mobile-container-full !bg-white'>
        <button onClick={handleBack} className="fixed top-4 ltr:left-4 rtl:right-4">
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
                <h3 className="text-primary mt-8 mb-3 text-lg font-semibold">{fetchWord(stages?.[stage]?.title, lang)}</h3>
                <p className="text-ptext mb-6">{fetchWord(stages?.[stage]?.msg, lang)}</p>
                {
                  stage === 0 ?
                    <div>
                      <InputField
                        classes="bg-[#FAFAFA]"
                        name="username"
                        value={username}
                        // label={fetchWord("username_label", lang)}
                        placeholder={fetchWord("enter_your_name", lang)}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <InputField
                        classes="bg-[#FAFAFA]"
                        name="email"
                        value={email}
                        // label={fetchWord("email_phone_label", lang)}
                        placeholder={fetchWord("enter_email", lang)}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    : null
                }
                {
                  stage === 1 ? (
                    <div>
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
                      <InputField
                        type={passwordType}
                        name="confirmPassword"
                        value={confirmPassword}
                        // label={fetchWord("confirm_password", lang)}
                        placeholder={fetchWord("confirm_password", lang)}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        iconEnd={<button type="button" onClick={showPassword} className="mt-1 ltr:mr-1 rtl:ml-1">
                          <EyeSlashIcon slash={passwordType !== 'text'} className={passwordType === 'text' ? 'text-primary' : ''} />
                        </button>}
                      />
                    </div>
                  ) : null
                }
                {
                  stage === 2 ? (
                    <div>
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        containerStyle={{ gap: "1rem", margin: '3rem auto', justifyContent: "center" }}
                        // renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} className="p-4 font-semibold bg-[#FAFAFA] !w-[67px] flex-1 !h-[52px] rounded-md border border-[#9A949A]" />}
                      />
                      <div className="flex gap-1">

                        <p>{fetchWord('otp_msg1', lang)}</p>
                        <button className="font-semibold">{fetchWord('otp_msg2', lang)}</button>
                        <span>{fetchWord('in', lang)}</span> 02:00
                      </div>
                    </div>
                  ) : null
                }
                <Button classes="!p-3 mt-12 block w-full" onClick={handleClick} >{fetchWord(stage < 2 ? 'Continue' : "submit", lang)}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

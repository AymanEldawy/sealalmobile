import React from 'react';
import { Layout } from './../components/Layout/Layout';
import { Breadcrumb } from './../components/Breadcrumb/Breadcrumb';
import { SearchIcon } from './../components/Icons/SearchIcon';
import { MessageIcon } from './../components/Icons/MessageIcon';
import { PaymentIcon } from './../components/Icons/PaymentIcon';
import { CancellationIcon } from './../components/Icons/CancellationIcon';
import { TrunkIcon } from './../components/Icons/TrunkIcon';
import { DollarIcon } from './../components/Icons/DollarIcon';
import { TagIcon } from './../components/Icons/TagIcon';
import { FAQCard } from './../components/FAQCard/FAQCard';
import { PrimaryButton } from './../components/Global/PrimaryButton/PrimaryButton';

const FAQ = () => {
  const faqs = [
    {
      icon: <MessageIcon color="var(--primary-color)" />,
      question: 'How do I change my account email?',
      answer:
        'You can log in to your account and change it from your Profile > Edit Profile. Then go to the general tab to change your email.',
    },
    {
      icon: <PaymentIcon width={20} color="var(--primary-color)" />,
      question: 'What should I do if my payment fails?',
      answer:
        'If your payment fails, you can use the (COD) payment option, if available on that order. If your payment is debited from your account after a payment failure, it will be credited back within 7-10 days.',
    },
    {
      icon: <CancellationIcon />,
      question: 'What is your cancellation policy?',
      answer:
        'You can now cancel an order when it is in packed/shipped status. Any amount paid will be credited into the same payment mode using which the payment was made',
    },
    {
      icon: <TrunkIcon />,
      question: 'How do I check order delivery status ?',
      answer:
        'Please tap on “My Orders” section under main menu of App/Website/M-site to check your order status.',
    },
    {
      icon: <DollarIcon />,
      question: 'What is Instant Refunds?',
      answer:
        'Upon successful pickup of the return product at your doorstep, Myntra will instantly initiate the refund to your source account or chosen method of refund. Instant Refunds is not available in a few select pin codes and for all self ship returns.',
    },
    {
      icon: <TagIcon />,
      question: 'How do I apply a coupon on my order?',
      answer:
        'You can apply a coupon on cart page before order placement. The complete list of your unused and valid coupons will be available under “My Coupons” tab of App/Website/M-site.',
    },
  ];
  return (
    <Layout>
      <div className="pt-[1px] bg-bgprimary">
        <div className="container">
          <Breadcrumb paths="FAQ" />
          <div className="flex flex-col justify-center items-center">
            <span>FAQs</span>
            <h1 className="text-4xl text-primary mb-4">Ask us anything</h1>
            <p className="text-secondary">
              Have any questions? We are here to assist you.
            </p>
            <form className="flex gap-2 shadow rounded-md p-2 my-6 max-w-xs w-full bg-white">
              <button className="scale-75">
                <SearchIcon />
              </button>
              <input type="search" placeholder="Search" />
            </form>
          </div>
        </div>
        <div className="bg-white py-6">
          <div className="container">
            <div className="grid grid-cols-3 gap-8 ">
              {faqs?.map((question) => (
                <FAQCard question={question} key={question?.question} />
              ))}
            </div>
            <div className="bg-bgprimary rounded-md max-h-56 flex justify-between items-center p-6 mt-8">
              <div className="flex flex-col ">
                <h3 className="text-tprimary text-sm mb-2 font-medium">
                  Still have questions?
                </h3>
                <p className="text-xs text-tprimary">
                  Can’t find the answer you’re looking for? Please chat to our
                  friendly team.
                </p>
              </div>
              <PrimaryButton text="Get in touch" classes="w-36 text-sm py-2" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default FAQ;

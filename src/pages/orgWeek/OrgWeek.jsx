import { Link } from "react-router-dom";

const OrgWeek = () => {
  return (
    <section className="dark:text-white text-[19px] md:text-[20px] mx-auto py-10 dark:bg-[#151f32]     px-4">
      <div className="xl:w-[1200px] mx-auto">
        <div>
          <h3> নির্দেশনাবলীঃ</h3>
          <ul className=" list-inside list-[square]">
            <li className="">সকল ফিল ফিলাপ করতে হবে।</li>
            <li>প্রয়জনীয় তথ্য সঠিকভাবে প্রদান করতে হবে।</li>
            <li>সকল ফিল্ড অবশ্যই পূরণ করতে হবে।</li>
            <li>সকল ফিল্ড অবশ্যই পূরণ করতে হবে।</li>
            <li>Image 300 * 400 px এর হতে হবে ।</li>
            <li>Maximum image size 400KB হবে।</li>
            <li>
              <span className="font-['Arial_Black'] text-[red] dark:text-[red]">KIN </span> এর
              প্রোগ্রাম সম্পর্কে Update পেতে{" "}
              <span>
                <Link
                  to={"/register"}
                  className="bg-[none] inline-block dark:text-blue-600 text-blue-600 hover:bg-transparent underline "
                >
                  REGISTER
                </Link>
              </span>{" "}
              করুন আমাদের ওয়েবসাইটে।
            </li>
          </ul>
        </div>
        <div className="space-x-4 my-6 text-white">
          <Link
            to={"/organizing-week-add"}
            className="bg-violet-600 py-3 px-3 text-[16px] rounded-md"
          >
            Join With Us
          </Link>
          <Link
            to={"/organizing-week-update"}
            className="bg-blue-600 py-3 px-3 text-[16px] rounded-md"
          >
            Update Form Data
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrgWeek;

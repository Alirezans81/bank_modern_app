import { stats } from "../constants";
import styles from "../style";

export default function Stats() {
  return (
    <section className={`flex flex-col md:flex-row items-center justify-between sm:mb-20 mb-6 gap-x-3`}>
      {stats.map((stat, index) => (
        <>
          <div
            key={stat.id}
            className={`flex justify-start items-center flex-row`}
          >
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
              {stat.value}
            </h4>
            <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
              {stat.title}
            </p>
          </div>
          {index !== stats.length - 1 && (
            <div className="hidden md:block w-[2px] h-[18px] bg-dimWhite"></div>
          )}
        </>
      ))}
    </section>
  );
}

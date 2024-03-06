import React from "react";

const DATA = [
  {
    month: "JAN",
    Days: ["Cervical Health Awareness Month", "Maternal Health Awareness Day"],
  },
  {
    month: "FEB",
    Days: [
      "World Cancer Day – Feb 4th",
      "Toothache Day – Feb 9th",
      "Heart Failure Awareness Week – 11 : 17th",
    ],
  },
  {
    month: "MARCH",
    Days: [
      "World Hearing Day – 3rd",
      "World Birth Defects Day – 3rd",
      "International Women’s Day",
      "World Optometry 17 -23",
      "World Glaucoma Week : 10th – 16th",
      "Nutritionist & Dietician Day : 13th",
      "World Glaucoma Day : 12th",
      "Patient Safety Awareness Week : 10-16th",
      "World Kidney Day : 14th",
      "World Oral Health Day : 20th",
    ],
  },
  {
    month: "APRIL",
    Days: [
      "Oral Cancer Awareness Month",
      "World Health Day – 7th",
      "World Immunization Week : 24th – 30th",
      "World Malaria Day : 25th",
      "DNA DAY – 25TH",
      "World Day for Safety & Health at Work : 28th",
      "Patient Experience Week 22nd -28th",
    ],
  },
  {
    month: "MAY",
    Days: [
      "World Hand Hygiene Day : 5th",
      "Arthritis Awareness Month",
      "Hepatitis Awareness Month",
      "Children’s Mental Health Awareness Day : 7th",
      "World Asthma Day : 7th",
      "World Ovarian Cancer Day : 8th",
      "International Nurses Day 12th",
      "World Hypertension Day : 17th",
    ],
  },
  {
    month: "JUNE",
    Days: [
      "Men Health's Month",
      "Cataract Awareness Month",
      "Men Health Week : 10th – 16th",
      "World Blood Donor Day : 14th",
      "World Sickle Cell Day :19th",
    ],
  },
  {
    month: "JULY",
    Days: [
      "World IVF / Embryologist Day : 25th",
      "World IVF/Embryologist Week :24th – 28th",
      "World Hepatitis Day : 28th",
    ],
  },
  {
    month: "AUGUST",
    Days: [
      "Children’s Eye Health Awareness Month 1st -31st",
      "World Lung Cancer Month : 1st",
      "World Breast Feeding Week 1-7th",
    ],
  },
  {
    month: "SEPTEMBER",
    Days: [
      "Blood Cancer Awareness Month",
      "Ovarian Cancer Awareness Month",
      "Polycystic Ovary Syndrome A Month",
      "Prostate Cancer Awareness Month",
      "Sepsis Awareness Month",
      "Urology Awareness Month",
      "Sexual Health Week: 9-15th",
      "World Physiotherapy Day 8th",
      "World Sepsis Day: 13th",
      "World Patient Safety Day : 17th",
      "World Lung Day : 25TH",
      "World Pharmacist Day 25th",
      "World Heart Day : 29th",
    ],
  },
  {
    month: "OCTOBER",
    Days: [
      "World Breast Cancer Awareness Month",
      "SIDS Awareness Month",
      "Child Health Day :7th",
      "World Mental Health Day: 10th",
      "World Sight Day : 10th",
      "Bone and Joint Action Week 12th -20th",
      "Global Hand Washing Day: 15th",
      "Preg and Infant Loss Awareness Day: 15th",
      "World Food Day : 16th",
      "Customer service week: 7th – 11th",
    ],
  },
  {
    month: "NOVEMBER",
    Days: [
      "Diabetic Eye Disease Awareness Month",
      "Lung Cancer Awareness Month",
      "Prematurity Awareness Month",
      "World Radiography Day: 8th",
      "World Diabetes Day : 14th",
      "World Prematurity Day 17th",
    ],
  },
  {
    month: "DECEMBER",
    Days: ["World Aids Day 1st"],
  },
];
export default function ContentCalender() {
  return (
    <section className="w-full py-2 md:py-4  h-full">
      <div className="maincontainer flex flex-col w-full justify-between items-center">
        <div className="my-10 ">
          <p className="text-2xl font-bold opacity-70">
            Here is the content calendar for the health days in a year.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-start align-top">
          {DATA.map((data, index) => (
            <div
              key={index}
              className="w-[300px] flex flex-col justify-start md:aspect-square text-2xl text-white"
            >
              <div className="">
                <p>{data.month}</p>
              </div>
              <div className="mt-2">
                <ul>
                  {data.Days.map((x, index) => (
                    <li className="text-sm opacity-80 pb-1">{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

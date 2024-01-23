import { useState } from "react";
import FaqItem from "../FaqItem/FaqItem";
import styles from "./Support.module.css";

const Support = () => {
  const [openAnswer, setOpenAnswer] = useState(null);

  const faqItems = {
    question1: {
      id: 1,
      question: "How many participants can join a ClearLink video conference?",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    question2: {
      id: 2,
      question: "Can I use ClearLink on multiple devices?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'd provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible",
    },
    question3: {
      id: 3,
      question:
        "Is ClearLink compatible with other video conferencing platforms?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'd provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible",
    },
    question4: {
      id: 4,
      question:
        "How does ClearLink ensure the security of my video conferences?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'd provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible",
    },
    question5: {
      id: 5,
      question: "Do I need to download any software to use ClearLink?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'd provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible",
    },
    question6: {
      id: 6,
      question: "What kind of customer support does ClearLink provide?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'd provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible",
    },
  };

  const handleItemClick = (key) => {
    setOpenAnswer((prevKey) => (prevKey === key ? "" : key));
  };

  return (
    <div className={styles.support}>
      <div className={styles.supportHeaderFlex}>
        <div>
          <h2 className={styles.supportHeader}>Support</h2>
          <p className={styles.supportSubHeader}>FAQS</p>
        </div>
        <p className={styles.supportDescription}>
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please{" "}
          <p className={styles.supportLink}>chat to our friendly team.</p>
        </p>
      </div>
      <div className={styles.faqItemsFlex}>
        <div className={styles.faqItems}>
          {Object.entries(faqItems).map(([key, value], index) => {
            const { question, answer } = value;
            const isOpen = openAnswer === key;

            return (
              <FaqItem
                key={key}
                index={key}
                question={question}
                answer={answer}
                isOpen={isOpen}
                hasBorderBottom={index < 5}
                onItemClick={() => handleItemClick(key)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Support;

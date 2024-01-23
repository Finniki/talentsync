import { ReactComponent as FaqOpenIcon } from "../../assets/icons/FaqOpenIcon.svg";
import { ReactComponent as FaqCloseIcon } from "../../assets/icons/FaqCloseIcon.svg";

import styles from "./FaqItem.module.css";

const FaqItem = ({
  index,
  question,
  answer,
  onItemClick,
  isOpen,
  hasBorderBottom,
}) => {
  const itemClass = hasBorderBottom ? styles.faqItem : styles.itemWithoutBorder;

  return (
    <article>
      <div
        className={`${itemClass} ${
          isOpen ? styles.faqItemOpen : styles.faqItem
        }`}
      >
        <div>
          {isOpen ? (
            <FaqOpenIcon className={styles.faqIcon} onClick={onItemClick} />
          ) : (
            <FaqCloseIcon className={styles.faqIcon} onClick={onItemClick} />
          )}
        </div>

        <div
          key={index}
          className={styles.faqIconQuestion}
          onClick={onItemClick}
        >
          <p className={styles.questionText}>{question}</p>
        </div>
        <div
          className={`${isOpen ? styles.clickedAnswer : styles.faqItemAnswer}`}
        >
          {answer}
        </div>
      </div>
    </article>
  );
};

export default FaqItem;

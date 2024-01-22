import styles from "./Features.module.css";
import FeatureItem from "../FeatureItem/FeatureItem";
import { ReactComponent as CalendarIcon } from "../../assets/icons/CalendarIcon.svg";
import { ReactComponent as Recorder } from "../../assets/icons/Recorder.svg";
import { ReactComponent as RecordingIcon } from "../../assets/icons/RecordingIcon.svg";
import { ReactComponent as LockIcon } from "../../assets/icons/LockIcon.svg";
import { ReactComponent as HandDrawnArrow } from "../../assets/icons/HandDrawnArrow.svg";
import Rectangle from "../../assets/images/Rectangle.png";

const Features = () => {
  const features = {
    Feature1: {
      icon: RecordingIcon,
      header: "Crystal-clear HD video",
      description:
        "No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.",
    },
    Feature2: {
      icon: Recorder,
      header: "Noise-canceling audio",
      description:
        "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
    },
    Feature3: {
      icon: CalendarIcon,
      header: "Scheduling made easy",
      description:
        "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
    },
    Feature4: {
      icon: LockIcon,
      header: "Bank-grade security",
      description:
        "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
    },
  };

  return (
    <div className={styles.features}>
      <div className={styles.featuresTextArea}>
        <div>
          <h2 className={styles.featuresHeader}>The ClearLink Advantage</h2>
          <p className={styles.featuresSubHeader}>Why choose ClearLink?</p>
        </div>
        <p className={styles.featuresDescription}>
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>
      <HandDrawnArrow className={styles.featuresArrow} />
      <div className={styles.featuresFlex}>
        <div className={styles.featuresGrid}>
          {Object.entries(features).map(([key, value]) => {
            return (
              <FeatureItem
                key={key}
                icon={value.icon}
                header={value.header}
                description={value.description}
              />
            );
          })}
        </div>
        <div className={styles.featuresImageDiv}>
          <img
            src={Rectangle}
            className={styles.featuresImage}
            alt="A colorful collage of sixteen portraits featuring people from different races"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;

import { motion } from 'framer-motion';
import './styles.scss';

type Props = {
  imageSrc: string;
  memberName: string;
};

function TeamMember({ imageSrc, memberName }: Props) {
  return (
    <div className="team-member-container">
      <div className="img-container">
        <motion.img
          src={imageSrc}
          alt={imageSrc}
          className="team-img"
          initial={{
            scale: 1.5,
            rotate: '10deg',
          }}
          whileInView={{
            scale: 1,
            rotate: '0deg',
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="member-name">{memberName}</div>
    </div>
  );
}

export default TeamMember;

import { motion } from 'framer-motion'

type Props = {
  contents: string[]
  customContainerStyles?: { [key: string]: string }
  customStyles?: { [key: string]: string }
  customContainerAnimation?: any
  customListItemAnimation?: any
}

// const getContainerStyles = (customAnimation?: any) => ({
//   show: {
//     transition: {
//       staggerChildren: 2,
//     },
//   },
//   ...customAnimation,
// });

const container = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const listItem = {
  hidden: { y: 400 },
  show: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

// const getListItemStyles = (hiddenY: number, customAnimation?: any) => ({
//   hidden: { y: hiddenY },
//   show: {
//     y: 0,
//     transition: {
//       duration: 5,
//     },
//   },
//   // ...customAnimation,
// });

const Header = ({
  contents,
  customContainerStyles,
  customStyles,
  customContainerAnimation,
  customListItemAnimation,
}: Props) => {
  return (
    <motion.h1
      style={{
        fontWeight: 'normal',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        ...customContainerStyles,
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ overflow: 'hidden' }}
      >
        {contents.map((line, x) => (
          <motion.div style={{ overflow: 'hidden', display: 'inline-block' }}>
            <motion.span
              variants={listItem}
              style={{ display: 'inline-block', overflow: 'hidden' }}
            >
              {line}
              <div
                style={{ display: 'inline-block', padding: '0 15px 0 0' }}
              ></div>
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </motion.h1>
  )
}

export default Header

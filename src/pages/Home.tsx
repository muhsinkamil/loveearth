import { motion } from 'framer-motion'
import { Header, LoadingScreen } from '../components'
import withLoadingScreen from '../hoc/pageTransition'
import './home.styles.scss'
import '../styles/reusableStyles.scss'

const Home = () => {
  return (
    <>
      <motion.div
        exit={{ translateX: 500 }}
        transition={{ duration: 400 }}
        className="std-container"
      >
        <Header
          contents={[
            'A',
            'DIGITAL',
            'DESIGN',
            'STUDIO',
            'DRIVEN',
            'BY',
            'RESEARCH',
            '&',
            'STRATEGY',
          ]}
          customContainerStyles={{
            margin: '5px',
            paddingTop: '6vw',
            fontSize: '6vw',
            lineHeight: '4.5vw',
          }}
          // @TODO: check styles
          // customStyles={{ fontSize: "6.5vw" }}
        />
        <Header
          contents={['About']}
          customContainerStyles={{
            margin: '5px',
            paddingTop: '6vw',
            fontSize: '4.8vw',
            lineHeight: '0.8',
            fontWeight: '400',
          }}
        />

        <h3 className="about-subtitle">
          Photography is about capturing moments you’ll want to remember
          forever. Our lens capture your moments in all their flavor and fancies
        </h3>
      </motion.div>
    </>
  )
}

export default withLoadingScreen(Home)

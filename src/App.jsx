import styles from './style';

import {AboutMe, Navbar, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer, Education, ProgrammingSkills, Certification, Projects, ContactMe} from './component';

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div> 
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutMe/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Education/>
          <ProgrammingSkills/>
          <Certification/>
          <Projects/>
          <ContactMe/>
          <Stats/>
          <Business/>
          <Billing/> 
          <CardDeal/> 
          <Testimonials/> 
          <Clients/> 
          <CTA/>
          <Footer/> 
        </div>
      </div>
    </div>
  )

export default App
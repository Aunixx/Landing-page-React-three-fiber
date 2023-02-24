// /* eslint-disable react/no-unescaped-entities */
// import { Accordion } from "react-bootstrap";
// import { AiOutlinePlus } from "react-icons/ai";
// import { faqsData } from "../../constant/faqsData";
// import { FC } from "react";
// import styles from "./faqs.module.scss";

// const FAQs: FC = () => {
//   return (
//     <section className={styles.AccordionWrapper}>
//       <div className="nitro-container">
//         <div className="team-heading">
//           <div className="heading-style-1">
//             <span className="title-borderLine h2"></span>
//             <h1>FAQs - Frequently Asked Questions</h1>
//           </div>
//         </div>
//         <Accordion>
//           {faqsData.map((faqs, index) => (
//             <Accordion.Item key={index} eventKey={faqs.eventKey}>
//               <Accordion.Header>
//                 {faqs.title}{" "}
//                 <span className="ms-auto">
//                   <AiOutlinePlus />
//                 </span>{" "}
//               </Accordion.Header>
//               <Accordion.Body>{faqs.body}</Accordion.Body>
//             </Accordion.Item>
//           ))}
//         </Accordion>
//       </div>
//     </section>
//   );
// };
// export default FAQs;

/* eslint-disable react/no-unescaped-entities */
import { Accordion } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import {
  communityFaq,
  basicFaq,
  gamePlayFaq,
  ecocnomyFaq,
} from "../../constant/faqsData";
import { FC } from "react";
import styles from "./faqs.module.scss";

const FAQs: FC = () => {
  return (
    <section className={styles.AccordionWrapper}>
      <div className="nitro-container">
        <div className="team-heading">
          <div className="heading-style-1">
            <span className="title-borderLine h2"></span>
            <h1>FAQs - Frequently Asked Questions</h1>
          </div>
        </div>
        <Accordion>
          <h4 className="nitro-pt-40 nitro-pb-40">Basics</h4>
          {basicFaq.map((faq, index) => (
            <Accordion.Item key={index} eventKey={faq.eventKey}>
              <Accordion.Header>
                {faq.title}
                <span className="ms-auto">
                  <AiOutlinePlus />
                </span>
              </Accordion.Header>
              <Accordion.Body>{faq.body}</Accordion.Body>
            </Accordion.Item>
          ))}
          <h4 className="nitro-pt-40 nitro-pb-40">Gameplay</h4>
          {gamePlayFaq.map((faq, index) => (
            <Accordion.Item key={index} eventKey={faq.eventKey}>
              <Accordion.Header>
                {faq.title}
                <span className="ms-auto">
                  <AiOutlinePlus />
                </span>
              </Accordion.Header>
              <Accordion.Body>{faq.body}</Accordion.Body>
            </Accordion.Item>
          ))}
          <h4 className="nitro-pt-40 nitro-pb-40">Economy</h4>
          {ecocnomyFaq.map((faq, index) => (
            <Accordion.Item key={index} eventKey={faq.eventKey}>
              <Accordion.Header>
                {faq.title}
                <span className="ms-auto">
                  <AiOutlinePlus />
                </span>
              </Accordion.Header>
              <Accordion.Body>{faq.body}</Accordion.Body>
            </Accordion.Item>
          ))}
          <h4 className="nitro-pt-40 nitro-pb-40">Community & Support</h4>
          {communityFaq.map((faq, index) => (
            <Accordion.Item key={index} eventKey={faq.eventKey}>
              <Accordion.Header>
                {faq.title}
                <span className="ms-auto">
                  <AiOutlinePlus />
                </span>
              </Accordion.Header>
              <Accordion.Body>{faq.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
export default FAQs;

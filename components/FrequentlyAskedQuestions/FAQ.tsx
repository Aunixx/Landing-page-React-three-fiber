import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { FAQDownload } from "../../constant/FAQ";
import styles from "./FAQ.module.scss";

const FAQ = () => {
  return (
    <section className={styles.AccordionWrapper}>
      <div className="nitro-container">
        <div className="team-heading">
          <div className="heading-style-1">
            <span className="title-borderLine h2"></span>
            <h2>FAQs - Frequently Asked Questions</h2>
          </div>
        </div>
        <Accordion>
          {FAQDownload.map((faqs, index) => (
            <Accordion.Item key={index} eventKey={faqs.eventKey}>
              <Accordion.Header>
                {faqs.title}{" "}
                <span className="ms-auto">
                  <AiOutlinePlus />
                </span>{" "}
              </Accordion.Header>
              <Accordion.Body>{faqs.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <div
          className={`${styles.FaqButton} mt-4 d-flex justify-content-center`}
        >
          <Link href="/faqs" passHref>
            <a href="">More FAQS</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import './FAQ.scss';

function FAQ() {
  return (
    <section className="FAQ__container">
      <div className="FAQ__box">
        <h2 className="FAQ__title">Frequently Asked Questions</h2>
        <details className="FAQ__accordion-box">
          <summary className="FAQ__question">
            How do I create accordion?
          </summary>
          <div className="FAQ__answer">
            The tags <em>details</em> and <em>summary</em> have you covered.
          </div>
        </details>
        <details className="FAQ__accordion-box FAQ__accordion-box_2">
          <summary className="FAQ__question">
            How do I create accordion?
          </summary>
          <div className="FAQ__answer">
            The tags <em>details</em> and <em>summary</em> have you covered.
          </div>
        </details>
        <details className="FAQ__accordion-box FAQ__accordion-box_3">
          <summary className="FAQ__question">
            How do I create accordion?
          </summary>
          <div className="FAQ__answer">
            The tags <em>details</em> and <em>summary</em> have you covered.
          </div>
        </details>
        <details className="FAQ__accordion-box FAQ__accordion-box_4">
          <summary className="FAQ__question">
            How do I create accordion?
          </summary>
          <div className="FAQ__answer">
            The tags <em>details</em> and <em>summary</em> have you covered.
          </div>
        </details>
      </div>
    </section>
  );
}

export default FAQ;

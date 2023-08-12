import './FAQ.scss';

function FAQ() {
  return (
    <section className="FAQ__container" id="faq">
      <div className="FAQ__box">
        <h2 className="FAQ__title">Frequently Asked Questions</h2>
        <details className="FAQ__accordion-box">
          <summary className="FAQ__question">
            How many species of parrots are there?
          </summary>
          <div className="FAQ__answer">
            There are <em>around 393 species</em> of parrots that have been
            recognized by the International Union for Conservation of Nature
            (IUCN). However, the exact number of species is still a matter of
            debate among experts, as some parrot species have multiple
            subspecies and the taxonomy of some groups of parrots is still being
            studied.
          </div>
        </details>
        <details className="FAQ__accordion-box FAQ__accordion-box_2">
          <summary className="FAQ__question">
            Why did the kakapo parrot almost become extinct in New Zealand?
          </summary>
          <div className="FAQ__answer">
            The kakapo parrot almost became extinct in New Zealand due to a
            combination of factors such as habitat loss, hunting by humans, and
            the introduction of predators like rats, stoats, and cats. The birds
            are flightless and have a slow reproductive rate, making them
            vulnerable to these threats. Conservation efforts have been
            implemented to protect and increase the population of the kakapo,
            including the creation of predator-free islands and a captive
            breeding program.
          </div>
        </details>
        <details className="FAQ__accordion-box FAQ__accordion-box_3">
          <summary className="FAQ__question">
            How intelligent are parrots?
          </summary>
          <div className="FAQ__answer">
            Parrots are known for their <em>high level of intelligences</em>{' '}
            among birds. They can be trained to mimic human speech and can
            understand and use language to communicate with their owners. They
            also have the ability to solve problems, demonstrate empathy, and
            exhibit a wide range of emotions. Some parrot species have been
            shown to possess cognitive abilities that are comparable to those of
            great apes and dolphins.
          </div>
        </details>
        <details className="FAQ__accordion-box FAQ__accordion-box_4">
          <summary className="FAQ__question">
            What are the most common types of parrots in the world?
          </summary>
          <div className="FAQ__answer">
            The most common types of parrots in the world are budgerigars,
            cockatiels, Amazon parrots, African grey parrots, and macaws.
          </div>
        </details>
      </div>
    </section>
  );
}

export default FAQ;

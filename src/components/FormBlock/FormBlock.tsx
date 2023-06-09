import Form from "@/components/Form/Form";

import "./FormBlock.scss";

const FormBlock = () => {
  return (
    <section id="form-block">
      <div className="_container">
        <div className="form-block__content">
          <h2 className="form-block__title">Talk To Us About Your Project</h2>
          <p className="form-block__text">
            We will never send spam or add you to a mailing list
          </p>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default FormBlock;

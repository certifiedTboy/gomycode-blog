import dummy_image from "../../Assets/hero.jpg";
import classes from "./Home.module.css";

const Testimonials = () => {
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center">
          <img
            className={classes.test_image}
            src={dummy_image}
            alt="dummy_image"
          />

          <h3>Seide Ashimi</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            nemo vel ex nulla inventore provident in dignissimos aliquid quidem.
            Temporibus velit exercitationem iusto repellat nemo. Iusto
          </p>
        </div>
        <div className="col-md-2"></div>
      </div>
    </section>
  );
};

export default Testimonials;

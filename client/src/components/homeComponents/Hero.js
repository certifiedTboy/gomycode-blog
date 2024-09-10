import { Link } from "react-router-dom";
import heroImage from "../../Assets/hero.jpg";
import classes from "./Home.module.css";

const Hero = () => {
  return (
    <section className={`container ${classes.hero_container}`}>
      <div className="row">
        <div className={`col-md-6 ${classes.image_div}`}>
          <img
            src={heroImage}
            alt="hero_image"
            className={classes.hero_image}
          />
        </div>
        <div className="col-md-6">
          <h3>About Us</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            nemo vel ex nulla inventore provident in dignissimos aliquid quidem.
            Temporibus velit exercitationem iusto repellat nemo. Iusto
            repudiandae totam non ex. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloremque nemo vel ex nulla inventore provident
            in dignissimos aliquid quidem. Temporibus velit exercitationem iusto
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            nemo vel ex nulla inventore provident in dignissimos aliquid quidem.
            Temporibus velit exercitationem iusto repellat nemo. Iusto
            repudiandae totam non ex. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloremque nemo vel ex nulla inventore provident
          </p>

          <div>
            <Link className="btn btn-secondary" to="/about">
              READ MORE...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

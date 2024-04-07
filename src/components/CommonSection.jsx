import PropTypes from "prop-types";

export const CommonSection = ({ title }) => {
  return (
    <section className="common-section py-[100px]">
      <div className="container flex items-center justify-center">
        <h1 className="text-white font-bold text-2xl">{title}</h1>
      </div>
    </section>
  );
};

CommonSection.propTypes = {
  title: PropTypes.string.isRequired,
};

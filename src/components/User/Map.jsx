import React from "react";
import BtnBack from "../Elements/BtnBack";

const AddressMap = () => {
  return (
    <div>
      <div>
        <h1> My Location </h1>
      </div>
      <div className="google-map-code">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.488316363655!2d1.4827027154959185!3d43.596373279123384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebd03abec826f%3A0x957d62567d4b8472!2s209%20Avenue%20de%20Castres%2C%2031500%20Toulouse!5e0!3m2!1sfr!2sfr!4v1593165921360!5m2!1sfr!2sfr"
          width="600"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
      <div>
        <BtnBack />
      </div>
    </div>
  );
};

export default AddressMap;

import React from 'react';
import BtnBack from "../Elements/BtnBack";

 const AddressMap=()=>{
    return (
      <div>
        <div>
          <h2> My Localisation </h2>
        </div>
        <div className="google-map-code">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d410.1175594927732!2d1.4299051063784822!3d43.59796868838596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb71973785bb%3A0xe3734de4faefe3a!2sSmoking%20Barrel!5e0!3m2!1sfr!2sfr!4v1583954036764!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        <div> 
          <BtnBack />
        </div>
      </div>
    );
 }


export default AddressMap;
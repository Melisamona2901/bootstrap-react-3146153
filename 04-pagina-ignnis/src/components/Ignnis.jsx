import React from "react";
import Ignnis from "./Ignnis.jsx";
import "./Ignnis.css";

export const IgnnisComponent = () => {
  return (
    
    <div className="container py-5">
      <h2 className="text-center text-success fw-bold mb-4">Contextualización</h2>
      <p className="text-center mb-5 w-75 mx-auto">
        El presente proyecto se dedica al estudio y análisis de diferentes temas:
        Sostenibilidad y recursos naturales y las narrativas distópicas mediante
        formatos digitales interactivos.
      </p>
      <div className="row align-items-center mb-5">
        
        <div className="col-md-6">
          <h4 className="fw-bold text-success">
            Sostenibilidad y Recursos naturales
          </h4>

          <p className="mt-3">La sostenibilidad se refiere a la capacidad de satisfacer las
            necesidades del presente sin comprometer la capacidad de las futuras
            generaciones para satisfacer sus propias necesidades...</p>

          <p>Por otro lado, los recursos naturales son aquellos bienes y servicios
            que brinda la naturaleza...</p>
        </div>
           <div className="col-md-6 text-center">
          <img
            src="https://i.imgur.com/qruVwbn.png"
            alt="Planeta verde"
            className="img-fluid round-img"
          />
        </div>

      </div>

      <hr className="my-5 opacity-25" />

      
      <div className="row align-items-center">

      
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="https://i.imgur.com/6oUq94F.png"
            alt="7 copas"
            className="img-fluid round-img"
          />
        </div>

      
        <div className="col-md-6">
          <h4 className="fw-bold text-success">Las 7 copas de la Ira de Dios</h4>

          <p className="mt-3">
            Las siete copas de la ira de Dios son un conjunto de juicios divinos
            descritos en el libro de Apocalipsis en la Biblia...
          </p>
        </div>

      </div>
    </div>
  );
};



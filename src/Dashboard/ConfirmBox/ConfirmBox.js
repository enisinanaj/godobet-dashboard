import React from "react";
import Swal from "sweetalert2";

const ConfirmBox = ({ title, confirm, callback }) => {
  Swal.fire({
    title: title,
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#56BE7F",
    cancelButtonColor: "#000",
    confirmButtonText: confirm,
  }).then((result) => {
    callback(result.value);
  });

  return <div></div>;
};

export default ConfirmBox;

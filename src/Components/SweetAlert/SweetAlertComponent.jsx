// import SweetAlert from "react-bootstrap-sweetalert";
// function SweetAlertComponent({ confirm, cancle, title, subtitle, type }) {
//   return (
//     <SweetAlert
//       style={{ zIndex: "1" }}
//       title={title}
//       onConfirm={confirm}
//       type={type !== undefined ? type : "danger"}
//       showCancel={true}
//       confirmBtnStyle={{ backgroundColor: "#024b98" }}
//       onCancel={cancle}
//     >
//       <h5> {subtitle} </h5>
//     </SweetAlert>
//   );
// }

// export default SweetAlertComponent;

import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const SweetAlertComponent = ({ confirm, cancel, title, subtitle }) => {
  useEffect(() => {
    Swal.fire({
      title,
      text: subtitle,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        confirm();
      } else {
        cancel();
      }
    });
  }, [confirm, cancel, title, subtitle]);

  return null; // No UI to render
};

export default SweetAlertComponent;

